import { TestBed } from '@angular/core/testing';

import { EdzestervService } from './edzesterv-service';

describe('EdzestervService', () => {
  let service: EdzestervService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdzestervService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
