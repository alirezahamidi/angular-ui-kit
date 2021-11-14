import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BootstrapModule } from "./shared/theme/bootstrap.module";
import { BootstrapComponent } from "./shared/theme/bootstrap.component";
import { MainPanelNavbarComponent } from './shared/navbar/main-panel-navbar/main-panel-navbar.component';
import { ControlPanelNavbarComponent } from './shared/navbar/control-panel-navbar/control-panel-navbar.component';

@NgModule({
  declarations: [
  
    MainPanelNavbarComponent,
       ControlPanelNavbarComponent
  ],
  imports: [
    AppRoutingModule,
    BootstrapModule
  ],
  providers: [],
  bootstrap: [
      BootstrapComponent
  ]
})
export class AppModule { }
