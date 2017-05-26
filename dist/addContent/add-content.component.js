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
var addContentComponent = (function () {
    function addContentComponent() {
        this.AddContent = new core_1.EventEmitter();
    }
    addContentComponent.prototype.submit = function () {
        this.add = this.content;
        this.AddContent.emit(this.add);
        //this.content = '';
    };
    return addContentComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], addContentComponent.prototype, "AddContent", void 0);
addContentComponent = __decorate([
    core_1.Component({
        selector: 'add-content',
        templateUrl: "./app/addContent/add-content.component.html",
        styleUrls: ['./app/addContent/add-content.component.css'],
        //encapsulation: ViewEncapsulation.Emulated//(default) style applies only to this component
        //encapsulation: ViewEncapsulation.Native
        encapsulation: core_1.ViewEncapsulation.None // , style applies to all the components
    })
], addContentComponent);
exports.addContentComponent = addContentComponent;
//# sourceMappingURL=add-content.component.js.map