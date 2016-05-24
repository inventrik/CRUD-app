import {Component, OnInit, Input} from "angular2/core";
import {Router} from 'angular2/router';

import {ActorService, Actor} from "../services/actor.service";

@Component({
  templateUrl:'dev/new/newactor.component.html',
  providers:[ActorService]
})
export class NewActorComponent {
    @Input() actor: Actor;
    addActor: Actor = <Actor>{};
    
    constructor(
      private _actorService:ActorService,
      private _router : Router)
    {}

    onAddActor() {
         this._actorService.addActor(this.addActor)
    }
    
    private _gotoActors() {
        let route = ['Actors', {id: this.actor ? this.actor.id : null}]
        this._router.navigate(route);
    }
}