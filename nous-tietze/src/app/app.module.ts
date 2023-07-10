import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarButtonComponent } from './navbar-button/navbar-button.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { SocialMediasComponent } from './social-medias/social-medias.component';
import {NgOptimizedImage} from "@angular/common";
import { MainMenuComponent } from './main-menu/main-menu.component';
import { EndpageNavbarComponent } from './endpage-navbar/endpage-navbar.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    NavbarButtonComponent,
    NavbarComponent,
    SocialMediasComponent,
    MainMenuComponent,
    EndpageNavbarComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    NgOptimizedImage,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
