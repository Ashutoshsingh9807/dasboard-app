import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToggleService } from '../shared/services/toggle.service';
import {authService} from '../auth/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import { registerModel } from '../auth/register.model';
import {FirebaseListObservable} from '@angular/fire/database-deprecated';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed:boolean;
  isSearhcCollapsed:boolean;
  dashboard = 'Dashboard';
  user_data:registerModel[];
  userDetails;
  profileData: FirebaseListObservable<any>
 
  constructor(private toggleService:ToggleService, private AuthService:authService, private firestore:AngularFirestore, 
     private afAuth:AngularFireAuth) { 
  }
  ngOnInit() {

    this.AuthService.getUser() 
      
      this.afAuth.authState.subscribe(user => {
        // subscribe to the observable
        if(!!user) {
          this.firestore.doc(`users/${user.uid}`).valueChanges().subscribe(user => {
            this.userDetails = user;
          });
        }
      });
      
  }
 

 
  toggle_sidebar() {
     this.toggleService.toggle_sidebar();
     this.isCollapsed = this.toggleService.getIsCollapes();
  }
  toggle_searchbar() {
    this.toggleService.toggle_searchbar();
    this.isSearhcCollapsed = this.toggleService.getIsSearchCollapse();
  }
  onLogOut() {
    this.AuthService.logout();
  }
  
}
