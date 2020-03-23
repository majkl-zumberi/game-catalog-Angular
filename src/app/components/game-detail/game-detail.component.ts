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
  constructor(private _Activatedroute:ActivatedRoute,private _game:GameListService) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      //this.id = params.get('id'); 
     // console.log(this.id);
      this._game.getGiocoById(params.get('id')).subscribe(game=>{
        this.game=game;
      })
  });
  }

}
