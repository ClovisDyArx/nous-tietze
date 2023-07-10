import { Component } from '@angular/core';

@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.css']
})
export class SocialMediasComponent {
  openWebPage(url : string) {
    window.open(url, '_blank');
  }
}
