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
var forms_1 = require("@angular/forms");
var builderValidateComponent = (function () {
    function builderValidateComponent(fb) {
        this.myForm = fb.group({
            'firstName': '',
            'lastName': '',
            'gender': '',
            'email': ''
        });
    }
    builderValidateComponent.prototype.submitVal = function (form) {
        console.log(form);
    };
    return builderValidateComponent;
}());
builderValidateComponent = __decorate([
    core_1.Component({
        selector: 'builder-validate',
        templateUrl: "./app/builderValidate/builder-validate.component.html",
        styleUrls: ['./app/builderValidate/builder-validate.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], builderValidateComponent);
exports.builderValidateComponent = builderValidateComponent;
//# sourceMappingURL=builder-validate.component.js.map