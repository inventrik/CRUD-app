System.register(['angular2/core', 'angular2/router', './actor.service', './actor-filter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, actor_service_1, actor_filter_1;
    var ActorListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (actor_service_1_1) {
                actor_service_1 = actor_service_1_1;
            },
            function (actor_filter_1_1) {
                actor_filter_1 = actor_filter_1_1;
            }],
        execute: function() {
            ActorListComponent = (function () {
                function ActorListComponent(_actorService) {
                    this._actorService = _actorService;
                }
                ActorListComponent.prototype.ngOnInit = function () {
                    this.actors = this._actorService.getActors();
                };
                ActorListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-actor-list',
                        template: "\n        Search:\n        <div><input type=\"text\" [(ngModel)]=\"listFilter\" /></div>\n        <ul>\n            <li *ngFor=\"#actor of actors | async | actorFilter:listFilter\">\n            <a [routerLink]=\"['Actor', {id: actor.id}]\">\n                {{actor.name}}\n            </a>\n            <li>\n        </ul>\n    ",
                        pipes: [actor_filter_1.ActorFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [actor_service_1.ActorService])
                ], ActorListComponent);
                return ActorListComponent;
            }());
            exports_1("ActorListComponent", ActorListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdG9yLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUJBO2dCQUdJLDRCQUFvQixhQUEyQjtvQkFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7Z0JBQUksQ0FBQztnQkFFcEQscUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pELENBQUM7Z0JBeEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSw0VUFVVDt3QkFDRCxLQUFLLEVBQUUsQ0FBQyw4QkFBZSxDQUFDO3dCQUN4QixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDbEMsQ0FBQzs7c0NBQUE7Z0JBVUYseUJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELG1EQVFDLENBQUEiLCJmaWxlIjoiYWN0b3ItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHtBY3RvciwgQWN0b3JTZXJ2aWNlfSBmcm9tICcuL2FjdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQge0FjdG9yRmlsdGVyUGlwZX0gZnJvbSAnLi9hY3Rvci1maWx0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFjdG9yLWxpc3QnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICBTZWFyY2g6XHJcbiAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImxpc3RGaWx0ZXJcIiAvPjwvZGl2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cIiNhY3RvciBvZiBhY3RvcnMgfCBhc3luYyB8IGFjdG9yRmlsdGVyOmxpc3RGaWx0ZXJcIj5cclxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydBY3RvcicsIHtpZDogYWN0b3IuaWR9XVwiPlxyXG4gICAgICAgICAgICAgICAge3thY3Rvci5uYW1lfX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIGAsXHJcbiAgICBwaXBlczogW0FjdG9yRmlsdGVyUGlwZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWN0b3JMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFjdG9yczogT2JzZXJ2YWJsZTxBY3Rvcj47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0b3JTZXJ2aWNlOiBBY3RvclNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuYWN0b3JzID0gdGhpcy5fYWN0b3JTZXJ2aWNlLmdldEFjdG9ycygpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
