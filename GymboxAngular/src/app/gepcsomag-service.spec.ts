import { TestBed } from '@angular/core/testing';

import { GepcsomagService } from './gepcsomag-service';

describe('GepcsomagService', () => {
  let service: GepcsomagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GepcsomagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
