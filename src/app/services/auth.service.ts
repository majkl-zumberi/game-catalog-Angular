import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable<firebase.User>;
  constructor(private afAuth:AngularFireAuth,private router:Router) { }


  signUp(email:string,password:string){
    this.afAuth.createUserWithEmailAndPassword(email,password).then(
      value=>{
        console.log(`Success!, ${value}`);
        //sessionStorage.setItem("user",value.user.uid);
        //this.router.navigateByUrl('/home');
      }
    ).catch( err =>{
      console.log(`Something went wrong: ${err.message}`);
    })
  }

  signIn(){

  }
}
