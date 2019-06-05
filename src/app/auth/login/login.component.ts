import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dashboard = 'Dashboard';
  errorMessage: string = '';
  compare_email
  constructor(private authservice:authService) { }

  ngOnInit() {
    this.authservice.errorMessage$.subscribe((errorMessage) => {
      this.errorMessage = errorMessage;
    });
  }
  onLogin( form:NgForm) {
    // const email = form.value.email;
    // const password = form.value.password;
    // this.authservice.loginUser(email, password);
    // // this.compare_email = this.email;
    this.authservice.loginUser(form.value.email, form.value.password);
  }
}
