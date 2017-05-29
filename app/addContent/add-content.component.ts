import { Component , Output , EventEmitter , ViewEncapsulation } from "@angular/core" ;
import { Conten } from "../app.interface";
 @Component({
    selector:'add-content' , 
    templateUrl : "./app/addContent/add-content.component.html"
    ,
    styleUrls : ['./app/addContent/add-content.component.css'] ,
    //encapsulation: ViewEncapsulation.Emulated//(default) style applies only to this component
    //encapsulation: ViewEncapsulation.Native
    encapsulation: ViewEncapsulation.None // , style applies to all the components
 })
 export class addContentComponent {
     @Output() AddContent = new EventEmitter();
     add : Conten ;
     content : Conten;
     submit(){
         this.add=this.content;
         this.AddContent.emit(this.add);
         this.content='';
     }
 }
