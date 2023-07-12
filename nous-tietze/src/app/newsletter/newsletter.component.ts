import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {

  firstName!: string;
  lastName!: string;
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);

  subscribeNewsletter()
  {
    if(!this.firstName || !this.lastName || this.email.status !== "VALID")
      alert("Veuillez rentrer votre prénom, nom et courriel pour vous abonner à la newsletter.");
    else
    {
      console.log('First Name:', this.firstName);
      console.log('Last Name:', this.lastName);
      console.log('Email:', this.email);
    }
  }

}
