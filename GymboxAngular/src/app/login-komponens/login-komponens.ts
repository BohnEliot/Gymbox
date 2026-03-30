import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';
import { FormsModule } from '@angular/forms';
import { SnackbarService } from '../snackbar-service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-komponens',
  imports: [FormsModule, MatSnackBarModule],
  templateUrl: './login-komponens.html',
  styleUrl: './login-komponens.css',
})
export class LoginKomponens {
  felhasznaloEmail: string = '';
  felhasznaloJelszo: string = '';

  constructor(
    private router: Router,
    private auth: AuthService,
    private snackbar: SnackbarService
  ) { }

  loginBtn() {
    this.auth.getFelhasznalo(this.felhasznaloEmail, this.felhasznaloJelszo).subscribe({
      next: (felhasznalo) => {
        this.auth.loggedinFelhasznalo.set(felhasznalo);
        this.snackbar.success('Sikeres bejelentkezés');
        this.router.navigate(['/loggedin']);
        this.auth.isLoggenIn.set(true);
      },
      error: (error) => {
        if (error.status === 401) {
          this.snackbar.error('Hibás e-mail cím vagy jelszó!');
        } else {
          this.snackbar.error('Hiba történt!');
        }
      }
    });
  }
}