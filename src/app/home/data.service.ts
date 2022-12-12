import { Injectable } from "@angular/core"

// @Injectable({providedIn: 'root'})
export class dataService {
    idx: number = 0
    score: number = 0
    disable: Boolean = false

    reset(){
        this.idx=0
        this.score=0
        this.disable = false
    }
}