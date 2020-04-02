import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';
import { GameInterface } from 'src/app/models/GameInterface';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/it';
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
  constructor() { }

  ngOnInit(): void {
  }
  tranferGameToForm(gameItemToForm:GameInterface){
    console.log("sto per passare al parent il gioco da modificare "+gameItemToForm.name);
    this.outputToEditGame.emit(gameItemToForm);
  }
}
