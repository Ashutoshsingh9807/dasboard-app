import {Injectable} from '@angular/core';
import { registerModel } from './register.model';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable ({
    providedIn:'root'
})
export class registerService { 
    formData:registerModel;
    
    constructor(private firestore:AngularFirestore) {

    }
    // getuser_data() {
    //     return this.firestore.collection('users').doc(userkey).snapshotChanges();
    //   } 
}
