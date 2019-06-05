import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToggleService } from '../shared/services/toggle.service';
import {authService} from '../auth/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import { registerService } from '../auth/register.service';
import { registerModel } from '../auth/register.model';
import {first, tap } from 'rxjs/operators'
import { AngularFireDatabase } from '@angular/fire/database';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed:boolean;
  isSearhcCollapsed:boolean;
  dashboard = 'Dashboard';
  user_name = 'Ashutosh Singh';
  user_data:registerModel[];
  user;
 
  constructor(private toggleService:ToggleService, private AuthService:authService, private firestore:AngularFirestore, 
    private regiserservice:registerService) { 
  }
  ngOnInit() {

    // this.regiserservice.getuser_data().subscribe(actionArray => {
    //   this.user_data = actionArray.map(item => {
    //     return {
    //       id:item.payload.doc.id,
    //       ...item.payload.doc.data()} as registerModel;
          
    //   })
    // });
    this.AuthService.getUser() 
      .subscribe( user => {
        this.user = user;
      })
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
