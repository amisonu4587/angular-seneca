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
}
