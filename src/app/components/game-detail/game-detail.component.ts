import { Component, OnInit } from '@angular/core';
import { GameListService } from '../../services/game-list.service';
import { GameInterface } from '../../models/GameInterface';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  game:GameInterface;
  constructor(private Activatedroute:ActivatedRoute,private gameService:GameListService) { }

  ngOnInit(): void {
    this.Activatedroute.paramMap.subscribe(params => { 
      //this.id = params.get('id'); 
     // console.log(this.id);
      this.gameService.getGiocoById(params.get('id')).subscribe(game=>{
        this.game=game;
      })
  });
  }

}
