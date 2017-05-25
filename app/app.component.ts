import { Component , ViewEncapsulation , Input } from "@angular/core" ;
import { Conten } from "./app.interface";
 @Component({
    selector:'my-app' , 
    templateUrl : "./app/app.component.html"
    ,
    styleUrls : ['./app/app.component.css'] ,
    //encapsulation: ViewEncapsulation.Emulated//(default) style applies only to this component
    //encapsulation: ViewEncapsulation.Native// , style applies to all the components
    //encapsulation: ViewEncapsulation.None
 })
 export class AppComponent {
     val:string[]=["Welcome to the world of angular 2"];
     
     Contents = ['models' , 'components' , 'directives' , 'interfaces'];
     cont : Conten;
     
     valuelelo(event){
        this.val=event;
     }
     valuele(event){
        this.Contents.push(event);
     }
 }
