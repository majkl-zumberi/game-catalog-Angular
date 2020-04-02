import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  currentRoute:string;
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     //console.log("sono dentro "+JSON.parse(sessionStorage.getItem("user")).name);
     
  
      if(sessionStorage.getItem("user")!=null){
       return true;
     }

     else{
       this.router.navigateByUrl("/login");
       return false;
     }
  }
  
}
