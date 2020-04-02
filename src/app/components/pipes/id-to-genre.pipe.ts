import { Pipe, PipeTransform } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Pipe({
  name: 'idToGenre'
})
export class IdToGenrePipe implements PipeTransform {
  constructor(){
  }
  transform(idGenre: number):any{
    var memet=[
      {
        "id": "1",
        "name": "GDR"
      },
      {
        "id": "2",
        "name": "azione"
      },
      {
        "id": "3",
        "name": "sport"
      },
      {
        "id": "4",
        "name": "Picchiaduro"
      },
      {
        "id": "5",
        "name": "Sparatutto in terza persona"
      }
    ];
   return  memet.find(el=>{return el.id==idGenre.toString()}).name;
  }

}
