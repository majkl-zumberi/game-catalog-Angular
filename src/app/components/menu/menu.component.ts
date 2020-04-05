import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  role:string='';
  currentRoute:string;
  username:string;
  constructor(private router:Router,private afAuth:AuthService) { 
  }
  
  ngOnInit(): void {
    //console.log(this.router.routerState.root);
    this.router.events.subscribe(value => {
      console.log('current route: ', this.router.url.toString());
      this.currentRoute=this.router.url.toString();
      this.username=sessionStorage.getItem("user")== null ? "" : JSON.parse(sessionStorage.getItem("user")).name;
      this.afAuth.user$.subscribe(user=>{
        console.log(user.role);
        this.role=user.role;
      });
  });
 
  }
  userLogout(){
   // sessionStorage.removeItem("user");
   // this.router.navigateByUrl("/login");
  this.afAuth.signOut();
  }
}
