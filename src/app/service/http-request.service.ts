import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Url } from '../../url';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) { 
  }

  report(url){
    return new Promise((resolve, reject) => {
      this.http.get(`${Url.server}${Url.report.main}${url}`).subscribe((result) => {
        console.log("result===>" + JSON.stringify(result))
        resolve(result);
      }, (error) => {
        reject(error)
      })
  })
  }

  get(url, param = ""){
    return new Promise((resolve, reject) => {
        this.http.get(`${Url.server}${url}${Url.all}?${param}`).subscribe((result) => {
          resolve(result);
        }, (error) => {
          reject(error)
        })
    })
  }

  post(url, data){
    return new Promise((resolve, reject) => {
      this.http.post(`${Url.server}${url}${Url.create}`, JSON.stringify(data), {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      }).subscribe((result) => {
        resolve(result)
      }, async (error) => {
        reject(error)
      })
    })
  }

  patch(url, data, id){
    return new Promise((resolve, reject) => {
      this.http.patch(`${Url.server}${url}${Url.edit}?id=${id}`, JSON.stringify(data), {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      }).subscribe((result) => {
        resolve(result)
      }, async (error) => {
        reject(error)
      })
    })
  }

  delete(url, id){
    return new Promise((resolve, reject) => {
      this.http.delete(`${Url.server}${url}${Url.delete}?id=${id}`, {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      }).subscribe((result) => {
        resolve(result)
      }, async (error) => {
        reject(error)
      })
    })
  }
}
