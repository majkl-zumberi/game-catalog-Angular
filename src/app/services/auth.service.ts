import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private errMessageSource=new Subject<string>();
  errMessage$=this.errMessageSource.asObservable();
  user:Observable<firebase.User>;
  authState;
  constructor(private afAuth:AngularFireAuth,private router:Router) { 
    this.user = this.afAuth.authState;
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
    console.log("this.user");
    console.log(this.user);
    console.log("this.authState");
    console.log(this.authState);
  }


  signUp(email:string,password:string,username:string){
    this.afAuth.createUserWithEmailAndPassword(email,password).then(
      user=>{
        console.log(`Success!, ${user}`);
        console.log(user);
        sessionStorage.setItem("user",user.user.uid);
        //aggiorno nome profilo
        user.user.updateProfile({
          displayName: username
        }).then(function() {
          console.log(`ho aggiornato l'utente, ${user}`);
          this.router.navigateByUrl('/home');
        }).catch(function(error) {
          console.log("non sono riuscito ad aggiornare l'utente"+error.message);
          this.router.navigateByUrl('/home');
        });
      }
    ).catch( err =>{
      console.log(`Something went wrong: ${err.message}`);
      this.errMessageSource.next(err.message);
    })
  }

  signIn(email:string,password:string){
    this.afAuth.signInWithEmailAndPassword(email,password).then(
      user=>{
        console.log(`Success! user successfully signed In!, ${user}`);
        console.log(user);
        sessionStorage.setItem("user",JSON.stringify({uid:user.user.uid,name:user.user.displayName}))
        this.router.navigateByUrl('/home');
      }
    ).catch( err =>{
      console.log(`Something went wrong: ${err.message}`);
      this.errMessageSource.next(err.message);
    })
  }
}
