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

  constructor(private gameService:GameListService) { }


  ngOnInit(): void {
    this.filterReq("");
  }

  filterReq(input):void{
    console.log("works!"+input);
    this.gameService.FilterListaGiochiGlobally(input).subscribe(games=>{
      this.games=games;
    });
  }
}
