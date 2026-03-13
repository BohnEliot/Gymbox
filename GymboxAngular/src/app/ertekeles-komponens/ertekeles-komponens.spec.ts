import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErtekelesKomponens } from './ertekeles-komponens';

describe('ErtekelesKomponens', () => {
  let component: ErtekelesKomponens;
  let fixture: ComponentFixture<ErtekelesKomponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErtekelesKomponens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErtekelesKomponens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
