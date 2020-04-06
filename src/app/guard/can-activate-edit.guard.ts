import {
  Injectable
} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Route,
  Router
} from '@angular/router';
import {
  Observable
} from 'rxjs';
import {
  AuthService
} from '../services/auth.service';
import {
  map
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanActivateEditGuard implements CanActivate {
  constructor(private afAuth: AuthService, private route: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable < boolean | UrlTree > | Promise < boolean | UrlTree > | boolean | UrlTree {
    return this.afAuth.user$.pipe(
      map(user => {
          console.log("da guard");
          console.log(user.role);
          if (user.role != "admin") {
            this.route.navigateByUrl("/home");
            return false;
          } else
            return true;
        })
    );
  }

}
