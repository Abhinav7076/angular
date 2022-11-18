import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    input=''
    on=true

    change(){
        if(this.input.length>0)
            this.on = false
        else
            this.on = true
        return
    }
    reset(){
        this.input=""
        return
    }
    getInput(event: Event){
        this.input = (<HTMLInputElement>event.target).value
    }
}