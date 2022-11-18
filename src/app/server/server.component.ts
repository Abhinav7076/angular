import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    input=''
    serverCreated=false
    on=true
    port1Status=''
    port2Status=''

    constructor(){
        this.port1Status = Math.random() > 0.5 ? 'online' : 'offline'
        this.port2Status = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getColor(){
        return this.port1Status === 'online' ? 'green' : 'red'
    }
    getColor2(){
        return this.port2Status === 'online' ? 'green' : 'red'
    }
    
}