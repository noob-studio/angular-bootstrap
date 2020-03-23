import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

import { Url } from './.././../../url';
import { HttpRequestService } from '../../service/http-request.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public modalCtrl
  public selectedModal

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
    }
  };
  barChartLabels: Label[] = ['Apple', 'Banana'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ];

  public ready: boolean = false;

  productLabels: Label[] = [];
  productData: MultiDataSet = [
    []
  ];
  doughnutChartType: ChartType = 'doughnut';

  public inStock: any;
  public index: any;

  constructor(public http: HttpRequestService) { 
    this.inStock = []
    this.selectedModal = {}
    this.modalCtrl = [{
      "name": "เพิ่มสินค้าคงคลัง",
      "type": 0
    },{
      "name": "แก้ไขสินค้าคงคลัง",
      "type": 1
    },{
      "name": "ลบสินค้าคงคลัง",
      "type": 2
    }]
  }

  ngOnInit(): void {
    this.getReport()
  }

  async getReport(){
    this.inStock = await this.http.report(Url.report.in_stock)
    this.productLabels = this.inStock.map((row) => {
      return row.product_name;
    })
    let val = this.inStock.map((row) => {
      return row.pb_stock;
    })
    this.productData = [val]
    this.barChartData = [
      { data: val, label: 'สินค้า' }
    ];
    this.ready = true;
  }

  setAction(i, no = -1){
    this.selectedModal = this.modalCtrl[i]
    if(no > -1){
      this.index = no;
      this.selectedModal.data = {
        pb_stock: this.inStock[no].pb_stock,
        pb_id: this.inStock[no].pb_id,
        pb_branch_id: this.inStock[no].branch_id,
        pb_product_id: this.inStock[no].product_id
      }
    }else{
      this.selectedModal.data = {}
    }
  }

  changeValue($event, index){
    this.selectedModal.data[index] = $event;
  }

  async submit(){
    try{
      if(this.selectedModal.type == 0){
        await this.http.post(`${Url.product_branch}`, this.selectedModal.data)
      }else if(this.selectedModal.type == 1){
        await this.http.patch(`${Url.product_branch}`, this.selectedModal.data, this.selectedModal.data.pb_id)
      }else if(this.selectedModal.type == 2){
        await this.http.delete(`${Url.product_branch}`, this.selectedModal.data.pb_id)
      }
    }catch(err){
      console.log("err: " + err)
    }
    this.getReport()
  }

}
