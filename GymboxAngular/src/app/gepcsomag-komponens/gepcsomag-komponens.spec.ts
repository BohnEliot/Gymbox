import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GepcsomagKomponens } from './gepcsomag-komponens';

describe('GepcsomagKomponens', () => {
  let component: GepcsomagKomponens;
  let fixture: ComponentFixture<GepcsomagKomponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GepcsomagKomponens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GepcsomagKomponens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
