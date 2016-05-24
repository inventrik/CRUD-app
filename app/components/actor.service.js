System.register(['angular2/http', 'rxjs/Rx', 'rxjs/operator/map'], function(exports_1, context_1) {
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
    var http_1, Rx_1, http_2;
    var ActorService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {}],
        execute: function() {
            mport;
            {
                Injectable;
            }
            from;
            'angular2/core';
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
                /*   addActor(actor: Actor) {
                       let body = JSON.stringify(actor);
                       console.log(body);
                       let head = new Headers({
                           'Content-Type': 'application/json'
                       })
                       return this._http
                           .post(this.baseURL + 'add', body, {headers: head}
                           )
                           .map(response => response.json())
                   } */
                ActorService.prototype.addActor = function (actor) {
                    console.log(actor);
                    var data = new FormData();
                    data.append("actor", {});
                    console.log(actor);
                    data.append("file", { "0": {} });
                    var xhr = new XMLHttpRequest();
                    xhr.addEventListener("readystatechange", function () {
                        if (this.readyState === 4) {
                            console.log(this.responseText);
                        }
                    });
                    xhr.open("POST", "http://192.168.0.21:8081/RESTFramework/rest/actors/add");
                    xhr.setRequestHeader("cache-control", "no-cache");
                    xhr.setRequestHeader("postman-token", "3a87ca62-9fed-5138-5236-55a631a41d08");
                    xhr.send(data);
                };
                ActorService.prototype.updateActor = function (actor) {
                    var body = JSON.stringify(actor);
                    console.log(body);
                    var head = new http_2.Headers({
                        'Content-Type': 'application/json'
                    });
                    return this._http
                        .put(this.baseURL + actor.id, body, { headers: head });
                };
                ActorService = __decorate([
                    Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ActorService);
                return ActorService;
            }());
            exports_1("ActorService", ActorService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWN0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQUEsS0FBSyxDQUFBO1lBQUMsQ0FBQztnQkFBQyxVQUFVLENBQUE7WUFBQyxDQUFDO1lBQUMsSUFBSSxDQUFBO1lBQUMsZUFBZSxDQUFDO1lBaUIxQztnQkFJSSxzQkFBb0IsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO29CQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLHFEQUFxRCxDQUFBO2dCQUN4RSxDQUFDO2dCQUVELGdDQUFTLEdBQVQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7eUJBQzlCLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQXRCLENBQXNCLENBQUMsQ0FBQTtnQkFDNUQsQ0FBQztnQkFFTyxrQ0FBVyxHQUFuQixVQUFvQixLQUFlO29CQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQUVELCtCQUFRLEdBQVIsVUFBUyxFQUFVO29CQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO3lCQUN0QixHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQWQsQ0FBYyxDQUFDLEVBQXBDLENBQW9DLENBQUMsQ0FBQztnQkFDekQsQ0FBQztnQkFFRCxrQ0FBVyxHQUFYLFVBQVksS0FBWTtvQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO3lCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFFSjs7Ozs7Ozs7Ozt1QkFVTztnQkFDQSwrQkFBUSxHQUFSLFVBQVMsS0FBWTtvQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7b0JBRTlCLElBQUksR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7b0JBRS9CLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTt3QkFDckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDbkMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztvQkFFQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSx3REFBd0QsQ0FBQyxDQUFDO29CQUMzRSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUNsRCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLHNDQUFzQyxDQUFDLENBQUM7b0JBRTlFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsa0NBQVcsR0FBWCxVQUFZLEtBQVk7b0JBQ3BCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLElBQUksSUFBSSxHQUFHLElBQUksY0FBTyxDQUFDO3dCQUNuQixjQUFjLEVBQUUsa0JBQWtCO3FCQUNyQyxDQUFDLENBQUE7b0JBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO3lCQUNaLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUNsRCxDQUFBO2dCQUNULENBQUM7Z0JBeEVMO29CQUFDLFVBQVUsRUFBRTs7Z0NBQUE7Z0JBMEViLG1CQUFDO1lBQUQsQ0F6RUEsQUF5RUMsSUFBQTtZQXpFRCx1Q0F5RUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQgJ3J4anMvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IHtIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0b3Ige1xyXG4gICAgYWN0aXZlOiBzdHJpbmc7XHJcbiAgICBiaXJ0aERhdGU6IHN0cmluZztcclxuICAgIGJpcnRoTmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7ICBcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKCkgXHJcbmV4cG9ydCBjbGFzcyBBY3RvclNlcnZpY2Uge1xyXG4gICAgaHR0cDogSHR0cDtcclxuICAgIGJhc2VVUkw6IHN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuYmFzZVVSTCA9ICdodHRwOi8vMTkyLjE2OC4wLjIxOjgwODEvUkVTVEZyYW1ld29yay9yZXN0L2FjdG9ycy8nICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldEFjdG9ycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5iYXNlVVJMKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxBY3Rvcj5yZXNwb25zZS5qc29uKCkpICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldEFjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBY3RvcnMoKVxyXG4gICAgICAgIC5tYXAoYWN0b3JzID0+IGFjdG9ycy5maW5kKGFjdG9yID0+IGFjdG9yLmlkID09IGlkKSk7ICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGVsZXRlQWN0b3IoYWN0b3I6IEFjdG9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0b3IpO1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxyXG4gICAgICAgICAgICAuZGVsZXRlKHRoaXMuYmFzZVVSTCArIGFjdG9yLmlkKTsgICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gLyogICBhZGRBY3RvcihhY3RvcjogQWN0b3IpIHtcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGFjdG9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcclxuICAgICAgICBsZXQgaGVhZCA9IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcclxuICAgICAgICAgICAgLnBvc3QodGhpcy5iYXNlVVJMICsgJ2FkZCcsIGJvZHksIHtoZWFkZXJzOiBoZWFkfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgfSAqL1xyXG4gICAgICAgIGFkZEFjdG9yKGFjdG9yOiBBY3Rvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rvcik7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBkYXRhLmFwcGVuZChcImFjdG9yXCIsIHt9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rvcik7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoXCJmaWxlXCIsIHtcIjBcIjp7fX0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8xOTIuMTY4LjAuMjE6ODA4MS9SRVNURnJhbWV3b3JrL3Jlc3QvYWN0b3JzL2FkZFwiKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcImNhY2hlLWNvbnRyb2xcIiwgXCJuby1jYWNoZVwiKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcInBvc3RtYW4tdG9rZW5cIiwgXCIzYTg3Y2E2Mi05ZmVkLTUxMzgtNTIzNi01NWE2MzFhNDFkMDhcIik7XHJcblxyXG4gICAgICAgIHhoci5zZW5kKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1cGRhdGVBY3RvcihhY3RvcjogQWN0b3IpIHtcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGFjdG9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcclxuICAgICAgICBsZXQgaGVhZCA9IG5ldyBIZWFkZXJzKHsgXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXHJcbiAgICAgICAgICAgIC5wdXQodGhpcy5iYXNlVVJMICsgYWN0b3IuaWQsIGJvZHksIHtoZWFkZXJzOiBoZWFkfVxyXG4gICAgICAgICAgICApICAgICBcclxuICAgIH1cclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
