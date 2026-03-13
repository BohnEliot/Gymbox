import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginKomponens } from './login-komponens';

describe('LoginKomponens', () => {
  let component: LoginKomponens;
  let fixture: ComponentFixture<LoginKomponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginKomponens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginKomponens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
