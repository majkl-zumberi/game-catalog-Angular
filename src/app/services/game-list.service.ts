import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameInterface } from '../models/GameInterface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameListService {
  public gamesUrl:string="http://my-json-server.typicode.com/majkl-zumberi/game-fake-Json-rest-api/games";

  constructor(private _http:HttpClient) { }

  getListaGiochi():Observable<GameInterface[]>{
    return this._http.get<GameInterface[]>(`${this.gamesUrl}`);
  }
}
