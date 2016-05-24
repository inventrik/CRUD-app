System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'rxjs/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1;
    var ActorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {}],
        execute: function() {
            ActorService = (function () {
                function ActorService(_http) {
                    this._http = _http;
                    this.baseURL = 'http://192.168.0.21:8081/RESTFramework/rest/actors/';
                }
                ActorService.prototype.getActors = function () {
                    return this._http.get(this.baseURL)
                        .map(function (response) { return response.json(); });
                };
                ActorService.prototype.handleError = function (error) {
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                ActorService.prototype.getActor = function (id) {
                    return this.getActors()
                        .map(function (actors) { return actors.find(function (actor) { return actor.id == id; }); });
                };
                ActorService.prototype.deleteActor = function (actor) {
                    console.log(actor);
                    return this._http
                        .delete(this.baseURL + actor.id);
                };
                ActorService.prototype.addActor = function (actor) {
                    console.log(actor);
                    var data = new FormData();
                    var body = JSON.stringify(actor);
                    data.append("actor", body);
                    var input = document.getElementById('fileUpload');
                    var file = input.files[0];
                    data.append("file", file, file.name);
                    console.log(data);
                    var xhr = new XMLHttpRequest();
                    xhr.addEventListener("readystatechange", function () {
                        if (this.readyState === 4) {
                            console.log(this.responseText);
                        }
                    });
                    xhr.open("POST", this.baseURL + 'add');
                    xhr.send(data);
                    alert(actor.name + " added!");
                };
                ActorService.prototype.updateActor = function (actor) {
                    console.log(actor);
                    var data = new FormData();
                    var body = JSON.stringify(actor);
                    data.append("actor", body);
                    var input = document.getElementById('fileUpload');
                    var file = input.files[0];
                    if (file == null) {
                    }
                    else {
                        data.append("file", file, file.name);
                    }
                    console.log(data);
                    var xhr = new XMLHttpRequest();
                    xhr.addEventListener("readystatechange", function () {
                        if (this.readyState === 4) {
                            console.log(this.responseText);
                        }
                    });
                    xhr.open("PUT", this.baseURL + actor.id);
                    xhr.send(data);
                    alert(actor.name + " updated!");
                };
                ActorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ActorService);
                return ActorService;
            }());
            exports_1("ActorService", ActorService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FjdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQUlJLHNCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcscURBQXFELENBQUE7Z0JBQ3hFLENBQUM7Z0JBRUQsZ0NBQVMsR0FBVDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFDOUIsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFBO2dCQUM1RCxDQUFDO2dCQUVPLGtDQUFXLEdBQW5CLFVBQW9CLEtBQWU7b0JBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBRUQsK0JBQVEsR0FBUixVQUFTLEVBQVU7b0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7eUJBQ3RCLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBZCxDQUFjLENBQUMsRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO2dCQUVELGtDQUFXLEdBQVgsVUFBWSxLQUFZO29CQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7eUJBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcs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QUMsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkF6RUw7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBMEViLG1CQUFDO1lBQUQsQ0F6RUEsQUF5RUMsSUFBQTtZQXpFRCx1Q0F5RUMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9hY3Rvci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCAncnhqcy9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQge0hlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3RvciB7XHJcbiAgICBhY3RpdmU6IHN0cmluZztcclxuICAgIGJpcnRoRGF0ZTogc3RyaW5nO1xyXG4gICAgYmlydGhOYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZzsgIFxyXG4gICAgaW1hZ2U6IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoKSBcclxuZXhwb3J0IGNsYXNzIEFjdG9yU2VydmljZSB7XHJcbiAgICBodHRwOiBIdHRwO1xyXG4gICAgYmFzZVVSTDogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlVVJMID0gJ2h0dHA6Ly8xOTIuMTY4LjAuMjE6ODA4MS9SRVNURnJhbWV3b3JrL3Jlc3QvYWN0b3JzLycgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0QWN0b3JzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLmJhc2VVUkwpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPEFjdG9yPnJlc3BvbnNlLmpzb24oKSkgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0QWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFjdG9ycygpXHJcbiAgICAgICAgLm1hcChhY3RvcnMgPT4gYWN0b3JzLmZpbmQoYWN0b3IgPT4gYWN0b3IuaWQgPT0gaWQpKTsgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkZWxldGVBY3RvcihhY3RvcjogQWN0b3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rvcik7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLl9odHRwXHJcbiAgICAgICAgICAgIC5kZWxldGUodGhpcy5iYXNlVVJMICsgYWN0b3IuaWQpOyAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFkZEFjdG9yKGFjdG9yOiBBY3Rvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdG9yKTtcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoYWN0b3IpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKFwiYWN0b3JcIiwgYm9keSk7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVVcGxvYWQnKTtcclxuICAgICAgICBsZXQgZmlsZSA9IGlucHV0LmZpbGVzWzBdO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlLCBmaWxlLm5hbWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9IFxyXG4gICAgfSk7IFxyXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB0aGlzLmJhc2VVUkwgKyAnYWRkJyk7XHJcbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XHJcbiAgICAgICAgYWxlcnQoYWN0b3IubmFtZSArIFwiIGFkZGVkIVwiKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFjdG9yKGFjdG9yOiBBY3Rvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdG9yKTtcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoYWN0b3IpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKFwiYWN0b3JcIiwgYm9keSk7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVVcGxvYWQnKTtcclxuICAgICAgICBsZXQgZmlsZSA9IGlucHV0LmZpbGVzWzBdO1xyXG4gICAgICAgIGlmIChmaWxlID09IG51bGwpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUsIGZpbGUubmFtZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9IFxyXG4gICAgfSk7IFxyXG4gICAgICAgIHhoci5vcGVuKFwiUFVUXCIsIHRoaXMuYmFzZVVSTCArIGFjdG9yLmlkKTsgICAgICBcclxuICAgICAgICB4aHIuc2VuZChkYXRhKTtcclxuXHJcbiAgICAgICAgYWxlcnQoYWN0b3IubmFtZSArIFwiIHVwZGF0ZWQhXCIpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
