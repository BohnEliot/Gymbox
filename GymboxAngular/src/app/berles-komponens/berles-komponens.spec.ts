import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerlesKomponens } from './berles-komponens';

describe('BerlesKomponens', () => {
  let component: BerlesKomponens;
  let fixture: ComponentFixture<BerlesKomponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerlesKomponens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerlesKomponens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
