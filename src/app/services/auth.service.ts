import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/userModel';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private errMessageSource=new Subject<string>();
  errMessage$=this.errMessageSource.asObservable();
  user:Observable<firebase.User>;
  authState;
  user$:Observable<any>;
  constructor(private afAuth:AngularFireAuth,private router:Router,private afs:AngularFirestore) { 
    this.user = this.afAuth.authState;
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
    this.user$=this.afAuth.authState.pipe(
      switchMap(user=>{
        if(user){
          console.log(this.afs.doc<User>(`users/${user.uid}`).valueChanges());
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else{
          return of(null);
        }
      })
    );
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

  async signOut(){
    await this.afAuth.signOut();
    sessionStorage.removeItem("user");
    return this.router.navigateByUrl("/login");
  }

  updateUserData({uid,birthDate,male,displayName,email,role}:User){
    const userRef:AngularFirestoreDocument<User>=this.afs.doc(`users/${uid}`);
    const data={
      uid,
      birthDate,
      male,
      displayName,
      email,role
    };
    return userRef.set(data, {merge:true});
  }

}
