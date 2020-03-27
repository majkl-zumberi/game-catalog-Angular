import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameInterface } from '../models/GameInterface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameListService {
  private gamesUrl:string="http://my-json-server.typicode.com/majkl-zumberi/game-fake-Json-rest-api/games";
  private filterGlobal:string='?q=';
  constructor(private _http:HttpClient) { }

  getListaGiochi():Observable<GameInterface[]>{
    return this._http.get<GameInterface[]>(`${this.gamesUrl}`);
  }

  getGiocoById(id:string):Observable<GameInterface>{
    return this._http.get<GameInterface>(`${this.gamesUrl}/${id}`);
  }
  
  FilterListaGiochiGlobally(searchBy:string):Observable<GameInterface[]>{
    return this._http.get<GameInterface[]>(`${this.gamesUrl}${this.filterGlobal}${searchBy}`);
  }

}
