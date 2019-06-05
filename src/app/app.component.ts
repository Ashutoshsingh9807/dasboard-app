import { Component, OnInit, HostBinding } from '@angular/core';
import * as firebase from 'firebase';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ToggleService } from './shared/services/toggle.service';
import { authService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit {
  title = 'dasboard-app';
  ngOnInit() {
  //   if (!firebase.apps.length) {
  //     firebase.initializeApp({});
  //  }
   if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyBr3YV0wStPd7i_KP94LMOSle-X7DSg1jg",
      authDomain: "dashboard-app-2e070.firebaseapp.com",
      projectId: "dashboard-app-2e070"
    });
  }
  }
  constructor(
    private toggleService: ToggleService,
    private auth_Service : authService
  ) { }
}
