import {OnInit, ElementRef, HostListener, HostBinding, Input} from '@angular/core';
import { Directive, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
   @Input() defaultColor: string = 'transparent';
   @Input() highLightColor: string = 'blue';
   @HostBinding('style.backgroundColor') bgColor: string = this.defaultColor;


  constructor(private renderer: Renderer2, private elRef: ElementRef) {

   }

    @HostListener('mouseenter') mouseOver(eventData: Event) {
        this.setBgColor(this.highLightColor);
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        this.setBgColor(this.defaultColor);
    }



    private setBgColor(bgColor: string): void {
        this.bgColor = bgColor;
    }


   ngOnInit() {

      this.setBgColor(this.defaultColor);

      const span = document.createElement('span');
      span.style.color = 'white';
      span.style.backgroundColor = 'red';
      span.innerText = 'GREAT!';

     this.renderer.appendChild(this.elRef.nativeElement, span);
   }
}
