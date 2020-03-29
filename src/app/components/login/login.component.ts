import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(form:NgForm){
    console.log("user attempted to login");
    console.log(form.value.username);
    sessionStorage.setItem("user",form.value.username);
    this.router.navigateByUrl("/home");
  }
}
