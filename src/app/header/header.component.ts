
import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

   @Output() linkSelected = new EventEmitter<string>();


    onSelect(link: string){
        console.log("onSelect: ", link);
        this.linkSelected.emit(link);
    }
}
