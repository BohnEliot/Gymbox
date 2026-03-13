import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth-service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-nav-komponens',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-komponens.html',
  styleUrl: './nav-komponens.css',
})
export class NavKomponens {
  constructor(public auth: AuthService, private router: Router) {}



  logout() {
    this.auth.logout();
    this.router.navigate(['/home']);
  }
}