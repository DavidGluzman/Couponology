import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Company } from '../models/Company';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient,private loginService: LoginService) { }

  getCompanies(): Observable<any>{
    const headers = new HttpHeaders({ 'Token':  sessionStorage.getItem('Token')});
    const options = { headers: headers };
    return this.httpClient.get("http://localhost:8080/admin/getAllCompanies",options);
}
getCustomers(): Observable<any>{
  const headers = new HttpHeaders({ 'Token':  sessionStorage.getItem('Token')});
  const options = { headers: headers };
  return this.httpClient.get("http://localhost:8080/admin/getAllCustomers",options);

}
addCompany(company: Company): Observable<any>{
  const headers = new HttpHeaders({ 'Token':  sessionStorage.getItem('Token')});
  const options = { headers: headers };
  return this.httpClient.post("http://localhost:8080/admin/addCompany",company,options);
  }
}