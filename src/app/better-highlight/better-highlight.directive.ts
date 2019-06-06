import { OnInit, ElementRef } from '@angular/core';
import { Directive, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) {

   }


   ngOnInit() {
     this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');

      const span = document.createElement('span');
      span.style.color = 'white';
      span.style.backgroundColor = 'red';
      span.innerText = 'GREAT!';

     this.renderer.appendChild(this.elRef.nativeElement, span);
   }
}
