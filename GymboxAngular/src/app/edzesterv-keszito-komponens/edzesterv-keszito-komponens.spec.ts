import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdzestervKeszitoKomponens } from './edzesterv-keszito-komponens';

describe('EdzestervKeszitoKomponens', () => {
  let component: EdzestervKeszitoKomponens;
  let fixture: ComponentFixture<EdzestervKeszitoKomponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdzestervKeszitoKomponens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdzestervKeszitoKomponens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
