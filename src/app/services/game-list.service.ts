import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameInterface } from '../models/GameInterface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameListService {
  private gamesUrl:string="http://my-json-server.typicode.com/majkl-zumberi/TestingAPIJsonPlaceholder/games";
  private genresUrl:string="http://my-json-server.typicode.com/majkl-zumberi/TestingAPIJsonPlaceholder/genres";
  private filterGlobal:string='?q=';
  genreList:any;
  constructor(private http:HttpClient) { 
    this.getListaGeneri().subscribe(genres=>{
      this.genreList=genres;
    })
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
