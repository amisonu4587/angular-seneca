import { PropertyService } from './property.service';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';

import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyResolver implements Resolve<boolean> {
  constructor(private propertyService: PropertyService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // return of(true);
    // return of('Route!').pipe(delay(2000));
    // return of(true).pipe(delay(2000));
    return this.propertyService.getproperty();

  }
}
