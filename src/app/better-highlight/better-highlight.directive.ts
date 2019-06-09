import {OnInit, ElementRef, HostListener, HostBinding} from '@angular/core';
import { Directive, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
   @HostBinding('style.backgroundColor') bgColor: string = 'transparent';


  constructor(private renderer: Renderer2, private elRef: ElementRef) {

   }

    @HostListener('mouseenter') mouseOver(eventData: Event) {
        this.setBgColor('blue');
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        this.setBgColor('transparent');
    }



    private setBgColor(bgColor: string): void {
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', bgColor);
        this.bgColor = bgColor;
    }


   ngOnInit() {


      const span = document.createElement('span');
      span.style.color = 'white';
      span.style.backgroundColor = 'red';
      span.innerText = 'GREAT!';

     this.renderer.appendChild(this.elRef.nativeElement, span);
   }
}
