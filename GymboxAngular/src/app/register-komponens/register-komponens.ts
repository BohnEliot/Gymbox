import { ChangeDetectorRef, Component, NgModule } from '@angular/core';
import { Felhasznalo } from '../models/felhasznalo.model';
import { AuthService } from '../auth-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-komponens',
  imports: [FormsModule],
  templateUrl: './register-komponens.html',
  styleUrl: './register-komponens.css',
})
export class RegisterKomponens {
  felhasznalo: Felhasznalo = {
  id: 0,
  nev: '',
  email: '',
  jelszo: '',
  edzoE: false,
  isAdmin: false,
  ertekeles: 0,
  kontener: 0
}

  message: string = '';

  constructor(private cdr:ChangeDetectorRef,private auth: AuthService,private router:Router) { }

  isRegistering = false;

  

  registration() {
  if (!this.felhasznalo.nev || !this.felhasznalo.email || !this.felhasznalo.jelszo) {
    this.message = 'Kérem, töltse ki az összes mezőt!';
    return;
  }

  console.log('registration meghívva');
  if (this.isRegistering) return;
  this.isRegistering = true;
  this.message = '';

  this.auth.register(this.felhasznalo.nev, this.felhasznalo.jelszo, this.felhasznalo.email, this.felhasznalo.edzoE)
    .subscribe({
      next: (res) => {
        console.log('register next',res);
        this.message = 'Sikeres regisztráció!';
        this.isRegistering = false;
        this.cdr.detectChanges();

        setTimeout(()=>{
          this.router.navigate(['/loggedin']);
        },2000);

      },
      error: (err) => {
        console.log('register error',err);
        this.message = 'Hiba történt a regisztráció során.';
        this.isRegistering = false;
        this.cdr.detectChanges();
      }
    });
}
}
