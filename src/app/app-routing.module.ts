import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {MenuComponent} from './components/menu/menu.component';
import {GameListComponent} from './components/game-list/game-list.component';
import {GameDetailComponent} from './components/game-detail/game-detail.component';
import {EditGameComponent} from './components/edit-game/edit-game.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './guard/can-deactivate.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'list',component:GameListComponent},
  {path:'edit',component:EditGameComponent,canDeactivate:[CanDeactivateGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'detail/:id', component: GameDetailComponent },
  {path:'**',component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
