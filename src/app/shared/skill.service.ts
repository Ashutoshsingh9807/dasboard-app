import {Injectable} from '@angular/core';
import { skillModel } from './skills.model';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth } from '@angular/fire/auth';
import {FirebaseListObservable} from '@angular/fire/database-deprecated';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

export class Skill {
    body: string;
    userId: string;
  } 

@Injectable ({
    providedIn:'root'
})
export class skillsService {
    formData:skillModel;
    skills: any = [];
    userId: string;
    
    constructor(private firestore:AngularFirestore, private afAuth:AngularFireAuth, private db:AngularFireDatabase) {
        this.afAuth.authState.subscribe(user => {
            if(user) this.userId = user.uid
          })
    }
    getskill() {
        return this.afAuth.authState;
     }
    getSkills(): FirebaseListObservable<Skill[]> {
        if (!this.userId) return;
        this.skills = this.db.list(`skills/${this.userId}`);
         
        // this.skills = this.db.list(`skills/`);
        return this.skills
      } 
      addSkills(skill: Skill) {
        skill.userId = this.userId
        this.skills.push(skill);
      }
} 