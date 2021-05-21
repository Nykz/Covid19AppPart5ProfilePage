import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public pages: any[] = [
    {title: 'Home', url: '/home', icon: 'home'},
    {title: 'Profile', url: '/profile', icon: 'person'},
    {title: 'About Us', url: '/about', icon: 'information-circle'},
    {title: 'Privacy Policy', url: '/privacy', icon: 'document-lock'},
    {title: 'Sign Out', url: '', icon: 'log-out', route: true},
  ];

  constructor() {}

  signOut() {
    console.log('signout');
  }
}
