import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPriceGame]'
})
export class PriceGameDirective {

  constructor(private el:ElementRef) {
  }
  @HostListener("mouseenter") onMouseEnter(){
    this.el.nativeElement.classList.add("animated");
    this.el.nativeElement.classList.add("tada");

   }
   @HostListener("mouseleave") onMouseLeave(){
    this.el.nativeElement.classList.remove("animated");
    this.el.nativeElement.classList.remove("tada");

   }

}
