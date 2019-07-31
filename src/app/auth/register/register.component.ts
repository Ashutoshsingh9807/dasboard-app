import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import {registerService} from '../register.service';
import {registerModel} from '../register.model';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  // uploadProgress: Observable<number>;
  uplaodwidth: number;
  downloadURL: string;
  dashboard = 'Dashboard';
  errorMessage: string = '';
  selectedFile = null;

  // user_details:registerModel[];
  constructor(private authservice:authService, private RegisterService:registerService, private http:HttpClient, private toastr:ToastrService, 
    private firestore:AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit() {
   
    this.authservice.errorMessage$.subscribe((errorMessage) => {
      this.errorMessage = errorMessage;
    });

    this.resetForm();
  }
  resetForm(form?:NgForm) {
    if(form !=null)
    form.resetForm();
    this.RegisterService.formData = {
      user_icon:'',
      user_name:'',
      id:null,
      email:''
    }
  }
  upload_icon(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.storage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.task.percentageChanges().subscribe((data) => {
      this.uplaodwidth = data;   
      if(this.uplaodwidth == 100) {
       this.ref.getDownloadURL().subscribe((data) => {
        this.downloadURL = data;
        });
      }
    })       
  }


  onRegister(form:NgForm) {
    form.value['user_icon'] = this.downloadURL;
    this.authservice.registerUser(form.value);  
    if(form.value.id == null) {
    this.toastr.success('Details added Successfully');
    this.resetForm();
  } 
}

}

      