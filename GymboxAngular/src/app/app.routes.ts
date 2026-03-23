import { Routes } from '@angular/router';
import { BerlesKomponens } from './berles-komponens/berles-komponens';
import { CsomagKomponens } from './csomag-komponens/csomag-komponens';
import { KontenerKomponens } from './kontener-komponens/kontener-komponens';
import { FelhasznaloKomponens } from './felhasznalo-komponens/felhasznalo-komponens';
import { GepcsomagKomponens } from './gepcsomag-komponens/gepcsomag-komponens';
import { GepKomponens } from './gep-komponens/gep-komponens';
import { ErtekelesKomponens } from './ertekeles-komponens/ertekeles-komponens';
import { RegisterKomponens } from './register-komponens/register-komponens';
import { LoginKomponens } from './login-komponens/login-komponens';
import { authGuard } from './auth-guard';
import { RolunkKomponens } from './rolunk-komponens/rolunk-komponens';
import { KosarKomponens } from './kosar-komponens/kosar-komponens';
import { SajatBerlesekKomponens } from './sajat-berlesek-komponens/sajat-berlesek-komponens';
import { adminGuard } from './admin-guard';
import { AdminKomponens } from './admin-komponens/admin-komponens';
import { EdzestervKeszitoKomponens } from './edzesterv-keszito-komponens/edzesterv-keszito-komponens';
import { edzoGuard } from './edzo-guard-guard';


export const routes: Routes = [
  { path: 'berlesek', component: BerlesKomponens },
  { path: 'csomagok', component: CsomagKomponens },
  { path: 'kontenerek', component: KontenerKomponens },
  { path: 'loggedin', component: FelhasznaloKomponens, canActivate:[authGuard] },
  { path: 'gepek', component: GepKomponens },
  { path: 'ertekelesek', component: ErtekelesKomponens },
  { path: 'gepcsomagok', component: GepcsomagKomponens },
  { path: 'register', component: RegisterKomponens },
  { path: 'login', component: LoginKomponens },
  { path: 'home', component: RolunkKomponens },
  { path: 'kosar', component: KosarKomponens },
  { path: 'sajat-berleseim', component: SajatBerlesekKomponens },
  { path: 'admin', component: AdminKomponens, canActivate: [adminGuard] },
  { path: 'edzesterv-keszites', component: EdzestervKeszitoKomponens, canActivate: [edzoGuard] },
  { path: '',redirectTo:'home',pathMatch:'full' }

];

