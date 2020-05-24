import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService {
    counter: number
    constructor() {
        this.counter = 0
    }
    log() {
        this.counter++;
        console.log(this.counter);
    }
}