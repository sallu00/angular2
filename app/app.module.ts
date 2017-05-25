import { NgModule } from "@angular/core";
import { FormsModule , ReactiveFormsModule , FormBuilder , FormGroup , Validator } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ContentComponent } from "./contents/contents.component";
import { DescriptionComponent } from "./description/description.component";
import { simpleFormComponent } from "./simpleForm/simple-form.component";
import { addContentComponent } from "./addcontent/add-content.component";
import { usingFormBuilderComponent } from "./usingFormBuilder/using-form-builder.component";
import { builderValidateComponent } from "./builderValidate/builder-validate.component";
//import { AlertModule } from "@angular/ngx-bootstrap/alert";

@NgModule({
    imports : [ BrowserModule , FormsModule ,  ReactiveFormsModule ] ,
    declarations : [ AppComponent , ContentComponent , DescriptionComponent , addContentComponent , simpleFormComponent , usingFormBuilderComponent , builderValidateComponent ]  , //components that we use in this module
    bootstrap : [ AppComponent ] //that will start initially
})
export class AppModule { }