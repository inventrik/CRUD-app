System.register(['angular2/core', 'angular2/router', '../services/actor.service', '../pipes/actor-filter-pipe'], function(exports_1, context_1) {
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
    var core_1, router_1, actor_service_1, actor_filter_pipe_1;
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
            function (actor_filter_pipe_1_1) {
                actor_filter_pipe_1 = actor_filter_pipe_1_1;
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
                        templateUrl: 'dev/home/actor-list.component.html',
                        pipes: [actor_filter_pipe_1.ActorFilterPipe],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvYWN0b3ItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFHSSw0QkFBb0IsYUFBMkI7b0JBQTNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO2dCQUFJLENBQUM7Z0JBRXBELHFDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqRCxDQUFDO2dCQWRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFdBQVcsRUFBRSxvQ0FBb0M7d0JBQ2pELEtBQUssRUFBRSxDQUFDLG1DQUFlLENBQUM7d0JBQ3hCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDOztzQ0FBQTtnQkFVRix5QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsbURBUUMsQ0FBQSIsImZpbGUiOiJob21lL2FjdG9yLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQge0FjdG9yLCBBY3RvclNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2FjdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQge0FjdG9yRmlsdGVyUGlwZX0gZnJvbSAnLi4vcGlwZXMvYWN0b3ItZmlsdGVyLXBpcGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFjdG9yLWxpc3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9hY3Rvci1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHBpcGVzOiBbQWN0b3JGaWx0ZXJQaXBlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBY3Rvckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYWN0b3JzOiBPYnNlcnZhYmxlPEFjdG9yPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3RvclNlcnZpY2U6IEFjdG9yU2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RvcnMgPSB0aGlzLl9hY3RvclNlcnZpY2UuZ2V0QWN0b3JzKCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
