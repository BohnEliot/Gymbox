import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BerlesService } from '../berles-service';
import { Berles } from '../models/berles.model';

@Component({
  selector: 'app-admin-komponens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-komponens.html',
  styleUrl: './admin-komponens.css'
})
export class AdminKomponens implements OnInit {
  berlesek: Berles[] = [];

  constructor(private berlesService: BerlesService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadBerlesek();
  }

  loadBerlesek(): void {
    this.berlesService.getAll().subscribe({
      next: (data) => {
        this.berlesek = data;
        this.cdr.detectChanges()
      },
      error: (err) => {
        console.error('Hiba a bérlések betöltésekor:', err);
      }
    });
  }

  deleteBerles(id: number): void {
    this.berlesService.delete(id).subscribe({
      next: () => {
        this.berlesek = this.berlesek.filter(b => b.id !== id);
        this.cdr.detectChanges()
      },
      error: (err) => {
        console.error('Hiba törléskor:', err);
      }
    });
  }

  toggleStatus(id: number) {
  this.berlesService.updateStatus(id).subscribe(() => {
    this.loadBerlesek();
    this.cdr.detectChanges()
  });
}


  get osszesRendeles(): number {
    return this.berlesek.length;
  }

get folyamatbanDb() {
  return this.berlesek.filter(b => b.status === 'folyamatban').length;
}

get kezbesitveDb() {
  return this.berlesek.filter(b => b.status === 'kesz').length;
}
}