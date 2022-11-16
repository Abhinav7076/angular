import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    input=''

    getInput(event: Event){
        this.input = (<HTMLInputElement>event.target).value
    }
}