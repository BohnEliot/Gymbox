import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service';

export const edzoGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isLoggenIn()) {
    router.navigate(['/login']);
    return false;
  }

  const user = auth.loggedinFelhasznalo();

  if (!user?.edzoE) {
    router.navigate(['/home']);
    return false;
  }

  return true;
};