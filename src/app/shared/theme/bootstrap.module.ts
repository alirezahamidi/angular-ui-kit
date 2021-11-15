import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { BootstrapComponent } from './bootstrap.component';
import { RouterModule } from "@angular/router";
import { MainPanelThemeComponent } from "./main-panel-theme/main-panel.theme";
import { ControlPanelThemeComponent } from "./control-panel-theme/control-panel-theme";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule
    ],
    declarations: [
        BootstrapComponent,
        MainPanelThemeComponent,
        ControlPanelThemeComponent
    ],
    exports: [BootstrapComponent],
    providers: []
})
export class BootstrapModule { }
