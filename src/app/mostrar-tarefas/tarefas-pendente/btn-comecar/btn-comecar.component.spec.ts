import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnComecarComponent } from './btn-comecar.component';

describe('BtnComecarComponent', () => {
  let component: BtnComecarComponent;
  let fixture: ComponentFixture<BtnComecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnComecarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnComecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
