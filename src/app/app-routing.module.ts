import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {MenuComponent} from './components/menu/menu.component';
import {GameListComponent} from './components/game-list/game-list.component';
import {GameDetailComponent} from './components/game-detail/game-detail.component';
import {EditGameComponent} from './components/edit-game/edit-game.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'list',component:GameListComponent},
  {path:'edit',component:EditGameComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'detail/:id', component: GameDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
