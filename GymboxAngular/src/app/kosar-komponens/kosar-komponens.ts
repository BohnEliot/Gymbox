import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KosarService } from '../kosar-service';
import { KosarItem } from '../models/kosar.model';
import { BerlesService } from '../berles-service';
import { AuthService } from '../auth-service';
import { forkJoin } from 'rxjs';
import { EdzestervService } from '../edzesterv-service';
import { SnackbarService } from '../snackbar-service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-kosar-komponens',
  standalone: true,
  imports: [CommonModule, RouterLink, MatSnackBarModule],
  templateUrl: './kosar-komponens.html',
  styleUrl: './kosar-komponens.css'
})
export class KosarKomponens implements OnInit {
  items: KosarItem[] = [];
  mentesFolyamatban = false;

  constructor(
    private kosarService: KosarService,
    private berlesService: BerlesService,
    private edzestervService: EdzestervService,
    public auth: AuthService,
    private cdr: ChangeDetectorRef,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.items = this.kosarService.getItems();
  }

  torol(index: number): void {
    this.kosarService.removeItem(index);
    this.items = this.kosarService.getItems();
  }

  urit(): void {
    this.kosarService.clearKosar();
    this.items = [];
  }

  veglegesit(): void {
    if (this.items.length === 0) {
      return;
    }

    const user = this.auth.loggedinFelhasznalo();

    if (!user) {
      this.snackbar.info('A bérléshez be kell jelentkezni.');
      return;
    }

    this.mentesFolyamatban = true;

    const requests = this.items.map(item =>
      this.berlesService.create({
        felhasznalo_id: user.id,
        csomag: item.csomag.id,
        berlesiIdo: item.honap,
        ar: item.vegosszeg,
        edzesterv_id: item.edzesterv_id
      })
    );

    forkJoin(requests).subscribe({
      next: () => {
        this.snackbar.success('Sikeres bérlés!');
        this.kosarService.clearKosar();
        this.items = [];
        this.mentesFolyamatban = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.snackbar.error('Nem sikerült a bérlés mentése.');
        this.mentesFolyamatban = false;
        this.cdr.detectChanges();
      }
    });
  }

  get total(): number {
    return this.items.reduce((sum, item) => sum + item.vegosszeg, 0);
  }

  formatAr(osszeg: number): string {
    return new Intl.NumberFormat('hu-HU').format(osszeg);
  }
}