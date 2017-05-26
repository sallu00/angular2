import { Component , ViewEncapsulation } from '@angular/core';
import { Conten } from "../../app.interface";
@Component({
    selector: 'simple-form',
    templateUrl: "./app/formsModule/simpleForm/simple-form.component.html", // give address according to the index.html file 
    styleUrls: ['./app/formsModule/simpleForm/simple-form.component.css']
    ,
    encapsulation: ViewEncapsulation.None
})

export class simpleFormComponent {
    submitVal(form : any){
        console.log(form);
    }
}
