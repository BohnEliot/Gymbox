import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavKomponens } from './nav-komponens/nav-komponens';





@Component({
  selector: 'app-root',

  templateUrl: './app.html',
  imports: [NavKomponens, RouterOutlet,RouterModule],
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Gymbox');
}
