import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    input=''
    serverCreated=false
    on=true

    change(){
        this.serverCreated = !this.serverCreated
    }
    getInput(event: Event){
        this.input = (<HTMLInputElement>event.target).value
    }
}