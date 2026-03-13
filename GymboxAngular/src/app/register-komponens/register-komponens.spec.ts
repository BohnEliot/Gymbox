import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterKomponens } from './register-komponens';

describe('RegisterKomponens', () => {
  let component: RegisterKomponens;
  let fixture: ComponentFixture<RegisterKomponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterKomponens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterKomponens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
