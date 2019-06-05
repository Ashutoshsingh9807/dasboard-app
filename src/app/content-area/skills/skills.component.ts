import { Component, OnInit } from '@angular/core';
import { skillsService } from 'src/app/shared/skill.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
// import { FirebaseAuth } from '@angular/fire';
import {AngularFireAuth } from '@angular/fire/auth';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsList;
  skillName;
  email;
  skills;
  userId: string;
  constructor(private skillService:skillsService, private firestore:AngularFirestore,
    private toastr:ToastrService, private afAuth:AngularFireAuth, private db:AngularFireDatabase) {
      this.afAuth.authState.subscribe(user => {
        if(user) this.userId = user.uid
      })
     }

  ngOnInit() {
    this.resetForm();
    var user = firebase.auth().currentUser;
    if (user != null) { 
      this.email = user.email;
      console.log(user.uid, ",", user.email);
      
    }
  }
  resetForm(form?:NgForm) {
    if(form !=null)
    form.resetForm();
    this.skillService.formData = {
      id:null,
      skillName: ''  
    }
  }
  onaddSkill(form:NgForm) {

    let skill = form.value;
    this.skillService.addSkills(form.value);
    this.skills = this.db.list(`skills/${this.userId}`);
    console.log(this.skills);
    if(form.value.id == null) {
    this.toastr.success('Details added Successfully');
    this.firestore.collection(`skills/${this.userId}`).add(skill);
    this.resetForm();
  }
    // let skill = Object.assign({},form.value);
    // delete skill.id;
    // this.firestore.collection('skills').add(skill);
    // const value = form.value;
    // let skill = this.skillService.addSkills(form.value);
    // if(form.value.id == null) {
    // this.toastr.success('Details added Successfully');
    
   
      
  
  //   else {    
  //     this.firestore.doc('skills/'+form.value.id).update(skill);
  //     this.resetForm(form);
  //     this.toastr.success('Skills updated successfully');
  // } 
  }
 
}