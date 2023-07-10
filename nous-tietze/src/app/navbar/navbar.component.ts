import { Component } from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  categories = [
    { name: 'Le Syndrome de Tietze', subcategories: ['Histoire', 'L\'association'] },
    { name: 'Actualités', subcategories: ['News', 'Événements', 'Mediatietze'] },
    { name: 'Contact', subcategories: ['Informations', 'Témoignages', 'Parrains et Marraines'] },
    { name: 'Dons', subcategories: ['Vous voulez nous aider ?'] }
  ];

  constructor(private router: Router) {}
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
