import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavKomponens } from './nav-komponens';

describe('NavKomponens', () => {
  let component: NavKomponens;
  let fixture: ComponentFixture<NavKomponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavKomponens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavKomponens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
