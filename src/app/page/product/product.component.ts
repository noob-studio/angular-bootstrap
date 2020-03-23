import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../service/http-request.service';
import { Url } from '../../../url';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public modalCtrl
  public selectedModal
  public productArr;

  constructor(private http: HttpRequestService) { 
    this.selectedModal = {}
    this.productArr = []
    this.modalCtrl = [{
      "name": "เพิ่มสินค้า",
      "type": 0
    },{
      "name": "แก้ไขสินค้า",
      "type": 1
    },{
      "name": "ลบสินค้า",
      "type": 2
    }]
  }

  ngOnInit() {
    this.getData()
  }

  async getData(){
    this.productArr = await this.http.get(`${Url.product}`)
  }

  setAction(i, no = -1){
    this.selectedModal = this.modalCtrl[i]
    console.log("no===>" + JSON.stringify(no))
    if(no > -1){
      
      this.selectedModal.data = {
        product_id: this.productArr[no].id,
        product_name: this.productArr[no].name,
        product_detail: this.productArr[no].detail,
        product_price: this.productArr[no].productPrice
      }
      console.log(JSON.stringify(this.productArr[no]))
    }else{
      this.selectedModal.data = {}
    }
  }

  async submit(){
    try{
      if(this.selectedModal.type == 0){
        await this.http.post(`${Url.product}`, this.selectedModal.data)
      }else if(this.selectedModal.type == 1){
        await this.http.patch(`${Url.product}`, this.selectedModal.data, this.selectedModal.data.product_id)
      }else if(this.selectedModal.type == 2){
        await this.http.delete(`${Url.product}`, this.selectedModal.data.product_id)
      }
    }catch(err){
      console.log("err: " + JSON.stringify(err))
    }
    this.getData()
  }
}
