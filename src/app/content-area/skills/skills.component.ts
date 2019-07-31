import { Component, OnInit } from '@angular/core';
import { skillsService, Skill } from 'src/app/shared/skill.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormArray } from '@angular/forms';
import * as firebase from 'firebase';
// import { FirebaseAuth } from '@angular/fire';
import {AngularFireAuth } from '@angular/fire/auth';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {skillModel} from '../../shared/skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsList;
  skillName: Array<String> = [];
  email;
  skills;
  userId: string;
 
  constructor(private skillService:skillsService, private firestore:AngularFirestore,
    private toastr:ToastrService, private afAuth:AngularFireAuth, private db:AngularFireDatabase) {
      // this.afAuth.authState.subscribe(user => {
      //   if(user) {
      //     this.userId = user.uid
      //     console.log(this.userId);
      //   }
      // })
     }

  ngOnInit() {
    this.resetForm();
  //  let skills =  this.skillService.getskill() 
  //     console.log(skills);
  //     this.afAuth.authState.subscribe(user => {
  //       // subscribe to the observable
  //       if(!!user) {
  //         this.firestore.doc(`skills/${user.uid}`).valueChanges().subscribe(user => {
  //           this.skillsList = user;
  //           console.log(user);
  //           console.log(this.skillsList);
  //         });
  //       }
  //     });
    // var user = firebase.auth().currentUser;
    // if (user != null) { 
    //   this.email = user.email;
    //   console.log(user.uid, ",", user.email);
      
    // }
    // this.skillsList = [
    //   {name:'css'},
    //   {name:'html'},
    //   {name:'JS'},
    //   {name:'Angular'},
    //   {name:'TS'}
    // ]
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
    // const skill = form.value;
    // const newSkill = new skillModel(skill.skillName, skill.id);
    // console.log(skill);
    // this.skillService.addSkills(newSkill);
    this.skillsList.push(
      {name:this.skillName}
    )

    // this.skills = this.firestore.doc(`skills/${this.userId}`);
    // console.log(this.userId);
    // if(form.value.id == null) {
    //   let details = this.firestore.collection(`skills`).add(skill)
    //   console.log(details);
    // // this.firestore.collection(`skills/${this.userId}`).add(skill);
    // this.toastr.success('Details added Successfully');
    // this.resetForm();
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
 
