import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPoletteComponent } from './color-polette.component';

describe('TestComponent', () => {
  let component: ColorPoletteComponent;
  let fixture: ComponentFixture<ColorPoletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPoletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPoletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
