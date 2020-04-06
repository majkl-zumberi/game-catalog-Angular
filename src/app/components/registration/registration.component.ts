import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { errors } from '../../models/loginErrorsMessages';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  formUserLogin:FormGroup;
  signUpError:string='';
  formError:string='campo obbligatorio';
  get emailControl():FormControl{
    return this.formUserLogin.get('email') as FormControl;
  }
  get usernameControl():FormControl{
    return this.formUserLogin.get('username') as FormControl;
  }
  get passwordControl():FormControl{
    return this.formUserLogin.get('password') as FormControl;
  }
  get passwordConfirmControl():FormControl{
    return this.formUserLogin.get('passwordConfirm') as FormControl;
  }
  constructor(private auth:AuthService,private fb:FormBuilder) {
    this.formUserLogin=this.fb.group({
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      passwordConfirm:['',Validators.required],
    });
   }

  ngOnInit(): void {
  }

  signUpUser(){
    console.log("user attempted to register");
    //console.log(form.value);
    if(this.passwordConfirmControl.value == this.passwordControl.value){
      this.auth.signUp(this.emailControl.value,this.passwordControl.value,this.usernameControl.value);
      this.auth.errMessage$.subscribe(error=>{
        this.signUpError=errors[error];
      });
    }
    else{
      this.signUpError="le password non corrispondono";
      console.log("password non corrispondono");
      this.clearForm();
    }
  }

  clearForm() {

    this.formUserLogin.reset({
          'username': this.usernameControl.value,
          'email': this.emailControl.value,
          'password': '',
          'passwordCofirm': ''
         });
    }
}
