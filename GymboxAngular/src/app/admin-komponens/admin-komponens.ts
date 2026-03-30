import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BerlesService } from '../berles-service';
import { Berles } from '../models/berles.model';
import { EdzestervService } from '../edzesterv-service';
import { Edzesterv } from '../models/edzesterv.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogKomponens } from '../confirm-dialog/confirm-dialog';
import { SnackbarService } from '../snackbar-service';

@Component({
  selector: 'app-admin-komponens',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './admin-komponens.html',
  styleUrl: './admin-komponens.css'
})
export class AdminKomponens implements OnInit {
  berlesek: Berles[] = [];
  edzestervek: Edzesterv[] = [];

  aktivTab: 'berlesek' | 'edzestervek' = 'berlesek';

  constructor(
    private berlesService: BerlesService,
    private edzestervService: EdzestervService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.loadBerlesek();
    this.loadEdzestervek();
  }

  setTab(tab: 'berlesek' | 'edzestervek'): void {
    this.aktivTab = tab;
  }

  loadBerlesek(): void {
    this.berlesService.getAll().subscribe({
      next: (data) => {
        this.berlesek = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Hiba a bérlések betöltésekor:', err);
      }
    });
  }

  loadEdzestervek(): void {
    this.edzestervService.getAll().subscribe({
      next: (data) => {
        this.edzestervek = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Hiba az edzéstervek betöltésekor:', err);
      }
    });
  }

  deleteBerles(id: number): void {
    this.berlesService.delete(id).subscribe({
      next: () => {
        this.berlesek = this.berlesek.filter(b => b.id !== id);
        this.snackbar.success('A bérlés sikeresen törölve lett.');
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Hiba bérlés törlésekor:', err);
        this.snackbar.error('Nem sikerült törölni a bérlést.');
      }
    });
  }

  deleteEdzesterv(id: number): void {
    this.edzestervService.delete(id).subscribe({
      next: () => {
        this.edzestervek = this.edzestervek.filter(e => e.id !== id);
        this.snackbar.success('Az edzésterv sikeresen törölve lett.');
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Hiba edzésterv törlésekor:', err);
        this.snackbar.error('Nem sikerült törölni az edzéstervet.');
      }
    });
  }

  confirmBerlesTorles(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogKomponens, {
      width: '400px',
      data: {
        title: 'Bérlés törlése',
        message: 'Biztosan törölni szeretnéd ezt a bérlést?'
      }
    });

    dialogRef.afterClosed().subscribe((eredmeny) => {
      if (eredmeny) {
        this.deleteBerles(id);
      }
    });
  }

  confirmEdzestervTorles(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogKomponens, {
      width: '400px',
      data: {
        title: 'Edzésterv törlése',
        message: 'Biztosan törölni szeretnéd ezt az edzéstervet?'
      }
    });

    dialogRef.afterClosed().subscribe((eredmeny) => {
      if (eredmeny) {
        this.deleteEdzesterv(id);
      }
    });
  }

  toggleStatus(id: number): void {
    this.berlesService.updateStatus(id).subscribe({
      next: () => {
        this.loadBerlesek();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Hiba státusz váltáskor:', err);
        this.snackbar.error('Nem sikerült módosítani az állapotot.');
      }
    });
  }

  get osszesRendeles(): number {
    return this.berlesek.length;
  }

  get folyamatbanDb(): number {
    return this.berlesek.filter(b => b.status === 'folyamatban').length;
  }

  get kezbesitveDb(): number {
    return this.berlesek.filter(b => b.status === 'kesz').length;
  }

  get osszesEdzesterv(): number {
    return this.edzestervek.length;
  }
}