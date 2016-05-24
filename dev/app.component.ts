import 'rxjs/Rx';
import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {Actor, ActorService} from './services/actor.service';
import {ActorListComponent} from './home/actor-list.component';
import {ActorComponent} from './details/actor.component';
import {NewActorComponent} from './new/newactor.component';

@Component({
    selector: 'my-app',
    templateUrl: 'dev/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HTTP_PROVIDERS, ActorService, ROUTER_PROVIDERS
    ]
})

@RouteConfig([
  { path: '/actors', name: 'Actors', component: ActorListComponent, useAsDefault: true },
  { path: '/actor/:id', name: 'Actor', component: ActorComponent },
  { path: '/newactor', name: 'NewActor', component: NewActorComponent }
])

export class AppComponent {
    
}