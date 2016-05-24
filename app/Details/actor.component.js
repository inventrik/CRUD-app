System.register(['angular2/core', 'angular2/router', '../services/actor.service'], function(exports_1, context_1) {
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
    var ActorComponent;
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
            ActorComponent = (function () {
                function ActorComponent(_actorService, _routeParams, _router) {
                    this._actorService = _actorService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                }
                ActorComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.actor) {
                        var id = +this._routeParams.get('id');
                        this._actorService.getActor(id)
                            .subscribe(function (actor) { return _this._setActor(actor); });
                    }
                };
                ActorComponent.prototype._gotoActors = function () {
                    var route = ['Actors', { id: this.actor ? this.actor.id : null }];
                    this._router.navigate(route);
                };
                ActorComponent.prototype._setActor = function (actor) {
                    if (actor) {
                        this.actor = actor;
                    }
                    else {
                        this._gotoActors();
                    }
                };
                ActorComponent.prototype.delete = function () {
                    var _this = this;
                    console.log(this.actor);
                    this._actorService.deleteActor(this.actor)
                        .subscribe(function () {
                        alert('Actor Deleted');
                        _this._gotoActors();
                    });
                };
                ActorComponent.prototype.update = function () {
                    console.log(this.actor);
                    this._actorService.updateActor(this.actor);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ActorComponent.prototype, "actor", void 0);
                ActorComponent = __decorate([
                    core_1.Component({
                        selector: 'my-actor',
                        templateUrl: 'dev/details/actor.component.html'
                    }), 
                    __metadata('design:paramtypes', [actor_service_1.ActorService, router_1.RouteParams, router_1.Router])
                ], ActorComponent);
                return ActorComponent;
            }());
            exports_1("ActorComponent", ActorComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMvYWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBR0ksd0JBQ1ksYUFBMkIsRUFDM0IsWUFBeUIsRUFDekIsT0FBZTtvQkFGZixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0IsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVE7Z0JBQ3hCLENBQUM7Z0JBRUosaUNBQVEsR0FBUjtvQkFBQSxpQkFNQztvQkFMRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNkLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQzs2QkFDMUIsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO29CQUNuRCxDQUFDO2dCQUNMLENBQUM7Z0JBRU8sb0NBQVcsR0FBbkI7b0JBQ0ksSUFBSSxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUMsQ0FBQyxDQUFBO29CQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFTyxrQ0FBUyxHQUFqQixVQUFrQixLQUFZO29CQUMxQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUN2QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQztnQkFDTCxDQUFDO2dCQUNELCtCQUFNLEdBQU47b0JBQUEsaUJBT0M7b0JBTkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7eUJBQ3JDLFNBQVMsQ0FBQzt3QkFDUCxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQ3ZCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLENBQUE7Z0JBQ1YsQ0FBQztnQkFDRCwrQkFBTSxHQUFOO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzlDLENBQUM7Z0JBdkNEO29CQUFDLFlBQUssRUFBRTs7NkRBQUE7Z0JBTlo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsV0FBVyxFQUFFLGtDQUFrQztxQkFDbEQsQ0FBQzs7a0NBQUE7Z0JBMkNGLHFCQUFDO1lBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtZQXpDRCwyQ0F5Q0MsQ0FBQSIsImZpbGUiOiJkZXRhaWxzL2FjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZVBhcmFtcywgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEFjdG9yLCBBY3RvclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hY3Rvci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hY3RvcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi9kZXRhaWxzL2FjdG9yLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9yQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGFjdG9yOiBBY3RvcjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0b3JTZXJ2aWNlOiBBY3RvclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXHJcbiAgICApIHt9XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hY3Rvcikge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSArdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RvclNlcnZpY2UuZ2V0QWN0b3IoaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGFjdG9yID0+IHRoaXMuX3NldEFjdG9yKGFjdG9yKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF9nb3RvQWN0b3JzKCkge1xyXG4gICAgICAgIGxldCByb3V0ZSA9IFsnQWN0b3JzJywge2lkOiB0aGlzLmFjdG9yID8gdGhpcy5hY3Rvci5pZCA6IG51bGx9XVxyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShyb3V0ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgX3NldEFjdG9yKGFjdG9yOiBBY3Rvcikge1xyXG4gICAgICAgIGlmIChhY3Rvcikge1xyXG4gICAgICAgICAgICB0aGlzLmFjdG9yID0gYWN0b3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZ290b0FjdG9ycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRlbGV0ZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFjdG9yKTtcclxuICAgICAgICB0aGlzLl9hY3RvclNlcnZpY2UuZGVsZXRlQWN0b3IodGhpcy5hY3RvcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnQWN0b3IgRGVsZXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ290b0FjdG9ycygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2FjdG9yU2VydmljZS51cGRhdGVBY3Rvcih0aGlzLmFjdG9yKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
