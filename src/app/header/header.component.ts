import { Component } from '@angular/core';

@Component({
    selector: 'app-header', //Selector tells Angular which elements on the screen should be controlled by the component
    standalone: true, //Standalone Component
    templateUrl: './header.component.html', //Defines the content that should be display by the component
    styleUrl: './header.component.css' 
})

export class HeaderComponent {}