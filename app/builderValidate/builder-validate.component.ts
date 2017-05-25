import { Component } from '@angular/core';
import { FormBuilder , FormGroup , Validator } from "@angular/forms";
import { Conten } from "..//app.interface";
@Component({
    selector: 'builder-validate',
    templateUrl: "./app/builderValidate/builder-validate.component.html", // give address according to the index.html file 
    styleUrls: ['./app/builderValidate/builder-validate.component.css']
})

export class builderValidateComponent {

    myForm : FormGroup;
    constructor(fb : FormBuilder){
        this.myForm=fb.group({
            'firstName' : '',
            'lastName' : '',
            'gender' : '' ,
            'email' : ''
        })
    }
    
    submitVal(form : any){
        console.log(form);
    }
}
