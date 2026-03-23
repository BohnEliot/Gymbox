import { Component, NgModule } from '@angular/core';
import { Edzesterv } from '../models/edzesterv.model';
import { AuthService } from '../auth-service';
import { EdzestervService } from '../edzesterv-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edzesterv-keszito-komponens',
  imports: [CommonModule,FormsModule],
  templateUrl: './edzesterv-keszito-komponens.html',
  styleUrl: './edzesterv-keszito-komponens.css',
})
export class EdzestervKeszitoKomponens {
  edzesterv: Edzesterv = {
  felhasznalo_id: 0,
  hetfo: '',
  kedd: '',
  szerda: '',
  csutortok: '',
  pentek: '',
  szombat: '',
  vasarnap: '',
  megjegyzes: ''
};

constructor(private auth: AuthService, private edzestervService: EdzestervService) {}

ngOnInit(): void {
  const user = this.auth.loggedinFelhasznalo();
  if (user) {
    this.edzesterv.felhasznalo_id = user.id;
  }
}

save(): void {
  this.edzestervService.create(this.edzesterv).subscribe({
    next: () => {
      alert('Edzésterv sikeresen mentve');
      this.edzesterv = {
        felhasznalo_id: this.auth.loggedinFelhasznalo()!.id,
        hetfo: '',
        kedd: '',
        szerda: '',
        csutortok: '',
        pentek: '',
        szombat: '',
        vasarnap: '',
        megjegyzes: ''
      };
    },
    error: (err) => console.error(err)
  });
}
}
