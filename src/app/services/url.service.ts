import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  public BASE_URL = 'http://localhost:';
  public PORT = 8080;

  public admin = '/admin/';
  public customer = '/customer/';
  public company = '/company/';
  public constructor() { }

  public getAdminURL(): string {
    return this.BASE_URL + this.PORT + this.admin;
  }

  public getCustomerURL(): string {
    return this.BASE_URL + this.PORT + this.customer;
  }

  public getCompanyURL(): string {
    return this.BASE_URL + this.PORT + this.company;
  }

  public getURL(type: string): string {
    switch (type) {
      case 'admin':
        return this.getAdminURL();
      case 'customer':
        return this.getCustomerURL();
      case 'company':
        return this.getCompanyURL();
    }
  }
}