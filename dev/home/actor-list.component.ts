import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import {Actor, ActorService} from '../services/actor.service';
import {ActorFilterPipe} from '../pipes/actor-filter-pipe';

@Component({
    selector: 'my-actor-list',
    templateUrl: 'dev/home/actor-list.component.html',
    pipes: [ActorFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})

export class ActorListComponent implements OnInit {
    actors: Observable<Actor>;

    constructor(private _actorService: ActorService) { }

    ngOnInit() {
        this.actors = this._actorService.getActors();
    }
}