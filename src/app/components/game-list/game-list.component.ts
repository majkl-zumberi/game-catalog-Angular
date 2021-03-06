import { Component, OnInit } from '@angular/core';
import { GameListService } from '../../services/game-list.service';
import { GameInterface } from '../../models/GameInterface';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  loaded:boolean=false;
  games:GameInterface[];
  constructor(private gameService:GameListService) {}

  ngOnInit(): void {
     this.gameService.getListaGiochi().subscribe(games=>{
       this.games=games;
       this.loaded=true;
     });

  }

}
