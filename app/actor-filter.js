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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdG9yLWZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUFBO2dCQVVBLENBQUM7Z0JBVEksbUNBQVMsR0FBVCxVQUFXLEtBQUssRUFBRSxFQUFhO3dCQUFaLG1CQUFXO29CQUMvQixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDZCxDQUFDO29CQUdELE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxJQUFHLE9BQUEsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFBO29CQUN0RSxnQkFBZ0I7Z0JBQ2xCLENBQUM7Z0JBZkg7b0JBQUMsV0FBSSxDQUFFO3dCQUNILElBQUksRUFBRSxhQUFhO3dCQUNuQixJQUFJLEVBQUUsS0FBSztxQkFDZCxDQUFDO29CQUVELGlCQUFVLEVBQUU7O21DQUFBO2dCQVdiLHNCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCw2Q0FVQyxDQUFBIiwiZmlsZSI6ImFjdG9yLWZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybSwgSW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AUGlwZSAoe1xyXG4gICAgbmFtZTogJ2FjdG9yRmlsdGVyJyxcclxuICAgIHB1cmU6IGZhbHNlXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBY3RvckZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgICB0cmFuc2Zvcm0gKHZhbHVlLCBbcXVlcnlTdHJpbmddKSB7XHJcbiAgICBpZiAodmFsdWU9PW51bGwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB2YWx1ZS5maWx0ZXIoKGFjdG9yKT0+bmV3IFJlZ0V4cChxdWVyeVN0cmluZykudGVzdChhY3Rvci5uYW1lKSlcclxuICAgIC8vIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
