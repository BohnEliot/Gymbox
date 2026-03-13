import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GepKomponens } from './gep-komponens';

describe('GepKomponens', () => {
  let component: GepKomponens;
  let fixture: ComponentFixture<GepKomponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GepKomponens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GepKomponens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
