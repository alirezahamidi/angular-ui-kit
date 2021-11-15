import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorPoletteComponent } from "./color-polette/color-polette.component";

const routes: Routes = [
  {
    path: '',
    component: ColorPoletteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPanelRoutingModule { }
