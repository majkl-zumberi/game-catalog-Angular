import { Component, OnInit } from '@angular/core';
import { GameListService } from '../../services/game-list.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  dataFromApi:Object;
  constructor(private _list:GameListService) { }

  ngOnInit(): void {
    this.dataFromApi=this._list.getDataFromObject();
  }

}
