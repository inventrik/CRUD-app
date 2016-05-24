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
                        templateUrl: 'dev/new/newactor.component.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy9uZXdhY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFJSSwyQkFDVSxhQUEwQixFQUMxQixPQUFnQjtvQkFEaEIsa0JBQWEsR0FBYixhQUFhLENBQWE7b0JBQzFCLFlBQU8sR0FBUCxPQUFPLENBQVM7b0JBSjFCLGFBQVEsR0FBaUIsRUFBRSxDQUFDO2dCQUszQixDQUFDO2dCQUVGLHNDQUFVLEdBQVY7b0JBQ0ssSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUMvQyxDQUFDO2dCQUVPLHVDQUFXLEdBQW5CO29CQUNJLElBQUksS0FBSyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFDLENBQUMsQ0FBQTtvQkFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBZkQ7b0JBQUMsWUFBSyxFQUFFOztnRUFBQTtnQkFMWjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFdBQVcsRUFBQyxpQ0FBaUM7d0JBQzdDLFNBQVMsRUFBQyxDQUFDLDRCQUFZLENBQUM7cUJBQ3pCLENBQUM7O3FDQUFBO2dCQWtCRix3QkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsaURBaUJDLENBQUEiLCJmaWxlIjoibmV3L25ld2FjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7QWN0b3JTZXJ2aWNlLCBBY3Rvcn0gZnJvbSBcIi4uL3NlcnZpY2VzL2FjdG9yLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlVXJsOidkZXYvbmV3L25ld2FjdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6W0FjdG9yU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ld0FjdG9yQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGFjdG9yOiBBY3RvcjtcclxuICAgIGFkZEFjdG9yOiBBY3RvciA9IDxBY3Rvcj57fTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgIHByaXZhdGUgX2FjdG9yU2VydmljZTpBY3RvclNlcnZpY2UsXHJcbiAgICAgIHByaXZhdGUgX3JvdXRlciA6IFJvdXRlcilcclxuICAgIHt9XHJcblxyXG4gICAgb25BZGRBY3RvcigpIHtcclxuICAgICAgICAgdGhpcy5fYWN0b3JTZXJ2aWNlLmFkZEFjdG9yKHRoaXMuYWRkQWN0b3IpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgX2dvdG9BY3RvcnMoKSB7XHJcbiAgICAgICAgbGV0IHJvdXRlID0gWydBY3RvcnMnLCB7aWQ6IHRoaXMuYWN0b3IgPyB0aGlzLmFjdG9yLmlkIDogbnVsbH1dXHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKHJvdXRlKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
