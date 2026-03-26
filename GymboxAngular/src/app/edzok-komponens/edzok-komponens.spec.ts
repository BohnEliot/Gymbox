import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdzokKomponens } from './edzok-komponens';

describe('EdzokKomponens', () => {
  let component: EdzokKomponens;
  let fixture: ComponentFixture<EdzokKomponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdzokKomponens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdzokKomponens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
