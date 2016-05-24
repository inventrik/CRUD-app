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
    var core_1, http_1, Rx_1, http_2;
    var ActorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
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
                    var body = JSON.stringify(actor);
                    console.log(body);
                    var head = new http_2.Headers({
                        'Content-Type': 'application/json'
                    });
                    return this._http
                        .post(this.baseURL + 'add', body, { headers: head })
                        .map(function (response) { return response.json(); });
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
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ActorService);
                return ActorService;
            }());
            exports_1("ActorService", ActorService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7SGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdG9yIHtcclxuICAgIGFjdGl2ZTogc3RyaW5nO1xyXG4gICAgYmlydGhEYXRlOiBzdHJpbmc7XHJcbiAgICBiaXJ0aE5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgaW1hZ2U6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIFxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpIFxyXG5leHBvcnQgY2xhc3MgQWN0b3JTZXJ2aWNlIHtcclxuICAgIGh0dHA6IEh0dHA7XHJcbiAgICBiYXNlVVJMOiBzdHJpbmc7XHJcbiAgICBiYXNlVVJMMjogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlVVJMID0gJ2h0dHA6Ly8xOTIuMTY4LjAuMjE6ODA4MS9SRVNURnJhbWV3b3JrL3Jlc3QvYWN0b3JzLydcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0QWN0b3JzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLmJhc2VVUkwpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPEFjdG9yPnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0QWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFjdG9ycygpXHJcbiAgICAgICAgLm1hcChhY3RvcnMgPT4gYWN0b3JzLmZpbmQoYWN0b3IgPT4gYWN0b3IuaWQgPT0gaWQpKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGRlbGV0ZUFjdG9yKGFjdG9yOiBBY3Rvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdG9yKTtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcclxuICAgICAgICAgICAgLmRlbGV0ZSh0aGlzLmJhc2VVUkwgKyBhY3Rvci5pZClcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBhZGRBY3RvcihhY3RvcjogQWN0b3IpIHtcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGFjdG9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcclxuICAgICAgICBsZXQgaGVhZCA9IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcclxuICAgICAgICAgICAgLnBvc3QodGhpcy5iYXNlVVJMICsgJ2FkZCcsIGJvZHksIHtoZWFkZXJzOiBoZWFkfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgfVxyXG4gICAgdXBkYXRlQWN0b3IoYWN0b3IgOiBBY3Rvcikge1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoYWN0b3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJvZHkpO1xyXG4gICAgICAgIGxldCBoZWFkID0gbmV3IEhlYWRlcnMoeyBcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcclxuICAgICAgICAgICAgLnB1dCh0aGlzLmJhc2VVUkwgKyBhY3Rvci5pZCwgYm9keSwge2hlYWRlcnM6IGhlYWR9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
