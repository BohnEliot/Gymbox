import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-rolunk-komponens',
  imports: [RouterLink,RouterModule],
  templateUrl: './rolunk-komponens.html',
  styleUrl: './rolunk-komponens.css',
})
export class RolunkKomponens {
constructor(private router:Router){}
}
