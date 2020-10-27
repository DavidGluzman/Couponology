import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import {EmailPassModel} from '../models/EmailPassModel';
import { UrlService } from './url.service';
import{ LoginResult} from '../models/LoginResponse'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  public isLoggedIn = false;
  public token: string;
  public type: string;
  
  constructor(private httpClient:HttpClient, private urlService: UrlService) { }

adminLoginRequest(emailPassModel: EmailPassModel): Observable<LoginResult>{
return this.httpClient.post("http://localhost:8080/admin/login",emailPassModel,{withCredentials:true});
}
companyLoginRequest(emailPassModel: EmailPassModel): Observable<LoginResult>{
  return this.httpClient.post("http://localhost:8080/company/login",emailPassModel,{withCredentials:true});
  }
  customerLoginRequest(emailPassModel: EmailPassModel): Observable<LoginResult>{
    return this.httpClient.post("http://localhost:8080/customer/login",emailPassModel,{withCredentials:true});
    }
}

 