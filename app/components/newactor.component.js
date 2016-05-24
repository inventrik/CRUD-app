System.register(["angular2/core", 'angular2/router', "../services/actor.service"], function(exports_1, context_1) {
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
    var core_1, router_1, actor_service_1;
    var NewActorComponent;
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
            }],
        execute: function() {
            NewActorComponent = (function () {
                function NewActorComponent(_actorService, _router) {
                    this._actorService = _actorService;
                    this._router = _router;
                    this.addActor = {};
                }
                NewActorComponent.prototype.onAddActor = function () {
                    this._actorService.addActor(this.addActor);
                };
                NewActorComponent.prototype._gotoActors = function () {
                    var route = ['Actors', { id: this.actor ? this.actor.id : null }];
                    this._router.navigate(route);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NewActorComponent.prototype, "actor", void 0);
                NewActorComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'dev/templates/newactor.component.html',
                        providers: [actor_service_1.ActorService]
                    }), 
                    __metadata('design:paramtypes', [actor_service_1.ActorService, router_1.Router])
                ], NewActorComponent);
                return NewActorComponent;
            }());
            exports_1("NewActorComponent", NewActorComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmV3YWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBSUksMkJBQ1UsYUFBMEIsRUFDMUIsT0FBZ0I7b0JBRGhCLGtCQUFhLEdBQWIsYUFBYSxDQUFhO29CQUMxQixZQUFPLEdBQVAsT0FBTyxDQUFTO29CQUoxQixhQUFRLEdBQWlCLEVBQUUsQ0FBQztnQkFLM0IsQ0FBQztnQkFFRixzQ0FBVSxHQUFWO29CQUNLLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDL0MsQ0FBQztnQkFFTyx1Q0FBVyxHQUFuQjtvQkFDSSxJQUFJLEtBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksRUFBQyxDQUFDLENBQUE7b0JBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQWZEO29CQUFDLFlBQUssRUFBRTs7Z0VBQUE7Z0JBTFo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxXQUFXLEVBQUMsdUNBQXVDO3dCQUNuRCxTQUFTLEVBQUMsQ0FBQyw0QkFBWSxDQUFDO3FCQUN6QixDQUFDOztxQ0FBQTtnQkFrQkYsd0JBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELGlEQWlCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbmV3YWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtBY3RvclNlcnZpY2UsIEFjdG9yfSBmcm9tIFwiLi4vc2VydmljZXMvYWN0b3Iuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGVVcmw6J2Rldi90ZW1wbGF0ZXMvbmV3YWN0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczpbQWN0b3JTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV3QWN0b3JDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgYWN0b3I6IEFjdG9yO1xyXG4gICAgYWRkQWN0b3I6IEFjdG9yID0gPEFjdG9yPnt9O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHJpdmF0ZSBfYWN0b3JTZXJ2aWNlOkFjdG9yU2VydmljZSxcclxuICAgICAgcHJpdmF0ZSBfcm91dGVyIDogUm91dGVyKVxyXG4gICAge31cclxuXHJcbiAgICBvbkFkZEFjdG9yKCkge1xyXG4gICAgICAgICB0aGlzLl9hY3RvclNlcnZpY2UuYWRkQWN0b3IodGhpcy5hZGRBY3RvcilcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfZ290b0FjdG9ycygpIHtcclxuICAgICAgICBsZXQgcm91dGUgPSBbJ0FjdG9ycycsIHtpZDogdGhpcy5hY3RvciA/IHRoaXMuYWN0b3IuaWQgOiBudWxsfV1cclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUocm91dGUpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
