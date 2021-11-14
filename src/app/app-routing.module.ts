import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPanelThemeComponent } from "@shared/theme/main-panel-theme/main-panel.theme";


const routes: Routes = [{
  path: '',
  loadChildren: () => import('./feature/main-panel/main-panel.module').then(m => m.MainPanelModule),
  component: MainPanelThemeComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
