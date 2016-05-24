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
                        templateUrl: 'dev/templates/actor.component.html'
                    }), 
                    __metadata('design:paramtypes', [actor_service_1.ActorService, router_1.RouteParams, router_1.Router])
                ], ActorComponent);
                return ActorComponent;
            }());
            exports_1("ActorComponent", ActorComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBR0ksd0JBQ1ksYUFBMkIsRUFDM0IsWUFBeUIsRUFDekIsT0FBZTtvQkFGZixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0IsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVE7Z0JBQ3hCLENBQUM7Z0JBRUosaUNBQVEsR0FBUjtvQkFBQSxpQkFNQztvQkFMRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNkLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQzs2QkFDMUIsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO29CQUNuRCxDQUFDO2dCQUNMLENBQUM7Z0JBRU8sb0NBQVcsR0FBbkI7b0JBQ0ksSUFBSSxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUMsQ0FBQyxDQUFBO29CQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFTyxrQ0FBUyxHQUFqQixVQUFrQixLQUFZO29CQUMxQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUN2QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQztnQkFDTCxDQUFDO2dCQUNELCtCQUFNLEdBQU47b0JBQUEsaUJBT0M7b0JBTkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7eUJBQ3JDLFNBQVMsQ0FBQzt3QkFDUCxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQ3ZCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLENBQUE7Z0JBQ1YsQ0FBQztnQkFDRCwrQkFBTSxHQUFOO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzlDLENBQUM7Z0JBdkNEO29CQUFDLFlBQUssRUFBRTs7NkRBQUE7Z0JBTlo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsV0FBVyxFQUFFLG9DQUFvQztxQkFDcEQsQ0FBQzs7a0NBQUE7Z0JBMkNGLHFCQUFDO1lBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtZQXpDRCwyQ0F5Q0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZVBhcmFtcywgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEFjdG9yLCBBY3RvclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hY3Rvci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hY3RvcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi90ZW1wbGF0ZXMvYWN0b3IuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWN0b3JDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgYWN0b3I6IEFjdG9yO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9hY3RvclNlcnZpY2U6IEFjdG9yU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcclxuICAgICkge31cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdG9yKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9ICt0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdG9yU2VydmljZS5nZXRBY3RvcihpZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoYWN0b3IgPT4gdGhpcy5fc2V0QWN0b3IoYWN0b3IpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgX2dvdG9BY3RvcnMoKSB7XHJcbiAgICAgICAgbGV0IHJvdXRlID0gWydBY3RvcnMnLCB7aWQ6IHRoaXMuYWN0b3IgPyB0aGlzLmFjdG9yLmlkIDogbnVsbH1dXHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKHJvdXRlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfc2V0QWN0b3IoYWN0b3I6IEFjdG9yKSB7XHJcbiAgICAgICAgaWYgKGFjdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0b3IgPSBhY3RvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9nb3RvQWN0b3JzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVsZXRlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2FjdG9yU2VydmljZS5kZWxldGVBY3Rvcih0aGlzLmFjdG9yKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdBY3RvciBEZWxldGVkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nb3RvQWN0b3JzKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fYWN0b3JTZXJ2aWNlLnVwZGF0ZUFjdG9yKHRoaXMuYWN0b3IpXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
