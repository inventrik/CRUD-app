System.register(['angular2/core', './actor.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, actor_service_1, router_1;
    var ActorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (actor_service_1_1) {
                actor_service_1 = actor_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                    var _this = this;
                    console.log(this.actor);
                    this._actorService.updateActor(this.actor)
                        .subscribe(function () {
                        alert('Actor Updated');
                        _this._gotoActors();
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ActorComponent.prototype, "actor", void 0);
                ActorComponent = __decorate([
                    core_1.Component({
                        selector: 'my-actor',
                        template: "\n        <div *ngIf=\"actor\" style=\"display:inline-block;vertical-align:top;\">\n            <h4>{{actor.name}} details</h4>\n            <table>\n                <tr> \n                    <td>Active:</td> \n                    <td><input type=\"text\" id=\"nametext\" [(ngModel)]=\"actor.active\" /></td>\n                </tr> \n                <tr> \n                    <td>Date of Birth:</td>\n                    <td><input type=\"text\" id=\"nametext\" [(ngModel)]=\"actor.birthDate\" /></td>\n                </tr>\n                <tr>\n                    <td>Birth Name:</td>\n                    <td><input type=\"text\" id=\"nametext\" [(ngModel)]=\"actor.birthName\" /></td>\n                </tr>\n                <tr>\n                    <td>Email:</td> \n                    <td><input type=\"text\" id=\"nametext\" [(ngModel)]=\"actor.email\" /></td>\n                </tr>\n                <tr> \n                    <td>ID:</td> \n                    <td><input type=\"text\" id=\"nametext\" [(ngModel)]=\"actor.id\" /></td>\n                </tr>\n                <tr> \n                    <td>Image URL:</td> \n                    <td><input type=\"text\" id=\"nametext\" [(ngModel)]=\"actor.image\" /></td>\n                </tr>\n                <tr>\n                    <td>Name:</td>\n                    <td><input type=\"text\" id=\"nametext\" [(ngModel)]=\"actor.name\" /></td>\n                </tr>\n\n                <button type=\"button\"\n                    (click)=\"delete()\">Delete\n                </button>\n                        \n                <button type=\"button\"\n                    (click)=\"update()\">Update\n                </button>\n             </table>\n        </div>\n        <div *ngIf=\"actor\" style=\"display:inline-block;\">\n                  <img src=\"{{actor.image}}\" style=\"width: 30%; height: 30%; padding-top: 50px; padding-left: 50px;\"/>\n        </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [actor_service_1.ActorService, router_1.RouteParams, router_1.Router])
                ], ActorComponent);
                return ActorComponent;
            }());
            exports_1("ActorComponent", ActorComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNEQTtnQkFHSSx3QkFDWSxhQUEyQixFQUMzQixZQUF5QixFQUN6QixPQUFlO29CQUZmLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtnQkFDeEIsQ0FBQztnQkFFSixpQ0FBUSxHQUFSO29CQUFBLGlCQU1DO29CQUxHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ2QsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDOzZCQUMxQixTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7b0JBQ25ELENBQUM7Z0JBQ0wsQ0FBQztnQkFFTyxvQ0FBVyxHQUFuQjtvQkFDSSxJQUFJLEtBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksRUFBQyxDQUFDLENBQUE7b0JBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVPLGtDQUFTLEdBQWpCLFVBQWtCLEtBQVk7b0JBQzFCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUN2QixDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsK0JBQU0sR0FBTjtvQkFBQSxpQkFPQztvQkFORyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDckMsU0FBUyxDQUFDO3dCQUNQLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDdkIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUN2QixDQUFDLENBQUMsQ0FBQTtnQkFDVixDQUFDO2dCQUNELCtCQUFNLEdBQU47b0JBQUEsaUJBT0M7b0JBTkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7eUJBQ3JDLFNBQVMsQ0FBQzt3QkFDUCxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQ3ZCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLENBQUE7Z0JBQ1YsQ0FBQztnQkEzQ0Q7b0JBQUMsWUFBSyxFQUFFOzs2REFBQTtnQkFuRFo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLDQ1REE2Q1Q7cUJBQ0osQ0FBQzs7a0NBQUE7Z0JBK0NGLHFCQUFDO1lBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtZQTdDRCwyQ0E2Q0MsQ0FBQSIsImZpbGUiOiJhY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgQWN0b3IsIEFjdG9yU2VydmljZSB9IGZyb20gJy4vYWN0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFjdG9yJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImFjdG9yXCIgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjp0b3A7XCI+XHJcbiAgICAgICAgICAgIDxoND57e2FjdG9yLm5hbWV9fSBkZXRhaWxzPC9oND5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRyPiBcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+QWN0aXZlOjwvdGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWV0ZXh0XCIgWyhuZ01vZGVsKV09XCJhY3Rvci5hY3RpdmVcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPiBcclxuICAgICAgICAgICAgICAgIDx0cj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPkRhdGUgb2YgQmlydGg6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1ldGV4dFwiIFsobmdNb2RlbCldPVwiYWN0b3IuYmlydGhEYXRlXCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+QmlydGggTmFtZTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWV0ZXh0XCIgWyhuZ01vZGVsKV09XCJhY3Rvci5iaXJ0aE5hbWVcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5FbWFpbDo8L3RkPiBcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1ldGV4dFwiIFsobmdNb2RlbCldPVwiYWN0b3IuZW1haWxcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPiBcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+SUQ6PC90ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZXRleHRcIiBbKG5nTW9kZWwpXT1cImFjdG9yLmlkXCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPkltYWdlIFVSTDo8L3RkPiBcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1ldGV4dFwiIFsobmdNb2RlbCldPVwiYWN0b3IuaW1hZ2VcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5OYW1lOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZXRleHRcIiBbKG5nTW9kZWwpXT1cImFjdG9yLm5hbWVcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImRlbGV0ZSgpXCI+RGVsZXRlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ1cGRhdGUoKVwiPlVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJhY3RvclwiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie3thY3Rvci5pbWFnZX19XCIgc3R5bGU9XCJ3aWR0aDogMzAlOyBoZWlnaHQ6IDMwJTsgcGFkZGluZy10b3A6IDUwcHg7IHBhZGRpbmctbGVmdDogNTBweDtcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLCAgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWN0b3JDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgYWN0b3I6IEFjdG9yO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9hY3RvclNlcnZpY2U6IEFjdG9yU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcclxuICAgICkge31cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdG9yKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9ICt0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdG9yU2VydmljZS5nZXRBY3RvcihpZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoYWN0b3IgPT4gdGhpcy5fc2V0QWN0b3IoYWN0b3IpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgX2dvdG9BY3RvcnMoKSB7XHJcbiAgICAgICAgbGV0IHJvdXRlID0gWydBY3RvcnMnLCB7aWQ6IHRoaXMuYWN0b3IgPyB0aGlzLmFjdG9yLmlkIDogbnVsbH1dXHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKHJvdXRlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfc2V0QWN0b3IoYWN0b3I6IEFjdG9yKSB7XHJcbiAgICAgICAgaWYgKGFjdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0b3IgPSBhY3RvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9nb3RvQWN0b3JzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVsZXRlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2FjdG9yU2VydmljZS5kZWxldGVBY3Rvcih0aGlzLmFjdG9yKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdBY3RvciBEZWxldGVkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nb3RvQWN0b3JzKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fYWN0b3JTZXJ2aWNlLnVwZGF0ZUFjdG9yKHRoaXMuYWN0b3IpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0FjdG9yIFVwZGF0ZWQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dvdG9BY3RvcnMoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
