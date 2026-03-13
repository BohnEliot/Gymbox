import { TestBed } from '@angular/core/testing';

import { CsomagService } from './csomag-service';

describe('CsomagService', () => {
  let service: CsomagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsomagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
