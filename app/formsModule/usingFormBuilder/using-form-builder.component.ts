import { Component } from '@angular/core';
import { FormBuilder , FormGroup , Validators} from "@angular/forms";
import { Conten } from "../../app.interface";
@Component({
    selector: 'using-form-builder',
    templateUrl: "./app/formsModule/usingFormBuilder/using-form-builder.component.html", // give address according to the index.html file 
    styleUrls: ['./app/formsModule/usingFormBuilder/using-form-builder.component.css']
})

export class usingFormBuilderComponent {

    myForm : FormGroup;
    flag : boolean=false;
    constructor(fb : FormBuilder){
        this.myForm=fb.group({
            'firstName' : ['', [Validators.required , Validators.minLength(3) , Validators.pattern('[a-zA-Z ]*')] ],
            'lastName' : ['', [Validators.required , Validators.minLength(3) , Validators.pattern('[a-zA-Z ]*')] ],
            'gender1' : ['', Validators.required ] ,
            'email' : ['', [Validators.required ,  Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')] ]
        })
    }
    submitVal(form : any){
        this.flag=true;
        console.log(form);
    }
}
