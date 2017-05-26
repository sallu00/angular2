import { Component } from '@angular/core';
import { FormBuilder , FormGroup } from "@angular/forms";
import { Conten } from "..//app.interface";
@Component({
    selector: 'using-form-builder',
    templateUrl: "./app/usingFormBuilder/using-form-builder.component.html", // give address according to the index.html file 
    styleUrls: ['./app/usingFormBuilder/using-form-builder.component.css']
})

export class usingFormBuilderComponent {

    myForm : FormGroup;
    constructor(fb : FormBuilder){
        this.myForm=fb.group({
            'firstName' : '',
            'lastName' : '',
            'gender1' : '' ,
            'email' : ''
        })
    }
    submitVal(form : any){
        console.log(form);
    }
}
