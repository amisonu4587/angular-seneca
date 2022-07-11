import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }
  getproperty(){
    return this.http.get('http://localhost:8000/api/property-list');
  }

  saveproperty(data:any){
    return this.http.post('http://localhost:8000/api/property-add',data)
  }

  deleteproperty(id:any){
    return this.http.delete(`http://localhost:8000/api/property-delete/${id}`)
  }
  getcurrrentProperty(id:any){
    return this.http.get(`http://localhost:8000/api/property-edit/${id}`)
  }
  updateCurrentProperty(id:any,data:any){
    return this.http.put(`http://localhost:8000/api/property-update/${id}`,data)

  }
}
