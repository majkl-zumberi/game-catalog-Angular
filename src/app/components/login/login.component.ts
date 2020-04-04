import { Component, OnInit } from '@angular/core';
import {NgForm, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { errors } from '../../models/loginErrorsMessages';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:string='campo obbligatorio';
  loginError:string='';
  loginForm:FormGroup;

  get usernameControl():FormControl{
    return this.loginForm.get('username') as FormControl;
  }
  get passwordControl():FormControl{
    return this.loginForm.get('password') as FormControl;
  }
  
  constructor(private fb:FormBuilder,private auth:AuthService) { 
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }
  loginUser(){
    console.log("user attempted to login");
   
    //sessionStorage.setItem("user",form.value.username);
   // this.router.navigateByUrl("/home");
   this.auth.signIn(this.usernameControl.value,this.passwordControl.value);
   this.auth.errMessage$.subscribe(message=>{
     this.loginError=errors[message];
     console.log(message);
   });

  }
}
