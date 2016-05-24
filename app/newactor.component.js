System.register(["angular2/core", "./actor.service", 'angular2/router'], function(exports_1, context_1) {
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
    var URL, NewActorComponent;
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
            URL = 'http://192.168.0.21:8081/RESTFramework/rest/actors/add';
            NewActorComponent = (function () {
                //   public uploader:FileUploader = new FileUploader({url: URL})
                //   public hasBaseDropZoneOver:boolean = false;
                //   public hasAnotherDropZoneOver:boolean = false;
                //   public fileOverBase(e:any):void {
                //     this.hasBaseDropZoneOver = e;
                //   }
                //   public fileOverAnother(e:any):void {
                //     this.hasAnotherDropZoneOver = e;
                //   }
                function NewActorComponent(_actorService, _router) {
                    this._actorService = _actorService;
                    this._router = _router;
                    this.addActor = {};
                    this.filesToUpload = [];
                }
                NewActorComponent.prototype.onAddActor = function () {
                    var _this = this;
                    var actor = this.addActor;
                    console.log(actor);
                    this._actorService.addActor(actor)
                        .subscribe(function (v) {
                        _this.setAddActor(v);
                        alert('Actor Added!');
                        _this._gotoActors();
                    });
                };
                NewActorComponent.prototype._gotoActors = function () {
                    var route = ['Actors', { id: this.actor ? this.actor.id : null }];
                    this._router.navigate(route);
                };
                NewActorComponent.prototype.setAddActor = function (actor) {
                    if (actor) {
                        this.actor = actor;
                        this.addActor = this.actor;
                    }
                    else {
                        this._gotoActors();
                    }
                };
                NewActorComponent.prototype.upload = function () {
                    this.makeFileRequest("http://192.168.0.21:8081/RESTFramework/rest/actors/add", [], this.filesToUpload).then(function (result) {
                        console.log(result);
                    }, function (error) {
                        console.error(error);
                    });
                };
                NewActorComponent.prototype.fileChangeEvent = function (fileInput) {
                    this.filesToUpload = fileInput.target.files;
                };
                NewActorComponent.prototype.makeFileRequest = function (url, params, files) {
                    return new Promise(function (resolve, reject) {
                        var formData = new FormData();
                        var xhr = new XMLHttpRequest();
                        for (var i = 0; i < files.length; i++) {
                            formData.append("uploads[]", files[i], files[i].name);
                        }
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {
                                if (xhr.status == 200) {
                                    resolve(JSON.parse(xhr.response));
                                }
                                else {
                                    reject(xhr.response);
                                }
                            }
                        };
                        xhr.open("POST", url, true);
                        xhr.send(formData);
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NewActorComponent.prototype, "actor", void 0);
                NewActorComponent = __decorate([
                    core_1.Component({
                        template: "\n  <h3>Add a new actor</h3>\n<div *ngIf=\"addActor\">\n    <table>\n      <tr>\n        <td>Active:</td>\n        <td><input type=\"text\" [(ngModel)]=\"addActor.active\"/></td>\n      </tr>\n            <tr>\n        <td>Date of Birth:</td>\n        <td><input type=\"text\" [(ngModel)]=\"addActor.birthDate\"/></td>\n      </tr>\n            <tr>\n        <td>Birth Name:</td>\n        <td><input type=\"text\" [(ngModel)]=\"addActor.birthName\"/></td>\n      </tr>\n            <tr>\n        <td>Email:</td>\n        <td><input type=\"text\" [(ngModel)]=\"addActor.email\"/></td>\n      </tr>\n            <tr>\n        <td>ID:</td>\n        <td><input type=\"text\" [(ngModel)]=\"addActor.id\"/></td>\n      </tr>\n            <tr>\n        <td>Image:</td>\n        <td><input type=\"file\" [(ngModel)]=\"addActor.image\" (change)=\"fileChangeEvent($event)\"/><button type=\"button\" (click)=\"upload()\">Upload</button></td>\n      </tr>\n            <tr>\n        <td>Name:</td>\n        <td><input type=\"text\" [(ngModel)]=\"addActor.name\"/></td>\n      </tr>\n      <tr>\n        <td style.colspan=\"2\">\n          <button (click)=\"onAddActor()\">Save actor</button>\n        </td>\n      </tr>\n    </table>\n</div>\n  \n  ",
                        // directives: [FILE_UPLOAD_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld2FjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBT00sR0FBRzs7Ozs7Ozs7Ozs7OztZQUFILEdBQUcsR0FBRyx3REFBd0QsQ0FBQztZQThDckU7Z0JBSUMsZ0VBQWdFO2dCQUNoRSxnREFBZ0Q7Z0JBQ2hELG1EQUFtRDtnQkFFbkQsc0NBQXNDO2dCQUN0QyxvQ0FBb0M7Z0JBQ3BDLE1BQU07Z0JBRU4seUNBQXlDO2dCQUN6Qyx1Q0FBdUM7Z0JBQ3ZDLE1BQU07Z0JBRUgsMkJBQ1UsYUFBMEIsRUFDMUIsT0FBZ0I7b0JBRGhCLGtCQUFhLEdBQWIsYUFBYSxDQUFhO29CQUMxQixZQUFPLEdBQVAsT0FBTyxDQUFTO29CQWhCMUIsYUFBUSxHQUFpQixFQUFFLENBQUM7b0JBa0IxQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCxzQ0FBVSxHQUFWO29CQUFBLGlCQVVDO29CQVRDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzt5QkFDakMsU0FBUyxDQUFDLFVBQUEsQ0FBQzt3QkFDUixLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixLQUFLLENBQUMsY0FBYyxDQUFDLENBQUE7d0JBQ3JCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLENBQUE7Z0JBRVAsQ0FBQztnQkFDTyx1Q0FBVyxHQUFuQjtvQkFDSSxJQUFJLEtBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksRUFBQyxDQUFDLENBQUE7b0JBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVPLHVDQUFXLEdBQW5CLFVBQW9CLEtBQVk7b0JBQzlCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7d0JBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDM0IsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3JCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxrQ0FBTSxHQUFOO29CQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsd0RBQXdELEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO3dCQUMvRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QixDQUFDLEVBQUUsVUFBQyxLQUFLO3dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQ0QsMkNBQWUsR0FBZixVQUFnQixTQUFjO29CQUMxQixJQUFJLENBQUMsYUFBYSxHQUFpQixTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDOUQsQ0FBQztnQkFFRCwyQ0FBZSxHQUFmLFVBQWdCLEdBQVcsRUFBRSxNQUFxQixFQUFFLEtBQWtCO29CQUNsRSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDL0IsSUFBSSxRQUFRLEdBQVEsSUFBSSxRQUFRLEVBQUUsQ0FBQzt3QkFDbkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQzt3QkFDL0IsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQ25DLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzFELENBQUM7d0JBQ0QsR0FBRyxDQUFDLGtCQUFrQixHQUFHOzRCQUNyQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3RCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztvQ0FDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0NBQ3RDLENBQUM7Z0NBQUMsSUFBSSxDQUFDLENBQUM7b0NBQ0osTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQ0FDekIsQ0FBQzs0QkFDTCxDQUFDO3dCQUNMLENBQUMsQ0FBQTt3QkFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBNUVEO29CQUFDLFlBQUssRUFBRTs7Z0VBQUE7Z0JBOUNaO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFDLHV0Q0F3Q1I7d0JBQ0YsMEVBQTBFO3dCQUN6RSxTQUFTLEVBQUMsQ0FBQyw0QkFBWSxDQUFDO3FCQUN6QixDQUFDOztxQ0FBQTtnQkErRUYsd0JBQUM7WUFBRCxDQTlFQSxBQThFQyxJQUFBO1lBOUVELGlEQThFQyxDQUFBIiwiZmlsZSI6Im5ld2FjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0FjdG9yU2VydmljZX0gZnJvbSBcIi4vYWN0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtBY3Rvcn0gZnJvbSAnLi9hY3Rvci5zZXJ2aWNlJztcclxuaW1wb3J0IHtGSUxFX1VQTE9BRF9ESVJFQ1RJVkVTLCBGaWxlVXBsb2FkZXJ9IGZyb20gJ25nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWQnO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5cclxuY29uc3QgVVJMID0gJ2h0dHA6Ly8xOTIuMTY4LjAuMjE6ODA4MS9SRVNURnJhbWV3b3JrL3Jlc3QvYWN0b3JzL2FkZCc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOmBcclxuICA8aDM+QWRkIGEgbmV3IGFjdG9yPC9oMz5cclxuPGRpdiAqbmdJZj1cImFkZEFjdG9yXCI+XHJcbiAgICA8dGFibGU+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+QWN0aXZlOjwvdGQ+XHJcbiAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiYWRkQWN0b3IuYWN0aXZlXCIvPjwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+RGF0ZSBvZiBCaXJ0aDo8L3RkPlxyXG4gICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImFkZEFjdG9yLmJpcnRoRGF0ZVwiLz48L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgPHRkPkJpcnRoIE5hbWU6PC90ZD5cclxuICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJhZGRBY3Rvci5iaXJ0aE5hbWVcIi8+PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZD5FbWFpbDo8L3RkPlxyXG4gICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImFkZEFjdG9yLmVtYWlsXCIvPjwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+SUQ6PC90ZD5cclxuICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJhZGRBY3Rvci5pZFwiLz48L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgPHRkPkltYWdlOjwvdGQ+XHJcbiAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwiZmlsZVwiIFsobmdNb2RlbCldPVwiYWRkQWN0b3IuaW1hZ2VcIiAoY2hhbmdlKT1cImZpbGVDaGFuZ2VFdmVudCgkZXZlbnQpXCIvPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ1cGxvYWQoKVwiPlVwbG9hZDwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+TmFtZTo8L3RkPlxyXG4gICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImFkZEFjdG9yLm5hbWVcIi8+PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZCBzdHlsZS5jb2xzcGFuPVwiMlwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25BZGRBY3RvcigpXCI+U2F2ZSBhY3RvcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RhYmxlPlxyXG48L2Rpdj5cclxuICBcclxuICBgLFxyXG4gLy8gZGlyZWN0aXZlczogW0ZJTEVfVVBMT0FEX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTXSxcclxuICBwcm92aWRlcnM6W0FjdG9yU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ld0FjdG9yQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGFjdG9yOiBBY3RvcjtcclxuICAgIGFkZEFjdG9yOiBBY3RvciA9IDxBY3Rvcj57fTtcclxuICAgIGZpbGVzVG9VcGxvYWQ6IEFycmF5PEZpbGU+O1xyXG4gLy8gICBwdWJsaWMgdXBsb2FkZXI6RmlsZVVwbG9hZGVyID0gbmV3IEZpbGVVcGxvYWRlcih7dXJsOiBVUkx9KVxyXG4gLy8gICBwdWJsaWMgaGFzQmFzZURyb3Bab25lT3Zlcjpib29sZWFuID0gZmFsc2U7XHJcbiAvLyAgIHB1YmxpYyBoYXNBbm90aGVyRHJvcFpvbmVPdmVyOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIFxyXG4gLy8gICBwdWJsaWMgZmlsZU92ZXJCYXNlKGU6YW55KTp2b2lkIHtcclxuIC8vICAgICB0aGlzLmhhc0Jhc2VEcm9wWm9uZU92ZXIgPSBlO1xyXG4gLy8gICB9XHJcblxyXG4gLy8gICBwdWJsaWMgZmlsZU92ZXJBbm90aGVyKGU6YW55KTp2b2lkIHtcclxuIC8vICAgICB0aGlzLmhhc0Fub3RoZXJEcm9wWm9uZU92ZXIgPSBlO1xyXG4gLy8gICB9XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwcml2YXRlIF9hY3RvclNlcnZpY2U6QWN0b3JTZXJ2aWNlLFxyXG4gICAgICBwcml2YXRlIF9yb3V0ZXIgOiBSb3V0ZXIpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuZmlsZXNUb1VwbG9hZCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWRkQWN0b3IoKSB7XHJcbiAgICAgIGxldCBhY3RvciA9IHRoaXMuYWRkQWN0b3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdG9yKTtcclxuICAgICAgICAgdGhpcy5fYWN0b3JTZXJ2aWNlLmFkZEFjdG9yKGFjdG9yKVxyXG4gICAgICAgICAuc3Vic2NyaWJlKHY9PntcclxuICAgICAgICAgICAgIHRoaXMuc2V0QWRkQWN0b3Iodik7XHJcbiAgICAgICAgICAgICBhbGVydCgnQWN0b3IgQWRkZWQhJylcclxuICAgICAgICAgICAgIHRoaXMuX2dvdG9BY3RvcnMoKTtcclxuICAgICAgICAgfSlcclxuICAgICBcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2dvdG9BY3RvcnMoKSB7XHJcbiAgICAgICAgbGV0IHJvdXRlID0gWydBY3RvcnMnLCB7aWQ6IHRoaXMuYWN0b3IgPyB0aGlzLmFjdG9yLmlkIDogbnVsbH1dXHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKHJvdXRlKTtcclxuICAgIH1cclxuICAgICAgXHJcbiAgICBwcml2YXRlIHNldEFkZEFjdG9yKGFjdG9yOiBBY3Rvcikge1xyXG4gICAgICBpZiAoYWN0b3IpIHtcclxuICAgICAgdGhpcy5hY3RvciA9IGFjdG9yO1xyXG4gICAgICB0aGlzLmFkZEFjdG9yID0gdGhpcy5hY3RvcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9nb3RvQWN0b3JzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHVwbG9hZCgpIHtcclxuICAgICAgICB0aGlzLm1ha2VGaWxlUmVxdWVzdChcImh0dHA6Ly8xOTIuMTY4LjAuMjE6ODA4MS9SRVNURnJhbWV3b3JrL3Jlc3QvYWN0b3JzL2FkZFwiLCBbXSwgdGhpcy5maWxlc1RvVXBsb2FkKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmaWxlQ2hhbmdlRXZlbnQoZmlsZUlucHV0OiBhbnkpe1xyXG4gICAgICAgIHRoaXMuZmlsZXNUb1VwbG9hZCA9IDxBcnJheTxGaWxlPj4gZmlsZUlucHV0LnRhcmdldC5maWxlcztcclxuICAgIH1cclxuIFxyXG4gICAgbWFrZUZpbGVSZXF1ZXN0KHVybDogc3RyaW5nLCBwYXJhbXM6IEFycmF5PHN0cmluZz4sIGZpbGVzOiBBcnJheTxGaWxlPikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YTogYW55ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRzW11cIiwgZmlsZXNbaV0sIGZpbGVzW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
