System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ActorFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ActorFilterPipe = (function () {
                function ActorFilterPipe() {
                }
                ActorFilterPipe.prototype.transform = function (value, _a) {
                    var queryString = _a[0];
                    if (value == null) {
                        return null;
                    }
                    return value.filter(function (actor) { return new RegExp(queryString).test(actor.name); });
                    // return value;
                };
                ActorFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'actorFilter',
                        pure: false
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ActorFilterPipe);
                return ActorFilterPipe;
            }());
            exports_1("ActorFilterPipe", ActorFilterPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdG9yLWZpbHRlci1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQUE7Z0JBVUEsQ0FBQztnQkFUSSxtQ0FBUyxHQUFULFVBQVcsS0FBSyxFQUFFLEVBQWE7d0JBQVosbUJBQVc7b0JBQy9CLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNkLENBQUM7b0JBR0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLLElBQUcsT0FBQSxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUE7b0JBQ3RFLGdCQUFnQjtnQkFDbEIsQ0FBQztnQkFmSDtvQkFBQyxXQUFJLENBQUU7d0JBQ0gsSUFBSSxFQUFFLGFBQWE7d0JBQ25CLElBQUksRUFBRSxLQUFLO3FCQUNkLENBQUM7b0JBRUQsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBV2Isc0JBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELDZDQVVDLENBQUEiLCJmaWxlIjoiYWN0b3ItZmlsdGVyLXBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm0sIEluamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQFBpcGUgKHtcclxuICAgIG5hbWU6ICdhY3RvckZpbHRlcicsXHJcbiAgICBwdXJlOiBmYWxzZVxyXG59KVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWN0b3JGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICAgdHJhbnNmb3JtICh2YWx1ZSwgW3F1ZXJ5U3RyaW5nXSkge1xyXG4gICAgaWYgKHZhbHVlPT1udWxsKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gdmFsdWUuZmlsdGVyKChhY3Rvcik9Pm5ldyBSZWdFeHAocXVlcnlTdHJpbmcpLnRlc3QoYWN0b3IubmFtZSkpXHJcbiAgICAvLyByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
