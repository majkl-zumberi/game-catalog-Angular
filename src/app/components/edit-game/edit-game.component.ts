import { Component, OnInit } from '@angular/core';
import { GameListService } from '../../services/game-list.service';
import { GameInterface } from '../../models/GameInterface';
@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  games:GameInterface[];
  filterInput:string="cup";
  giocoForm:GameInterface;
  constructor(private gameService:GameListService) { }


  ngOnInit(): void {
    this.filterReq("");
  }

  filterReq(input):void{
    this.gameService.FilterListaGiochiGlobally(input).subscribe(games=>{
      this.games=games;
    });
  }

  getGameForForm(game:GameInterface){
    console.log("sto ricevendo dal child il gioco");
    this.giocoForm=game;
  }
}
