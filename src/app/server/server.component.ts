import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = Math.round(Math.random() * 100);
    serverStatus = (this.serverId % 2 === 0) ? 'online' : 'offline';

}
