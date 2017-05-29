"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContentComponent = (function () {
    function ContentComponent() {
        this.changeHeader = new core_1.EventEmitter();
    }
    ContentComponent.prototype.giveValue = function (con) {
        this.changeHeader.emit(con);
    };
    return ContentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ContentComponent.prototype, "Content", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ContentComponent.prototype, "changeHeader", void 0);
ContentComponent = __decorate([
    core_1.Component({
        selector: 'contents',
        templateUrl: "./app/contents/contents.component.html",
        styleUrls: ['./app/contents/contents.component.css'],
    })
], ContentComponent);
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=contents.component.js.map