import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login-komponens',
  imports: [FormsModule],
  templateUrl: './login-komponens.html',
  styleUrl: './login-komponens.css',
})
export class LoginKomponens {
  felhasznaloEmail:string='';
  felhasznaloJelszo:string='';

  constructor(private router:Router,private auth:AuthService){}

  loginBtn(){
    this.auth.getFelhasznalo(this.felhasznaloEmail,this.felhasznaloJelszo).subscribe({
      next:(felhasznalo)=>{
        this.auth.loggedinFelhasznalo.set(felhasznalo);
        this.router.navigate(['/loggedin']);
        this.auth.isLoggenIn.set(true);
      },
      error:(error)=>{
        if (error.status===401) {
          alert("Hibás e-mail cím vagy jelszó!");
        }
        else{
          alert("Hiba történt!");
        }
      }
    })
  }
}
