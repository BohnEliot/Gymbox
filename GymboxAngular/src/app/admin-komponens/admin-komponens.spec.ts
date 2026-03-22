import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKomponens } from './admin-komponens';

describe('AdminKomponens', () => {
  let component: AdminKomponens;
  let fixture: ComponentFixture<AdminKomponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminKomponens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminKomponens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
