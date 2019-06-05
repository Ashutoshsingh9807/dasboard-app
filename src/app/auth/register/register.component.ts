import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import {registerService} from '../register.service';
import {registerModel} from '../register.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dashboard = 'Dashboard';
  errorMessage: string = '';
  selectedFile = null;
  // user_details:registerModel[];
  constructor(private authservice:authService, private RegisterService:registerService, private http:HttpClient, private toastr:ToastrService, private firestore:AngularFirestore) { }

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
  onFileSelected(event) { 
    this.selectedFile =event.target.files[0]; 
  }
  onRegister(form:NgForm) {
    this.authservice.registerUser(form.value);
    if(form.value.id == null) {
    this.toastr.success('Details added Successfully');
  } 
}
}

      