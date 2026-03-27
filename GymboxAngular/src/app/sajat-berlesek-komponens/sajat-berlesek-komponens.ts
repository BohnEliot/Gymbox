import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BerlesService } from '../berles-service';
import { AuthService } from '../auth-service';
import { Berles } from '../models/berles.model';
import { SnackbarService } from '../snackbar-service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogKomponens } from '../confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-sajat-berlesek-komponens',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule, MatDialogModule],
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
    private cdr: ChangeDetectorRef,
    private snackbar: SnackbarService,
    private dialog: MatDialog
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
    const dialogRef = this.dialog.open(ConfirmDialogKomponens, {
      width: '400px',
      data: {
        title: 'Bérlés lemondása',
        message: 'Biztosan le szeretnéd mondani ezt a bérlést?'
      }
    });

    dialogRef.afterClosed().subscribe((eredmeny) => {
      if (!eredmeny) {
        return;
      }

      this.berlesService.delete(berlesId).subscribe({
        next: () => {
          this.berlesek = this.berlesek.filter(b => b.id !== berlesId);
          this.snackbar.success('A bérlés sikeresen le lett mondva.');
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error(err);
          this.snackbar.error('Nem sikerült lemondani a bérlést.');
        }
      });
    });
  }
}