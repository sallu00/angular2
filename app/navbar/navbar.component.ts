import { Component , ViewEncapsulation , Input } from "@angular/core" ;
import { ActivatedRoute } from "@angular/router" ;
 @Component({ 
    selector:'navbar' , 
    templateUrl : "./app/navbar/navbar.component.html"
    ,
    styleUrls : ['./app/navbar/navbar.component.css'] ,
    //encapsulation: ViewEncapsulation.Emulated//(default) style applies only to this component
    //encapsulation: ViewEncapsulation.Native// , style applies to all the components
    //encapsulation: ViewEncapsulation.None
 })
 export class NavbarComponent {
   

 }
