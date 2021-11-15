import { NgModule } from '@angular/core';
import { BootstrapModule } from './theme/bootstrap.module';
import { ControlPanelSidebarComponent } from './sidebar/control-panel-sidebar/control-panel-sidebar.component';

@NgModule({
    imports: [BootstrapModule],
    declarations: [
    ControlPanelSidebarComponent
  ],
    providers: [],
    exports: [BootstrapModule]
})
export class SharedModule { }
