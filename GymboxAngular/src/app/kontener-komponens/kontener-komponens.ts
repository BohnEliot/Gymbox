import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { KontenerService } from '../kontener-service';
import { Kontener } from '../models/kontener.model';

@Component({
  selector: 'app-kontener-komponens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kontener-komponens.html',
  styleUrl: './kontener-komponens.css'
})
export class KontenerKomponens implements OnInit {
  kontenerek: Kontener[] = [];
  kiemeltKontener: Kontener | null = null;
  tobbiKontener: Kontener[] = [];
  betoltes = true;
  hiba = '';

  constructor(private kontenerService: KontenerService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.kontenerService.getAll().subscribe({
      next: (data) => {
        this.kontenerek = data;
        this.kiemeltKontener = data.length ? data[0] : null;
        this.tobbiKontener = data.slice(1);
        this.betoltes = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.hiba = 'Nem sikerült betölteni a konténereket.';
        this.betoltes = false;
      }
    });
  }
getKontenerKep(kontener: Kontener): string {
    const nev = kontener.kontenerNev?.toLowerCase() || '';

    if (nev.includes('Kardió') || nev.includes('kardió')) {
      return 'assets/kontener-kepek/kardio40.png';
    }
    if (nev.includes('Vegyes') || nev.includes('vegyes')) {
      return 'assets/kontener-kepek/vegyes40.png';
    }
     if (nev.includes('40') || nev.includes('40')) {
      return 'assets/kontener-kepek/kondi40.png';
    }
         if (nev.includes('45') || nev.includes('40')) {
      return 'assets/kontener-kepek/kondi45.png';
    }



    return 'assets/gep-kepek/bodysolid.png';
  }

}