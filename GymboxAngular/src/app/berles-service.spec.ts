import { TestBed } from '@angular/core/testing';

import { BerlesService } from './berles-service';

describe('BerlesService', () => {
  let service: BerlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BerlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
