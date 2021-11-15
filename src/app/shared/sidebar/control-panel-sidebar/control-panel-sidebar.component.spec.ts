import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelSidebarComponent } from './control-panel-sidebar.component';

describe('ControlPanelSidebarComponent', () => {
  let component: ControlPanelSidebarComponent;
  let fixture: ComponentFixture<ControlPanelSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPanelSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPanelSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
