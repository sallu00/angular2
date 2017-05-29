import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validator } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ContentComponent } from "./contents/contents.component";
import { DescriptionComponent } from "./description/description.component";
import { addContentComponent } from "./addcontent/add-content.component";
import { FormModule } from "./formsModule/form-module.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule, Routes } from "@angular/router";
import { simpleFormComponent } from "./formsModule/simpleForm/simple-form.component";

//import { AlertModule } from "@angular/ngx-bootstrap/alert";
 
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: DescriptionComponent },
    { path: 'forms', component: simpleFormComponent },
    { path: '**', component: DescriptionComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, FormModule, RouterModule.forRoot(routes)],
    declarations: [AppComponent, ContentComponent, DescriptionComponent, addContentComponent, NavbarComponent], //components that we use in this module
    bootstrap: [AppComponent] //that will start initially
})
export class AppModule {

 }