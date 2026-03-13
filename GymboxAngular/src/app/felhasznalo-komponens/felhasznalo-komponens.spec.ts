import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelhasznaloKomponens } from './felhasznalo-komponens';

describe('FelhasznaloKomponens', () => {
  let component: FelhasznaloKomponens;
  let fixture: ComponentFixture<FelhasznaloKomponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FelhasznaloKomponens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FelhasznaloKomponens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
