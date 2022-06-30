import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }


  login(credential:any){
    const dict = {
        'content-type' : 'application/jSon'
    }
    return this.http.post('http://localhost:8000/api/login',credential);
  }

  logout(){
    return this.http.get('http://localhost:8000/api/logout');
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
