import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsomagKomponens } from './csomag-komponens';

describe('CsomagKomponens', () => {
  let component: CsomagKomponens;
  let fixture: ComponentFixture<CsomagKomponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsomagKomponens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsomagKomponens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
