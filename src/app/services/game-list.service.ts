import { Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameInterface } from '../models/GameInterface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameListService {
  private gamesUrl:string="http://my-json-server.typicode.com/majkl-zumberi/game-fake-Json-rest-api/games";
  private genresUrl:string="http://my-json-server.typicode.com/majkl-zumberi/game-fake-Json-rest-api/genres";
  private filterGlobal:string='?q=';
  constructor(private http:HttpClient) { 
  }
  getListaGeneri():Observable<any[]>{
    
    return this.http.get<any>(this.genresUrl);
  }
  getListaGiochi():Observable<GameInterface[]>{
    return this.http.get<GameInterface[]>(`${this.gamesUrl}`);
  }

  getGiocoById(id:string):Observable<GameInterface>{
    return this.http.get<GameInterface>(`${this.gamesUrl}/${id}`);
  }
  
  filterListaGiochiGlobally(searchBy:string):Observable<GameInterface[]>{
    return this.http.get<GameInterface[]>(`${this.gamesUrl}${this.filterGlobal}${searchBy}`);
  }

  getGenreById(idGenre:number):Observable<any>{
    return this.http.get<any>(`${this.genresUrl}?id=${idGenre}`);
  }

}
