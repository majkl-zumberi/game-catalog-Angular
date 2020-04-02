import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  username:string;
  email:string;
  password:string;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  signInUser(form:NgForm){
    console.log("user attempted to register");
    console.log(form.value);
    this.auth.signUp(form.value.email,form.value.password,form.value.username);
  }
}
