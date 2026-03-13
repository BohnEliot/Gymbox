import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-felhasznalo-komponens',
  imports: [CommonModule,FormsModule],
  templateUrl: './felhasznalo-komponens.html',
  styleUrl: './felhasznalo-komponens.css',
})
export class FelhasznaloKomponens {
   ujNev: string = '';
  message: string = '';

  constructor(
    public auth: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  nevModositas() {
    const user = this.auth.loggedinFelhasznalo();
    if (!user) return;

    const nev = this.ujNev.trim();
    if (nev.length < 3) {
      this.message = 'A név legyen legalább 3 karakter.';
      this.cdr.detectChanges();
      return;
    }

    this.auth.updateNev(user.id, nev).subscribe({
      next: () => {
        this.message = 'Név sikeresen módosítva!';
        this.ujNev = '';
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log('UPDATE ERROR', err);
        this.message = 'Hiba történt a név módosítása során.';
        this.cdr.detectChanges();
      }
    });
  }
}
