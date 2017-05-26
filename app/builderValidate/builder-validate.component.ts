import { Component , ViewEncapsulation } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from "@angular/forms";
import { Conten } from "..//app.interface";
@Component({
    selector: 'builder-validate',
    templateUrl: "./app/builderValidate/builder-validate.component.html", // give address according to the index.html file 
    styleUrls: ['./app/builderValidate/builder-validate.component.css'] ,
    encapsulation : ViewEncapsulation.None
})

export class builderValidateComponent {

    myForm : FormGroup;
    constructor(fb : FormBuilder){
        this.myForm=fb.group({
            'firstName' : ['', [Validators.required , Validators.minLength(3) , , Validators.pattern('[a-zA-Z ]*')] ],
            'lastName' : ['', [Validators.required , Validators.minLength(3) , , Validators.pattern('[a-zA-Z ]*')] ],
            'gender' : ['', Validators.required ] ,
            'email' : ['', [Validators.required ,  Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')] ]
        })
    }
    
    submitVal(form : any){
        console.log(form);
    }
}
