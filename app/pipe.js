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
                ActorFilterPipe.prototype.transform = function (value, args) {
                    var filter = args[0].toLocaleLowerCase();
                    return filter ? value.filter(function (actor) { return actor.name.toLocaleLowerCase().indexOf(filter) != -1; }) : value;
                };
                ActorFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'actorFilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ActorFilterPipe);
                return ActorFilterPipe;
            }());
            exports_1("ActorFilterPipe", ActorFilterPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQTtnQkFLQSxDQUFDO2dCQUpHLG1DQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsSUFBYTtvQkFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUUsQ0FBQyxDQUFDLEVBQWxELENBQWtELENBQUMsR0FBRSxLQUFLLENBQUM7Z0JBQ3JHLENBQUM7Z0JBUkw7b0JBQUMsV0FBSSxDQUFFO3dCQUNILElBQUksRUFBRSxhQUFhO3FCQUN0QixDQUFDOzttQ0FBQTtnQkFPRixzQkFBQztZQUFELENBTEEsQUFLQyxJQUFBO1lBTEQsNkNBS0MsQ0FBQSIsImZpbGUiOiJwaXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBQaXBlICh7XHJcbiAgICBuYW1lOiAnYWN0b3JGaWx0ZXInXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWN0b3JGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJnczpzdHJpbmdbXSkgOiBhbnkge1xyXG4gICAgICAgIGxldCBmaWx0ZXIgPSBhcmdzWzBdLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlciA/IHZhbHVlLmZpbHRlcihhY3RvciA9PiBhY3Rvci5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIpIT0tMSk6IHZhbHVlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
