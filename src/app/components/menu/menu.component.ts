import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  currentRoute:string;
  username:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.router.routerState.root);
    this.router.events.subscribe(value => {
      //console.log('current route: ', this.router.url.toString());
      this.currentRoute=this.router.url.toString();
      this.username=sessionStorage.getItem("user");
  });
  }
  userLogout(){
    sessionStorage.removeItem("user");
    this.router.navigateByUrl("/login");
  }
}
