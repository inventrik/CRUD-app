import {Component, Input, Output, OnInit} from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { Actor, ActorService } from '../services/actor.service';

@Component({
    selector: 'my-actor',
    templateUrl: 'dev/details/actor.component.html'
})

export class ActorComponent {
    @Input() actor: Actor;
    
    constructor(
        private _actorService: ActorService,
        private _routeParams: RouteParams,
        private _router: Router
    ) {}
    
    ngOnInit() {
        if (!this.actor) {
            let id = +this._routeParams.get('id');
            this._actorService.getActor(id)
                .subscribe(actor => this._setActor(actor));
        }
    }
    
    private _gotoActors() {
        let route = ['Actors', {id: this.actor ? this.actor.id : null}]
        this._router.navigate(route);
    }
    
    private _setActor(actor: Actor) {
        if (actor) {
            this.actor = actor;
        } else {
            this._gotoActors();
        }
    }
    delete() {
        console.log(this.actor);
        this._actorService.deleteActor(this.actor)
            .subscribe(() => {
                alert('Actor Deleted');
                this._gotoActors();
            })
    }
    update() {
        console.log(this.actor);
        this._actorService.updateActor(this.actor)
    }
}