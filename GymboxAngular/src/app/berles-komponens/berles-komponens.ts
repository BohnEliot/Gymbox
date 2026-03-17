import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Csomag } from '../models/csomag.model';
import { Gep } from '../models/gep.model';
import { CsomagService } from '../csomag-service';
import { GepService } from '../gep-service';
import { forkJoin } from 'rxjs';
import { KosarService } from '../kosar-service';
import { Router } from '@angular/router';

type BerlesiOpcio = 3 | 6 | 12 | 24;
type EdzestervNapKulcs =
  | 'hetfo'
  | 'kedd'
  | 'szerda'
  | 'csutortok'
  | 'pentek'
  | 'szombat'
  | 'vasarnap';

@Component({
  selector: 'app-berles-komponens',
  imports: [CommonModule, FormsModule],
  templateUrl: './berles-komponens.html',
  styleUrl: './berles-komponens.css',
})
export class BerlesKomponens {
  csomagok: Csomag[] = [];
  gepek: Gep[] = [];

  selectedCsomag: Csomag | null = null;
  selectedHonap: BerlesiOpcio = 3;

  betoltes = true;
  hiba = '';

  readonly honapOpcio: BerlesiOpcio[] = [3, 6, 12, 24];
  readonly napok: { key: EdzestervNapKulcs; label: string }[] = [
    { key: 'hetfo', label: 'Hétfő' },
    { key: 'kedd', label: 'Kedd' },
    { key: 'szerda', label: 'Szerda' },
    { key: 'csutortok', label: 'Csütörtök' },
    { key: 'pentek', label: 'Péntek' },
    { key: 'szombat', label: 'Szombat' },
    { key: 'vasarnap', label: 'Vasárnap' },
  ];

  constructor(
    private csomagservice: CsomagService,
    private gepservice: GepService,
    private cdr:ChangeDetectorRef,
    private kosarService:KosarService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.betoltes = true;

    forkJoin({
      csomagok: this.csomagservice.getAll(),
      gepek: this.gepservice.getAll(),
    }).subscribe({
      next: ({ csomagok, gepek }) => {
        this.csomagok = csomagok;
        this.gepek = gepek;

        if (this.csomagok.length > 0) {
          this.selectedCsomag = this.csomagok[0];
        }

        this.betoltes = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('API hiba:', err);
        this.hiba = 'Nem sikerült betölteni az adatokat.';
        this.betoltes = false;
        this.cdr.detectChanges();
      },
    });
  }

  selectCsomag(csomag: Csomag): void {
    this.selectedCsomag = csomag;
  }

  get gepLista(): Gep[] {
    if (!this.selectedCsomag?.gepcsomag) {
      return [];
    }

    const ids = [
      this.selectedCsomag.gepcsomag.gepId1,
      this.selectedCsomag.gepcsomag.gepId2,
      this.selectedCsomag.gepcsomag.gepId3,
      this.selectedCsomag.gepcsomag.gepId4,
      this.selectedCsomag.gepcsomag.gepId5,
    ].filter((id): id is number => !!id);

    return ids
      .map((id) => this.gepek.find((gep) => gep.id === id))
      .filter((gep): gep is Gep => !!gep);
  }

  get haviAlapAr(): number {
    if (!this.selectedCsomag?.kontener) {
      return 0;
    }

    const terulet = this.selectedCsomag.kontener.negyzetMeter ?? 0;
    const gepekSzama = this.gepLista.length;

    return 90000 + terulet * 4500 + gepekSzama * 15000;
  }

  get vegosszeg(): number {
    return this.haviAlapAr * this.selectedHonap;
  }

  formatAr(osszeg: number): string {
    return new Intl.NumberFormat('hu-HU').format(osszeg);
  }

  get edzestervNapok() {
    const terv = this.selectedCsomag?.edzesterv;
    if (!terv) {
      return [];
    }

    return this.napok
      .map((nap) => ({
        label: nap.label,
        value: terv[nap.key],
      }))
      .filter((nap) => !!nap.value);
  }

  kosarba(): void {
  if (!this.selectedCsomag) {
    return;
  }

  this.kosarService.addItem({
    csomag: this.selectedCsomag,
    honap: this.selectedHonap,
    haviAr: this.haviAlapAr,
    vegosszeg: this.vegosszeg
  });

  this.router.navigate(['/kosar']);
}


}