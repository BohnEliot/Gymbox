import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KosarService } from '../kosar-service';
import { KosarItem } from '../models/kosar.model';
import { BerlesService } from '../berles-service';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-kosar-komponens',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './kosar-komponens.html',
  styleUrl: './kosar-komponens.css'
})
export class KosarKomponens implements OnInit {
  items: KosarItem[] = [];
  mentesFolyamatban = false;

  constructor(
    private kosarService: KosarService,
    private berlesService: BerlesService,
    public auth: AuthService,
    private cdr:ChangeDetectorRef
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
      alert('A bérléshez be kell jelentkezni.');
      return;
    }

    const elso = this.items[0];
    this.mentesFolyamatban = true;

    this.berlesService.create({
      felhasznalo_id: user.id,
      csomag: elso.csomag.id,
      berlesiIdo: elso.honap,
      ar: elso.vegosszeg
    }).subscribe({
      next: () => {
        alert('Sikeres bérlés!');
        this.kosarService.clearKosar();
        this.items = [];
        this.mentesFolyamatban = false;
      },
      error: (err) => {
        console.error(err);
        alert('Nem sikerült a bérlés mentése.');
        this.mentesFolyamatban = false;
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