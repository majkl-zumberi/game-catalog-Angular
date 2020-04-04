import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './guard/can-deactivate.guard';
import { CanActivateGuard } from './guard/can-activate.guard';
import { LoginComponent } from './components/login/login.component';
import { CardGameDirective } from './directives/card-game.directive';
import { PriceGameDirective } from './directives/price-game.directive';
import { IdToGenrePipe } from './components/pipes/id-to-genre.pipe';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegistrationComponent } from './components/registration/registration.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    GameListComponent,
    GameDetailComponent,
    EditGameComponent,
    GameItemComponent,
    PageNotFoundComponent,
    LoginComponent,
    CardGameDirective,
    PriceGameDirective,
    IdToGenrePipe,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,//solo per andare ad utilizzare firestore (db)
    AngularFireAuthModule
  ],
  providers: [CanDeactivateGuard,CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
