"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var simpleFormComponent = (function () {
    function simpleFormComponent() {
    }
    simpleFormComponent.prototype.submitVal = function (form) {
        console.log(form);
    };
    return simpleFormComponent;
}());
simpleFormComponent = __decorate([
    core_1.Component({
        selector: 'simple-form',
        templateUrl: "./app/formsModule/simpleForm/simple-form.component.html",
        styleUrls: ['./app/formsModule/simpleForm/simple-form.component.css'],
        encapsulation: core_1.ViewEncapsulation.None
    })
], simpleFormComponent);
exports.simpleFormComponent = simpleFormComponent;
//# sourceMappingURL=simple-form.component.js.map