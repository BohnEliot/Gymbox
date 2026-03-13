import { TestBed } from '@angular/core/testing';

import { KontenerService } from './kontener-service';

describe('KontenerService', () => {
  let service: KontenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KontenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
