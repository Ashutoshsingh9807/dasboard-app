import {Injectable} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { newMessage } from '../new-message.model';


@Injectable ({
    providedIn:'root'
})
export class newMessageService { 
    formData:newMessage;
    
    constructor(private firestore:AngularFirestore) {

    }
    getuser_data() {
        return this.firestore.collection('user_registration').snapshotChanges();
      } 
}
