import { Component, OnInit, ViewChild } from '@angular/core';
import { GameListService } from '../../services/game-list.service';
import { GameInterface } from '../../models/GameInterface';
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GenreInterface } from 'src/app/models/GenreInterface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  @ViewChild('editGameForm') public editGameForm:NgForm;
  games:GameInterface[];
  filterInput:string="cup";
  giocoForm:GameInterface;
  modalClosed:boolean=true;
  genres:GenreInterface[];
  
  valueRating:number;
  constructor(private gameService:GameListService,private Activatedroute:ActivatedRoute) { }


  ngOnInit(): void {
    this.Activatedroute.paramMap.subscribe(params => { 
      console.log("trovato parametro"+params.get('id'));
      
      params.get('id') == null? this.filterReq(""):  this.gameService.getGiocoById(params.get('id')).subscribe(game=>{
        console.log(`game: ${game.name}`);
        this.filterReq(game.name);
        this.filterInput=game.name;
      })
  });
  this.genres=this.gameService.generi;
  console.log(this.gameService.getListaGeneri().subscribe(el=>{
    console.log("el");
    console.log(el);
    this.genres=el;
  }));
  }

  filterReq(input):void{
    this.gameService.filterListaGiochiGlobally(input).subscribe(games=>{
      this.games=games;
    });
  }

  getGameForForm(game:GameInterface):void{
    console.log("sto ricevendo dal child il gioco "+game.name);
    this.valueRating=game.rating;
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

  filterBygenere(id){
    console.log(`stai cercando l'id del genere :${id}`);
    if(id == 'all'){
      console.log(`stai cercando tutti`);
      this.gameService.getListaGiochi().subscribe(games=>{
        this.games=games;
      });
    }
    else{
      this.gameService.filterGiochiByGenre(id).subscribe(game=>{
        this.games=game;
      })
    }
  }
 
}
