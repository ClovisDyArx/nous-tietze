import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.css']
})
export class NavbarButtonComponent {
  @Input() title: string = '';
  @Input() subcategories: string[] = [];
  panelOpenState : boolean = false; // just a toggle option to view if opened or not (!= hideToggle)
}
