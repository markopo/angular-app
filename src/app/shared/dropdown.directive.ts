import { OnInit, Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropDownDirective  implements OnInit {
   @HostBinding('class.open') isOpen = false;

   constructor(private elRef: ElementRef) {


   }

   @HostListener('click') mouseClick() {
        this.isOpen = !this.isOpen;
   }

   ngOnInit() {
      console.log('appDropdown init');
   }

}
