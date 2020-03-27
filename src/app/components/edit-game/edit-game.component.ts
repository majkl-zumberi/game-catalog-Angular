import { Component, OnInit } from '@angular/core';
import { GameListService } from '../../services/game-list.service';
import { GameInterface } from '../../models/GameInterface';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  games:GameInterface[];
  filterInput:string="cup";
  giocoForm:GameInterface;
  modalClosed:boolean=true;
  constructor(private gameService:GameListService) { }


  ngOnInit(): void {
    this.filterReq("");
  }

  filterReq(input):void{
    this.gameService.FilterListaGiochiGlobally(input).subscribe(games=>{
      this.games=games;
    });
  }

  getGameForForm(game:GameInterface):void{
    console.log("sto ricevendo dal child il gioco "+game.name);
    this.giocoForm=game;
  }
  editGameApi(form:NgForm){
    //change ui
    console.log("ready to edit the game!");
    console.log(form.value);
    console.log("found desc: "+form.value.titleGame);
    let gameIndex:number=this.games.findIndex((game)=>{
      return game.name == this.giocoForm.name;
    });
    this.games[gameIndex].name=form.value.titleGame;
    this.games[gameIndex].desc=form.value.descGame;
    document.getElementById("closeModal").click();
   //put request
  }


 
}
