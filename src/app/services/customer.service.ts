import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import {Coupon} from '../models/Coupon';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient,private loginService: LoginService) { }

  addCouponPurchase(coupon: Coupon): Observable<any>{
    const headers = new HttpHeaders({ 'Token':  sessionStorage.getItem('Token')});
    const options = { headers: headers };
    return this.httpClient.post("http://localhost:8080/customer/addCouponPurchase",coupon.id,options);
    }
    getCoupons(): Observable<any>{
      const headers = new HttpHeaders({ 'Token':  sessionStorage.getItem('Token')});
      const options = { headers: headers };
      return this.httpClient.get("http://localhost:8080/customer/getAllCoupons",options);
    }
    getCustomerDetails(): Observable<any>{
      const headers = new HttpHeaders({ 'Token':  sessionStorage.getItem('Token')});
      const options = { headers: headers };
      return this.httpClient.get("http://localhost:8080/customer/getCustomerDetails",options);
    
    }





}
