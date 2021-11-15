import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "@shared/shared.module";
import { BootstrapComponent } from "@shared/theme";

@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [
    BootstrapComponent
  ]
})
export class AppModule { }
