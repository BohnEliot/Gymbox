import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KosarKomponens } from './kosar-komponens';

describe('KosarKomponens', () => {
  let component: KosarKomponens;
  let fixture: ComponentFixture<KosarKomponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KosarKomponens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KosarKomponens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
