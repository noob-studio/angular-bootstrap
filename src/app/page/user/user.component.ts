import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../service/http-request.service';
import { Url } from '../../../url';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public modalCtrl
  public selectedModal
  public userArr;

  constructor(private http: HttpRequestService) { 
    this.selectedModal = {}
    this.userArr = []
    this.modalCtrl = [{
      "name": "เพิ่มผู้ใช้",
      "type": 0
    },{
      "name": "แก้ไขผู้ใช้",
      "type": 1
    },{
      "name": "ลบผู้ใช้",
      "type": 2
    }]
  }

  ngOnInit() {
    this.getData()
  }

  async getData(){
    this.userArr = await this.http.get(`${Url.user}`)
  }

  setAction(i, no = -1){
    this.selectedModal = this.modalCtrl[i]
    if(no > -1){
      this.selectedModal.data = {
        user_id: this.userArr[no].id,
        user_name: this.userArr[no].name
      }
    }else{
      this.selectedModal.data = {}
    }
  }

  async submit(){
    try{
      if(this.selectedModal.type == 0){
        await this.http.post(`${Url.user}`, this.selectedModal.data)
      }else if(this.selectedModal.type == 1){
        await this.http.patch(`${Url.user}`, this.selectedModal.data, this.selectedModal.data.user_id)
      }else if(this.selectedModal.type == 2){
        await this.http.delete(`${Url.user}`, this.selectedModal.data.user_id)
      }
    }catch(err){
      console.log("err: " + JSON.stringify(err))
    }
    this.getData()
  }

}
