import { Component, HostListener } from '@angular/core';
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
  menuOpen = false;
  constructor(public auth: AuthService, private router: Router) {}

   toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
  


  logout() {
    this.auth.logout();
    this.closeMenu();
    this.router.navigate(['/home']);
  }

   @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 1200) {
      this.menuOpen = false;
    }
  }
}