import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public post(apiUrl:string,body:string){
    return this.http.post(apiUrl,body)
  }


  get(url:string){
    return this.http.get(url)
  }
}
