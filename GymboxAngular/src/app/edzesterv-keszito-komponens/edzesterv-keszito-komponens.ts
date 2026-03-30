import { Component } from '@angular/core';
import { Edzesterv } from '../models/edzesterv.model';
import { AuthService } from '../auth-service';
import { EdzestervService } from '../edzesterv-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SnackbarService } from '../snackbar-service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edzesterv-keszito-komponens',
  imports: [CommonModule, FormsModule, MatSnackBarModule],
  templateUrl: './edzesterv-keszito-komponens.html',
  styleUrl: './edzesterv-keszito-komponens.css',
})
export class EdzestervKeszitoKomponens {
  edzesterv: Edzesterv = {
    felhasznalo_id: 0,
    hetfo: '',
    kedd: '',
    szerda: '',
    csutortok: '',
    pentek: '',
    szombat: '',
    vasarnap: '',
    megjegyzes: ''
  };

  constructor(
    private auth: AuthService,
    private edzestervService: EdzestervService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    const user = this.auth.loggedinFelhasznalo();
    if (user) {
      this.edzesterv.felhasznalo_id = user.id;
    }
  }
isValid(): boolean {
  return !!(
    this.edzesterv.hetfo?.trim() &&
    this.edzesterv.kedd?.trim() &&
    this.edzesterv.szerda?.trim() &&
    this.edzesterv.csutortok?.trim() &&
    this.edzesterv.pentek?.trim() &&
    this.edzesterv.szombat?.trim() &&
    this.edzesterv.vasarnap?.trim()
  );
}

  save(): void {
  if (!this.isValid()) {
    this.snackbar.error('Kérlek tölts ki minden mezőt!');
    return;
  }

    this.edzestervService.create(this.edzesterv).subscribe({
      next: () => {
        this.snackbar.success('Edzésterv sikeresen mentve');
        this.edzesterv = {
          felhasznalo_id: this.auth.loggedinFelhasznalo()!.id,
          hetfo: '',
          kedd: '',
          szerda: '',
          csutortok: '',
          pentek: '',
          szombat: '',
          vasarnap: '',
          megjegyzes: ''
        };
      },
      error: (err) => {
        console.error(err);
        this.snackbar.error('Nem sikerült elmenteni az edzéstervet.');
      }
    });
  }
}