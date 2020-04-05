import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';
import { GameInterface } from 'src/app/models/GameInterface';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/it';
import { AngularFireAuth } from '@angular/fire/auth/auth';
import { AuthService } from 'src/app/services/auth.service';
registerLocaleData(localeFr, 'it');
@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {

  @Input() gameItem:GameInterface;
  @Input() showRead:boolean=true;
  @Input() showForm:boolean=false;
  @Output() outputToEditGame=new EventEmitter<GameInterface>();
  showEdit:boolean=false;
  constructor(private afAuth:AuthService) { }

  ngOnInit(): void {
    this.afAuth.user$.subscribe(user=>{
      this.showEdit=user.role === 'admin'? true:false;
    });
  }
  tranferGameToForm(gameItemToForm:GameInterface){
    console.log("sto per passare al parent il gioco da modificare "+gameItemToForm.name);
    this.outputToEditGame.emit(gameItemToForm);
  }
}
