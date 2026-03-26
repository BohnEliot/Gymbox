import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GepService } from '../gep-service';
import { Gep } from '../models/gep.model';

@Component({
  selector: 'app-gep-komponens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gep-komponens.html',
  styleUrl: './gep-komponens.css'
})
export class GepKomponens implements OnInit {
  gepek: Gep[] = [];
  betoltes = true;
  hiba = '';

  constructor(private gepService: GepService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.gepService.getAll().subscribe({
      next: (data) => {
        this.gepek = data;
        this.betoltes = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.hiba = 'Nem sikerült betölteni a gépeket.';
        this.betoltes = false;
      }
    });
  }

  getGepKep(gep: Gep): string {
    const nev = gep.nev?.toLowerCase() || '';

    if (nev.includes('gladiator') || nev.includes('gladiator')) {
      return 'assets/gep-kepek/gladiator.png';
    }

    if (nev.includes('hektor') || nev.includes('hektor')) {
      return 'assets/gep-kepek/hektor.png';
    }

    if (nev.includes('atlas') || nev.includes('atlas')) {
      return 'assets/gep-kepek/atlasx1.png';
    }

    if (nev.includes('sm80') || nev.includes('sm80')) {
      return 'assets/gep-kepek/sm80.png';
    }

    if (nev.includes('Tytan 17') || nev.includes('tytan 17')) {
      return 'assets/gep-kepek/titan17.png';
    }

    if (nev.includes('kombinált edzőkeret') || nev.includes('kombinalt edzokeret')) {
      return 'assets/gep-kepek/cyklop1.png';
    }

    if (nev.includes('Tytan12') || nev.includes('tytan12')) {
      return 'assets/gep-kepek/titan12.png';
    }

    if (nev.includes('Tytan10') || nev.includes('tytan10')) {
      return 'assets/gep-kepek/titan10.png';
    }
    if (nev.includes('kombinált edzőgép') || nev.includes('kombinalt edzogep')) {
      return 'assets/gep-kepek/poseidon.png';
    }
    if (nev.includes('WT') || nev.includes('wt')) {
      return 'assets/gep-kepek/titan17.png';
    }
    if (nev.includes('Crossover') || nev.includes('crossover')) {
      return 'assets/gep-kepek/crossover500.png';
    }
    if (nev.includes('MSX-60') || nev.includes('msx-60')) {
      return 'assets/gep-kepek/atlasatom.png';
    }
    if (nev.includes('V-series melltől') || nev.includes('v-series melltől')) {
      return 'assets/gep-kepek/atlasx2.png';
    }
    if (nev.includes('V-series tárogató') || nev.includes('v-series tárogató')) {
      return 'assets/gep-kepek/hg20.png';
    }
    if (nev.includes('MSX-50') || nev.includes('msx-50')) {
      return 'assets/gep-kepek/kettler.png';
    }
    if (nev.includes('BRX') || nev.includes('brx')) {
      return 'assets/gep-kepek/brx65.png';
    }
    if (nev.includes('combfeszítő') || nev.includes('combfeszítő')) {
      return 'assets/gep-kepek/combfeszito.png';
    }
    if (nev.includes('combhajlító') || nev.includes('combhajlító')) {
      return 'assets/gep-kepek/platinumvseriescombhajlito.png';
    }
    if (nev.includes('V-series vállból') || nev.includes('v-series vállból')) {
      return 'assets/gep-kepek/vallbolnyomo.png';
    }
    if (nev.includes('V-series csípőemelő') || nev.includes('v-series csípőemelő')) {
      return 'assets/gep-kepek/csipoemelo.png';
    }
    if (nev.includes('V-series combközelítő') || nev.includes('v-series combközelítő')) {
      return 'assets/gep-kepek/combkozelito.png';
    }
    if (nev.includes('V-series hasprés') || nev.includes('v-series hasprés')) {
      return 'assets/gep-kepek/haspres.png';
    }
    if (nev.includes('HG60') || nev.includes('hg60')) {
      return 'assets/gep-kepek/hg60.png';
    }
    if (nev.includes('ERX-500') || nev.includes('erx-500')) {
      return 'assets/gep-kepek/eliptikus500.png';
    }
    if (nev.includes('RWX') || nev.includes('rwx')) {
      return 'assets/gep-kepek/RWX5000.png';
    }
     if (nev.includes('Rower') || nev.includes('rower')) {
      return 'assets/gep-kepek/evezo.png';
    }
     if (nev.includes('ERX-400') || nev.includes('erx-400')) {
      return 'assets/gep-kepek/erx400.png';
    }
     if (nev.includes('TFK') || nev.includes('tfk')) {
      return 'assets/gep-kepek/everfit650.png';
    }
     if (nev.includes('G2B') || nev.includes('g2b')) {
      return 'assets/gep-kepek/titan7.png';
    }

    return 'assets/gep-kepek/bodysolid.png';
  }
}