import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-panel-theme',
    templateUrl: 'main-panel.theme.html',
    styleUrls: ['main-panel.theme.scss']
})

export class MainPanelThemeComponent implements OnInit {
    lightBackgroundImage = '/assets/images/back.jpg';
    darkBackgroundImage = '/assets/images/back-dark.jpg'
    theme: string;
    constructor() {
        this.theme = 'light-theme';
    }

    ngOnInit() { }

    ngAfterViewChecked() {
        this.theme = sessionStorage.getItem('theme') as any;
    }
}