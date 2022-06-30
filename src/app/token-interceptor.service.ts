import { Injectable,Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private loginSvc:LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token = this.loginSvc.getToken();
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(tokenizedReq)

  }
}
