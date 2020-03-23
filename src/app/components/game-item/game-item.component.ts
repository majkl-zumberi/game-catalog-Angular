import { Component, OnInit,Input} from '@angular/core';
import { GameInterface } from 'src/app/models/GameInterface';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {

  @Input() gameItem:GameInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
