import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontenerKomponens } from './kontener-komponens';

describe('KontenerKomponens', () => {
  let component: KontenerKomponens;
  let fixture: ComponentFixture<KontenerKomponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KontenerKomponens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontenerKomponens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
