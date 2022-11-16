import { Component } from "@angular/core";

@Component({
    // selector: 'app-server',
    // selector: '[app-server]', //selecting by attribute
    selector: '.app-server', //selecting by class
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = 'online';

    getServerStatus(){
        return this.serverStatus
    }
}