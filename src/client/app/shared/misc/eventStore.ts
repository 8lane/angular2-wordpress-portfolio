import {Injectable, Output, EventEmitter} from '@angular/core';

@Injectable()
export class EventStore {
    @Output() appLoader: EventEmitter<any> = new EventEmitter(true);
    @Output() postContentReady: EventEmitter<any> = new EventEmitter(true);
}
