import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BerlesService } from '../berles-service';
import { AuthService } from '../auth-service';
import { Berles } from '../models/berles.model';

@Component({
  selector: 'app-sajat-berlesek-komponens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sajat-berlesek-komponens.html',
  styleUrl: './sajat-berlesek-komponens.css'
})
export class SajatBerlesekKomponens implements OnInit {
  berlesek: Berles[] = [];
  betoltes = true;
  hiba = '';

  constructor(
    private berlesService: BerlesService,
    public auth: AuthService,
    private cdr:ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const user = this.auth.loggedinFelhasznalo();

    if (!user) {
      this.hiba = 'A bérlések megtekintéséhez be kell jelentkezni.';
      this.betoltes = false;
      return;
    }

    this.berlesService.getUserBerlesek(user.id).subscribe({
      next: (adatok) => {
        this.berlesek = adatok;
        this.betoltes = false;
        this.cdr.detectChanges();

      },
      error: (err) => {
        console.error(err);
        this.hiba = 'Nem sikerült betölteni a bérléseket.';
        this.betoltes = false;
      }
    });
  }

  formatAr(osszeg: number): string {
    return new Intl.NumberFormat('hu-HU').format(osszeg);
  }

  formatIdo(honap: number): string {
    if (honap === 12) return '1 év';
    if (honap === 24) return '2 év';
    return `${honap} hónap`;
  }

  lemondas(berlesId: number): void {
  const biztos = confirm('Biztosan le szeretnéd mondani ezt a bérlést?');

  if (!biztos) {
    return;
  }

  this.berlesService.delete(berlesId).subscribe({
    next: () => {
      this.berlesek = this.berlesek.filter(b => b.id !== berlesId);
      alert('A bérlés sikeresen le lett mondva.');
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error(err);
      alert('Nem sikerült lemondani a bérlést.');
    }
  });
}
}