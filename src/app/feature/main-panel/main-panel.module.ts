import { NgModule } from '@angular/core';
import { ColorPoletteComponent } from './color-polette/color-polette.component';
import { MainPanelRoutingModule } from "./main-panel.routing.module";

@NgModule({
  imports: [MainPanelRoutingModule],
  exports: [],
  declarations: [
    ColorPoletteComponent
  ],
  providers: [],
})
export class MainPanelModule { }
