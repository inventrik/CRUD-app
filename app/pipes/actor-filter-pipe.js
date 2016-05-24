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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL2FjdG9yLWZpbHRlci1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQUE7Z0JBUUEsQ0FBQztnQkFQSSxtQ0FBUyxHQUFULFVBQVcsS0FBSyxFQUFFLEVBQWE7d0JBQVosbUJBQVc7b0JBQy9CLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNkLENBQUM7b0JBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLLElBQUcsT0FBQSxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUE7Z0JBQ3hFLENBQUM7Z0JBYkg7b0JBQUMsV0FBSSxDQUFFO3dCQUNILElBQUksRUFBRSxhQUFhO3dCQUNuQixJQUFJLEVBQUUsS0FBSztxQkFDZCxDQUFDO29CQUVELGlCQUFVLEVBQUU7O21DQUFBO2dCQVNiLHNCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCw2Q0FRQyxDQUFBIiwiZmlsZSI6InBpcGVzL2FjdG9yLWZpbHRlci1waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtLCBJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBQaXBlICh7XHJcbiAgICBuYW1lOiAnYWN0b3JGaWx0ZXInLFxyXG4gICAgcHVyZTogZmFsc2VcclxufSlcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFjdG9yRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgIHRyYW5zZm9ybSAodmFsdWUsIFtxdWVyeVN0cmluZ10pIHtcclxuICAgIGlmICh2YWx1ZT09bnVsbCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWUuZmlsdGVyKChhY3Rvcik9Pm5ldyBSZWdFeHAocXVlcnlTdHJpbmcpLnRlc3QoYWN0b3IubmFtZSkpXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
