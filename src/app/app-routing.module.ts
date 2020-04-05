import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {MenuComponent} from './components/menu/menu.component';
import {GameListComponent} from './components/game-list/game-list.component';
import {GameDetailComponent} from './components/game-detail/game-detail.component';
import {EditGameComponent} from './components/edit-game/edit-game.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './guard/can-deactivate.guard';
import { LoginComponent } from './components/login/login.component';
import { CanActivateGuard } from './guard/can-activate.guard';
import { CanActivateLoginGuard } from './guard/can-activate-login.guard';
import { RegistrationComponent } from './components/registration/registration.component';
import { CanActivateRegistrationGuard } from './guard/can-activate-registration.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent,canActivate:[CanActivateGuard]},
  {path:'list',component:GameListComponent,canActivate:[CanActivateGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'detail/:id', component: GameDetailComponent,canActivate:[CanActivateGuard]},
  {path:'edit/:id',component:EditGameComponent,canDeactivate:[CanDeactivateGuard],canActivate:[CanActivateGuard]},
  {path:'edit',component:EditGameComponent,canDeactivate:[CanDeactivateGuard],canActivate:[CanActivateGuard]},
  {path:"login",component:LoginComponent,canActivate:[CanActivateLoginGuard]},
  {path:"signUp",component:RegistrationComponent,canActivate:[CanActivateRegistrationGuard]},
  {path:'**',component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
