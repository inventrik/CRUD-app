System.register(['rxjs/Rx', 'angular2/core', 'angular2/http', 'angular2/router', './services/actor.service', './home/actor-list.component', './details/actor.component', './new/newactor.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, actor_service_1, actor_list_component_1, actor_component_1, newactor_component_1;
    var AppComponent;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (actor_service_1_1) {
                actor_service_1 = actor_service_1_1;
            },
            function (actor_list_component_1_1) {
                actor_list_component_1 = actor_list_component_1_1;
            },
            function (actor_component_1_1) {
                actor_component_1 = actor_component_1_1;
            },
            function (newactor_component_1_1) {
                newactor_component_1 = newactor_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'dev/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            http_1.HTTP_PROVIDERS, actor_service_1.ActorService, router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/actors', name: 'Actors', component: actor_list_component_1.ActorListComponent, useAsDefault: true },
                        { path: '/actor/:id', name: 'Actor', component: actor_component_1.ActorComponent },
                        { path: '/newactor', name: 'NewActor', component: newactor_component_1.NewActorComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJBO2dCQUFBO2dCQUVBLENBQUM7Z0JBakJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFdBQVcsRUFBRSx3QkFBd0I7d0JBQ3JDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3dCQUMvQixTQUFTLEVBQUU7NEJBQ1AscUJBQWMsRUFBRSw0QkFBWSxFQUFFLHlCQUFnQjt5QkFDakQ7cUJBQ0osQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNYLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO3dCQUN0RixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTt3QkFDaEUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO3FCQUN0RSxDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtBY3RvciwgQWN0b3JTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2FjdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHtBY3Rvckxpc3RDb21wb25lbnR9IGZyb20gJy4vaG9tZS9hY3Rvci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0FjdG9yQ29tcG9uZW50fSBmcm9tICcuL2RldGFpbHMvYWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7TmV3QWN0b3JDb21wb25lbnR9IGZyb20gJy4vbmV3L25ld2FjdG9yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEhUVFBfUFJPVklERVJTLCBBY3RvclNlcnZpY2UsIFJPVVRFUl9QUk9WSURFUlNcbiAgICBdXG59KVxuXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvYWN0b3JzJywgbmFtZTogJ0FjdG9ycycsIGNvbXBvbmVudDogQWN0b3JMaXN0Q29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWUgfSxcbiAgeyBwYXRoOiAnL2FjdG9yLzppZCcsIG5hbWU6ICdBY3RvcicsIGNvbXBvbmVudDogQWN0b3JDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnL25ld2FjdG9yJywgbmFtZTogJ05ld0FjdG9yJywgY29tcG9uZW50OiBOZXdBY3RvckNvbXBvbmVudCB9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
