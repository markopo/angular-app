import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    linkSelected = 'recipe';

    onNavigate(link: string) {
        console.log("onNavigate: ", link);
        this.linkSelected = link;
    }

}
