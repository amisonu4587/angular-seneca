import { Observable } from 'rxjs';
import { APIModel } from './model/APIModel.model';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertyData } from './model/property.model';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient,private ApiService:ApiService) { }

  getproperty(){
    return this.ApiService.get('http://localhost:8000/api/property-list');
  }

  saveproperty(data:any){
    return this.http.post('http://localhost:8000/api/property-add',data)
  }

  deleteproperty(id:any){
    return this.http.delete(`http://localhost:8000/api/property-delete/${id}`)
  }
  getcurrrentProperty(id:any) : Observable<APIModel<PropertyData>>{
    return this.http.get<APIModel<PropertyData>>(`http://localhost:8000/api/property-edit/${id}`)
  }
  updateCurrentProperty(id:any,data:any){
    return this.http.put(`http://localhost:8000/api/property-update/${id}`,data)

  }
}
