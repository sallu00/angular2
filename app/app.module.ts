import { NgModule } from "@angular/core";
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ContentComponent } from "./contents/contents.component";
import { DescriptionComponent } from "./description/description.component";
import { addContentComponent } from "./addcontent/add-content.component";
//import { AlertModule } from "@angular/ngx-bootstrap/alert";

@NgModule({
    imports : [ BrowserModule , FormsModule ,  ReactiveFormsModule ] ,
    declarations : [ AppComponent , ContentComponent , DescriptionComponent , addContentComponent] , //components that we use in this module
    bootstrap : [ AppComponent ] //that will start initially
})
export class AppModule { }