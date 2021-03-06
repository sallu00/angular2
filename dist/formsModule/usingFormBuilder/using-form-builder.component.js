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
var usingFormBuilderComponent = (function () {
    function usingFormBuilderComponent(fb) {
        this.flag = false;
        this.myForm = fb.group({
            'firstName': ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.pattern('[a-zA-Z ]*')]],
            'lastName': ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.pattern('[a-zA-Z ]*')]],
            'gender1': ['', forms_1.Validators.required],
            'email': ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
        });
    }
    usingFormBuilderComponent.prototype.submitVal = function (form) {
        this.flag = true;
        console.log(form);
    };
    return usingFormBuilderComponent;
}());
usingFormBuilderComponent = __decorate([
    core_1.Component({
        selector: 'using-form-builder',
        templateUrl: "./app/formsModule/usingFormBuilder/using-form-builder.component.html",
        styleUrls: ['./app/formsModule/usingFormBuilder/using-form-builder.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], usingFormBuilderComponent);
exports.usingFormBuilderComponent = usingFormBuilderComponent;
//# sourceMappingURL=using-form-builder.component.js.map