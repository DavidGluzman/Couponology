import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import {Coupon} from '../models/Coupon';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient:HttpClient,private loginService: LoginService) { }

  addCoupon(coupon: Coupon): Observable<any>{
    const headers = new HttpHeaders({ 'Token':  sessionStorage.getItem('Token')});
    const options = { headers: headers };
    return this.httpClient.post("http://localhost:8080/company/addCoupon",coupon,options);
    }
    getCoupons(): Observable<any>{
      const headers = new HttpHeaders({ 'Token':  sessionStorage.getItem('Token')});
      const options = { headers: headers };
      return this.httpClient.get("http://localhost:8080/company/getAllCoupons",options);
    }
      updateCoupon(coupon: Coupon): Observable<any>{
        const headers = new HttpHeaders({ 'Token':  sessionStorage.getItem('Token')});
        const options = { headers: headers };
        return this.httpClient.put("http://localhost:8080/company/updateCoupon",coupon,options);
        }
        deleteCoupon(id:number): Observable<any>{
          const headers = new HttpHeaders({ 'Token':  sessionStorage.getItem('Token')});
          const options = { headers: headers };
          return this.httpClient.get("http://localhost:8080/company/deleteCoupon/?id="+id,options);
        }
        getCompanyDetails(): Observable<any>{
          const headers = new HttpHeaders({ 'Token':  sessionStorage.getItem('Token')});
          const options = { headers: headers };
          return this.httpClient.get("http://localhost:8080/company/getCompanyDetails",options);
        
        }



}
