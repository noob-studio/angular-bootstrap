import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input()
  public choice: any;

  @Input()
  public label: any;

  @Input()
  public selected: any;

  @Output() changeValue = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
    console.log("selected===>" + this.selected)
  }

  changeSelect(){
    console.log("select==>" + this.selected)
    this.changeValue.emit(this.selected)
  }

}
