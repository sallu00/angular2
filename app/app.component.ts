import { Component, ViewEncapsulation, Input , EventEmitter , Output} from "@angular/core";
import { Conten } from "./app.interface";
import { user } from './app.module';
@Component({
    selector: 'my-app',
    templateUrl: "./app/app.component.html"
    ,
    styleUrls: ['./app/app.component.css'],
    //encapsulation: ViewEncapsulation.Emulated//(default) style applies only to this component
    //encapsulation: ViewEncapsulation.Native// , style applies to all the components
    //encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    val: string[] = ["Welcome to the world of angular 2"];
    @Output() route = new EventEmitter();
    Contents = ['models', 'components', 'directives', 'interfaces'];
    cont: Conten;



    valuelelo(event) {
        this.val = event;
    }
    valuele(event) {
        this.Contents.push(event);
    }
}
