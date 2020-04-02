import { Pipe, PipeTransform } from '@angular/core';
import { GameListService } from 'src/app/services/game-list.service';


@Pipe({
  name: 'idToGenre'
})
export class IdToGenrePipe implements PipeTransform {

  constructor(private comp:GameListService){
  }
  transform(idGenre: number):any{
    
    return this.comp.generi.find(el=>{return el.id==idGenre.toString()}).name;
  
  }

}
