import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';
import { HttpRequestService } from '../../service/http-request.service';
import { Url } from '../../../url';

@Component({
  selector: 'app-dropdown-product',
  templateUrl: './dropdown-product.component.html',
  styleUrls: ['./dropdown-product.component.css']
})
export class DropdownProductComponent implements OnInit {

  @Output() reciveData = new EventEmitter<any>();

  @Input()
  public selected: any;
  
  public product: any;

  constructor(private http: HttpRequestService) { }

  ngOnInit(): void {
    this.getData()
  }

  async getData(){
    this.product = await this.http.get(`${Url.product}`);
    this.product = this.product.map((row) => {
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
