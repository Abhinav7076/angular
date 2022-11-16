import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    // selector: '[app-server]', //selecting by attribute
    // selector: '.app-server', //selecting by class
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = 'server stalled';
    allowedServer = false;

    constructor(){
        setTimeout(() => {
            this.allowedServer = true;
        }, 2000);
    }

    getServerStatus(){
        return this.serverStatus
    }

    changeStatus(){
        this.serverStatus = 'server running'
    }
}