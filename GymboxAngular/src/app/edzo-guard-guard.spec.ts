import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { edzoGuardGuard } from './edzo-guard-guard';

describe('edzoGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => edzoGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
