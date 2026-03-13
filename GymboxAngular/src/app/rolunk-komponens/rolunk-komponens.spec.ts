import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolunkKomponens } from './rolunk-komponens';

describe('RolunkKomponens', () => {
  let component: RolunkKomponens;
  let fixture: ComponentFixture<RolunkKomponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolunkKomponens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolunkKomponens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
