import { Component , Input , Output , EventEmitter , ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'contents',
    templateUrl: "./app/contents/contents.component.html" , // give address according to the index.html file 
    styleUrls : ['./app/contents/contents.component.css'] ,

    encapsulation: ViewEncapsulation.None
})

export class ContentComponent {
    @Input() Content ; // getting input from parent component 
    @Output() changeHeader=new EventEmitter();
    cont : string;
    giveValue(con){
        this.changeHeader.emit(con);
    }
}
