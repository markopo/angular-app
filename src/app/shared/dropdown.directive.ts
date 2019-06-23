import { OnInit, Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropDownDirective  implements OnInit {
   @HostBinding('class.open') isOpen = false;

   constructor(private elRef: ElementRef) {


   }

   @HostListener('click', ['$event']) mouseClick(event: Event) {
        const elem: HTMLElement = event.target as HTMLElement;

        if(elem.tagName === 'A' && elem.className.indexOf('dropdown-toggle') > -1) {
          this.isOpen = !this.isOpen;
        }
   }

   ngOnInit() {
      console.log('appDropdown init');
   }

}
