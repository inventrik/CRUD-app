System.register(['rxjs/Rx', 'angular2/core', 'angular2/http', 'angular2/router', '../services/actor.service', './actor-list.component', './actor.component', './newactor.component'], function(exports_1, context_1) {
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
                        templateUrl: 'dev/templates/app.component.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFqQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsV0FBVyxFQUFFLGtDQUFrQzt3QkFDL0MsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLFNBQVMsRUFBRTs0QkFDUCxxQkFBYyxFQUFFLDRCQUFZLEVBQUUseUJBQWdCO3lCQUNqRDtxQkFDSixDQUFDO29CQUVELG9CQUFXLENBQUM7d0JBQ1gsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7d0JBQ3RGLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO3dCQUNoRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7cUJBQ3RFLENBQUM7O2dDQUFBO2dCQUlGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB7QWN0b3IsIEFjdG9yU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvYWN0b3Iuc2VydmljZSc7XG5pbXBvcnQge0FjdG9yTGlzdENvbXBvbmVudH0gZnJvbSAnLi9hY3Rvci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0FjdG9yQ29tcG9uZW50fSBmcm9tICcuL2FjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQge05ld0FjdG9yQ29tcG9uZW50fSBmcm9tICcuL25ld2FjdG9yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi90ZW1wbGF0ZXMvYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBIVFRQX1BST1ZJREVSUywgQWN0b3JTZXJ2aWNlLCBST1VURVJfUFJPVklERVJTXG4gICAgXVxufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAgeyBwYXRoOiAnL2FjdG9ycycsIG5hbWU6ICdBY3RvcnMnLCBjb21wb25lbnQ6IEFjdG9yTGlzdENvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlIH0sXG4gIHsgcGF0aDogJy9hY3Rvci86aWQnLCBuYW1lOiAnQWN0b3InLCBjb21wb25lbnQ6IEFjdG9yQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJy9uZXdhY3RvcicsIG5hbWU6ICdOZXdBY3RvcicsIGNvbXBvbmVudDogTmV3QWN0b3JDb21wb25lbnQgfVxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
