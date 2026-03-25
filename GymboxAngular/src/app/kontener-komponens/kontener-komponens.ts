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
}