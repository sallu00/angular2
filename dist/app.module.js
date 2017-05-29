"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var contents_component_1 = require("./contents/contents.component");
var description_component_1 = require("./description/description.component");
var add_content_component_1 = require("./addcontent/add-content.component");
var form_module_module_1 = require("./formsModule/form-module.module");
var navbar_component_1 = require("./navbar/navbar.component");
var router_1 = require("@angular/router");
var simple_form_component_1 = require("./formsModule/simpleForm/simple-form.component");
//import { AlertModule } from "@angular/ngx-bootstrap/alert";
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: description_component_1.DescriptionComponent },
    { path: 'forms', component: simple_form_component_1.simpleFormComponent },
    { path: '**', component: description_component_1.DescriptionComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, form_module_module_1.FormModule, router_1.RouterModule.forRoot(routes)],
        declarations: [app_component_1.AppComponent, contents_component_1.ContentComponent, description_component_1.DescriptionComponent, add_content_component_1.addContentComponent, navbar_component_1.NavbarComponent],
        bootstrap: [app_component_1.AppComponent] //that will start initially
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map