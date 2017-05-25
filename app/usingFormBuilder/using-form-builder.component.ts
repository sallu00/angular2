import { Component } from '@angular/core';
import { Conten } from "..//app.interface";
@Component({
    selector: 'using-form-builder',
    templateUrl: "./app/usingFormBuilder/using-form-builder.component.html", // give address according to the index.html file 
    styleUrls: ['./app/usingFormBuilder/using-form-builder.component.css']
})

export class usingFormBuilderComponent {
    submitVal(form : any){
        console.log(form);
    }
}
