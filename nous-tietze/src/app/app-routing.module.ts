import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from "./accueil/accueil.component";
import { TietzeComponent } from "./tietze/tietze.component";
import { AssociationComponent } from "./association/association.component";
import { NewsComponent } from "./news/news.component";
import { EventsComponent } from "./events/events.component";
import { MediatietzeComponent } from "./mediatietze/mediatietze.component";
import { InfosComponent } from "./infos/infos.component";
import { TemoignagesComponent } from "./temoignages/temoignages.component";
import { ParrainsMarrainesComponent } from "./parrains-marraines/parrains-marraines.component";
import { DonsComponent } from "./dons/dons.component";


const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'tietze', component: TietzeComponent },
  { path: 'asso', component: AssociationComponent},
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'mediatietze', component: MediatietzeComponent },
  { path: 'infos', component: InfosComponent },
  { path: 'temoignages', component: TemoignagesComponent },
  { path: 'parrains-marraines', component: ParrainsMarrainesComponent },
  { path: 'dons', component: DonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
