import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingToStars'
})
export class RatingToStarsPipe implements PipeTransform {

  transform(rating:number): any {
    let stars="";
    //star effettive del rating (piene)
    for(let i=0;i<rating;i++){
      stars+=`<i class="fas fa-star"></i>`;
    }
    //adesso metto quelle vuote
    for(let j=0;j<5-rating;j++){
      stars+=`<i class="far fa-star"></i>`
    }
    return stars;
  }

}
