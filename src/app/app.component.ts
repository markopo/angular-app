import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    linkSelected = 'recipe';

     numbers = [];

     constructor() {

         for(let i = 0; i <= 20; i++) {
             this.numbers.push(i);
         }
     }

    onNavigate(link: string) {
        console.log("onNavigate: ", link);
        this.linkSelected = link;



    }

}
