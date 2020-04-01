import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardGame]'
})
export class CardGameDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.classList.add("animated");
    this.el.nativeElement.classList.add("fadeIn");
  }
  @HostListener("mouseenter") onMouseEnter(){
    //this.el.nativeElement.classList.add("animated");
    this.el.nativeElement.classList.remove("fadeIn");
    this.el.nativeElement.classList.add("pulse");

   }
   @HostListener("mouseleave") onMouseLeave(){
   // this.el.nativeElement.classList.remove("animated");
    this.el.nativeElement.classList.remove("pulse");

   }
}
