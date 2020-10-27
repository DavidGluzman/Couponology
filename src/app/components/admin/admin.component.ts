import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { from } from 'rxjs';
import {Company} from '../../models/Company';
import {Customer} from '../../models/Customer';
import {AdminService} from '../../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCompanyComponent } from '../add-company/add-company.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    
companies:Company[]=[];
    displayedColumnsCompany: string[] = ['id', 'name', 'email', 'password'];
    dataSourceCompany = new MatTableDataSource(this.companies);

    customers:Customer[]=[];
    displayedColumnsCustomer: string[] = ['id', 'firstName','lastName', 'email', 'password'];
    dataSourceCustomer = new MatTableDataSource(this.customers);
  
    applyFilterCompany(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceCompany.filter = filterValue.trim().toLowerCase();
    }
    applyFilterCustomer(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceCustomer.filter = filterValue.trim().toLowerCase();
    }

  
  constructor(private adminService:AdminService,public dialog: MatDialog) {
  


   }
addCompany(): void{
    this.dialog.open(AddCompanyComponent);
}
addCustomer():void{
  this.dialog.open(AddCustomerComponent);
}
  ngOnInit(): void {
 this.adminService.getCompanies().subscribe(
     (res)=>{console.log(res);
    this.companies=res;
    console.log(this.dataSourceCompany.data=this.companies);
    
    },
     (err)=>{console.log(err);}
 );
 this.adminService.getCustomers().subscribe(
   (res)=>{console.log(res);
this.customers=res;
console.log(this.dataSourceCustomer.data=this.customers);
   }
 )
  }

}
