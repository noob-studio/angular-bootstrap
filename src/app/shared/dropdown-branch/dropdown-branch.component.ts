import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpRequestService } from '../../service/http-request.service';
import { Url } from '../../../url';

@Component({
  selector: 'app-dropdown-branch',
  templateUrl: './dropdown-branch.component.html',
  styleUrls: ['./dropdown-branch.component.css']
})
export class DropdownBranchComponent implements OnInit {

  @Output() reciveData = new EventEmitter<any>();

  @Input()
  public selected: any;

  public branch: any;

  constructor(private http: HttpRequestService) { }

  ngOnInit(): void {
    this.getData()
  }

  async getData(){
    this.branch = await this.http.get(`${Url.branch}`);
    this.branch = this.branch.map((row) => {
      return {
        name: row.name,
        value: row.id
      }
    })
  }

  changeData($event){
    this.reciveData.emit($event)
  }

}
