import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';




@Injectable()
export class authService {
    token:string;
    userID:string;
    newUser:any;
    errorMessageSubject = new BehaviorSubject<string>('');
    errorMessage$ = this.errorMessageSubject.asObservable();

    constructor (private router:Router, private afAuth:AngularFireAuth, private db:AngularFirestore) {}
    
    getUser() {
       return this.afAuth.authState;
    }
    loginUser(email:string, password:string){
        
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
         .catch(
            error => {
                this.errorMessageSubject.next(error.message);
            })
        
        .then(
                response => { 
                    
                    this.errorMessageSubject.next(null);
                    this.router.navigate(['/home']);
                    firebase.auth().currentUser.getIdToken()
                    .then(
                        (token:string) =>this.token = token
                        
                        )
                }
            )
    }
    registerUser(user) {
        this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then ( userCredential => {
                this.newUser = user;
                userCredential.user.updateProfile ({
                    displayName:user.name,
                    photoURL:user.icon 
                });

                this.insertUserData(userCredential) 
                    .then (()  => {
                        this.router.navigate(['/home']);
                        
                    });

            })
            .catch(
                error => {
                this.errorMessageSubject.next(error.message);
                }) 
    }
    insertUserData (userCredential:firebase.auth.UserCredential) {
        return this.db.doc(`users/${userCredential.user.uid}`).set ({
            name:this.newUser.name,
            email: this.newUser.email,
            user_icon:this.newUser.user_icon
        })
    }
    
    logout() {
        firebase.auth().signOut();
        this.token = null;
        }
    getToken() {
        firebase.auth().currentUser.getIdToken()
        .then(
            (token:string) =>this.token = token
        );
        return this.token;
    }
    isAuthenticated() {
        return this.token !=null;
    }
}