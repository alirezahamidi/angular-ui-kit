import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelNavbarComponent } from './control-panel-navbar.component';

describe('ControlPanelNavbarComponent', () => {
  let component: ControlPanelNavbarComponent;
  let fixture: ComponentFixture<ControlPanelNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPanelNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPanelNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
