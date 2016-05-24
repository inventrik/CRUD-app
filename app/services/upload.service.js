System.register(['angular2/core', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, Rx_1;
    var UploadService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            UploadService = (function () {
                function UploadService() {
                    var _this = this;
                    this.progress$ = Rx_1.Observable.create(function (observer) {
                        _this.progressObserver = observer;
                    }).share();
                }
                UploadService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UploadService);
                return UploadService;
            }());
            exports_1("UploadService", UploadService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VwbG9hZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBSUU7b0JBSkYsaUJBMkNDO29CQXRDRyxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRO3dCQUN2QyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFBO29CQUNwQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixDQUFDO2dCQVRIO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQTRDYixvQkFBQztZQUFELENBM0NBLEFBMkNDLElBQUE7WUEzQ0QseUNBMkNDLENBQUEiLCJmaWxlIjoic2VydmljZXMvdXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXBsb2FkU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHByb2dyZXNzJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gICAgcHJpdmF0ZSBwcm9ncmVzc09ic2VydmVyOiBhbnk7XHJcbiAgICBcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICB0aGlzLnByb2dyZXNzJCA9IE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcclxuICAgICAgICB0aGlzLnByb2dyZXNzT2JzZXJ2ZXIgPSBvYnNlcnZlclxyXG4gICAgfSkuc2hhcmUoKTtcclxuICB9XHJcbiAgXHJcbiAvKiBwdWJsaWMgZ2V0T2JzZXJ2ZXIgKCk7ICAgIE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzJDtcclxuICB9XHJcbiAgICB1cGxvYWRGaWxlICh1cmw6IHN0cmluZywgZmlsZTogZmlsZVtdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSAoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGxldCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKSxcclxuICAgICAgICB4aHI6IFhNTEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiYWN0b3JcIiwgXCJ7ICAgXFxcImlkXFxcIjogYWN0b3IuaWQsICAgXFxcIm5hbWVcXFwiOiBcXFwiYWN0b3IubmFtZVxcXCIsICAgXFxcImJpcnRoTmFtZVxcXCI6IFxcXCJhY3Rvci5iaXJ0aE5hbWVcXFwiLCAgIFxcXCJiaXJ0aERhdGVcXFwiOiBcXFwiYWN0b3IuYmlydGhEYXRlXFxcIiwgICBcXFwiZW1haWxcXFwiOiBcXFwiYWN0b3IuZW1haWxcXFwiLCBcXFwiYWN0aXZlXFxcIjogYWN0b3IuYWN0aXZlIH1cIik7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiZmlsZVtdXCIsIGZpbGVbaV0sIGZpbGVbaV0ubmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsICogMTAwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NPYnNlcnZlci5uZXh0KHRoaXMucHJvZ3Jlc3MpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XHJcbiAgICB9KTtcclxuICB9ICovXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
