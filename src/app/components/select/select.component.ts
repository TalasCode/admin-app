import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
@Input() title:string = "";
@Input() data:any[] = [];
@Output() selectdata = new EventEmitter();
constructor() {}

ngOnInit():void{

}
detectchanges(event :any){
  this.selectdata.emit(event)
}


}

