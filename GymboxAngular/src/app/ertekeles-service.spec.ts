import { TestBed } from '@angular/core/testing';

import { ErtekelesService } from './ertekeles-service';

describe('ErtekelesService', () => {
  let service: ErtekelesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErtekelesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
