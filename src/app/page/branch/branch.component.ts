import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../service/http-request.service';
import { Url } from '../../../url';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  public modalCtrl
  public selectedModal
  public branchArr

  constructor(private http: HttpRequestService) { 
    this.selectedModal = {}
    this.branchArr = []
    this.modalCtrl = [{
      "name": "เพิ่มคลังสินค้า",
      "type": 0
    },{
      "name": "แก้ไขคลังสินค้า",
      "type": 1
    },{
      "name": "ลบคลังสินค้า",
      "type": 2
    }]
  }

  ngOnInit() {
    this.getData()
  }

  async getData(){
    this.branchArr = await this.http.get(`${Url.branch}`)
  }

  setAction(i, no = -1){
    this.selectedModal = this.modalCtrl[i]
    if(no > -1){
      this.selectedModal.data = {
        branch_id: this.branchArr[no].id,
        branch_name: this.branchArr[no].name,
      }
    }else{
      this.selectedModal.data = {}
    }
  }

  async submit(){
    try{
      if(this.selectedModal.type == 0){
        await this.http.post(`${Url.branch}`, this.selectedModal.data)
      }else if(this.selectedModal.type == 1){
        await this.http.patch(`${Url.branch}`, this.selectedModal.data, this.selectedModal.data.branch_id)
      }else if(this.selectedModal.type == 2){
        await this.http.delete(`${Url.branch}`, this.selectedModal.data.branch_id)
      }
    }catch(err){
      console.log("err: " + JSON.stringify(err))
    }
    this.getData()
  }

}
