import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { BootstrapComponent } from './bootstrap.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule
    ],
    declarations: [BootstrapComponent],
    exports: [BootstrapComponent],
    providers: []
})
export class BootstrapModule { }
