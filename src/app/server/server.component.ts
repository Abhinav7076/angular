import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white
        }
    `]
})
export class ServerComponent{
    input=''
    serverCreated=false
    on=true
    port1Status=''

    constructor(){
        this.port1Status = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getColor(){
        return this.port1Status === 'online' ? 'green' : 'red'
    }
    
}