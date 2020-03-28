import { Injectable } from '@angular/core';
import { CanDeactivate} from '@angular/router';
import { EditGameComponent } from '../components/edit-game/edit-game.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<EditGameComponent> {
  canDeactivate( component: EditGameComponent):boolean  {
    if(component.editGameForm.dirty){
      
     let discardChanges=confirm('sicuro di non voler salvare le modifiche?');
     if(discardChanges){
      document.getElementById("closeModal").click();
      
      //document.querySelector(".uk-open").classList.remove("uk-open")
      //document.querySelectorAll("div").forEach(div=>{div.classList.remove("uk-open");})
      return true;
     }
     else{
       return false;
     }
    }
    console.log("form vuota quindi faccio allow della navigazione in altre routes");
    document.getElementById("closeModal").click();
    //document.querySelector(".uk-open").classList.remove("uk-open")
    return true;
  }
  
}
