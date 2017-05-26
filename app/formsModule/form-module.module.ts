import { NgModule } from "@angular/core";
import { FormsModule , ReactiveFormsModule , FormBuilder , FormGroup , Validator } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { simpleFormComponent } from "./simpleForm/simple-form.component";
import { usingFormBuilderComponent } from "./usingFormBuilder/using-form-builder.component";
import { builderValidateComponent } from "./builderValidate/builder-validate.component";
//import { AlertModule } from "@angular/ngx-bootstrap/alert";

@NgModule({
    imports : [ BrowserModule , FormsModule ,  ReactiveFormsModule ] ,
    exports : [simpleFormComponent , usingFormBuilderComponent , builderValidateComponent] ,
    declarations : [ simpleFormComponent , usingFormBuilderComponent , builderValidateComponent ]  //components that we use in this module
})
export class FormModule { }