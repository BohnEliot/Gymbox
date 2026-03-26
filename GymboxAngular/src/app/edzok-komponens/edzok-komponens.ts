import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../api-service';

@Component({
  selector: 'app-edzok-komponens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edzok-komponens.html',
  styleUrl: './edzok-komponens.css'
})
export class EdzokKomponens implements OnInit {
  edzok: any[] = [];
  betoltes = true;
  hiba = '';

  constructor(private http: HttpClient,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.http.get<any[]>(`${API_URL}/edzok-edzestervek`).subscribe({
      next: (data) => {
        this.edzok = data;
        this.betoltes = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.hiba = 'Nem sikerült betölteni az edzőket.';
        this.betoltes = false;
      }
    });
  }
}