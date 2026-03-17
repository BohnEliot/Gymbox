import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SajatBerlesekKomponens } from './sajat-berlesek-komponens';

describe('SajatBerlesekKomponens', () => {
  let component: SajatBerlesekKomponens;
  let fixture: ComponentFixture<SajatBerlesekKomponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SajatBerlesekKomponens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SajatBerlesekKomponens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
