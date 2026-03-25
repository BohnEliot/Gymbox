import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GepService } from '../gep-service';
import { Gep } from '../models/gep.model';

@Component({
  selector: 'app-gep-komponens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gep-komponens.html',
  styleUrl: './gep-komponens.css'
})
export class GepKomponens implements OnInit {
  gepek: Gep[] = [];
  betoltes = true;
  hiba = '';

  constructor(private gepService: GepService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.gepService.getAll().subscribe({
      next: (data) => {
        this.gepek = data;
        this.betoltes = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.hiba = 'Nem sikerült betölteni a gépeket.';
        this.betoltes = false;
      }
    });
  }
}