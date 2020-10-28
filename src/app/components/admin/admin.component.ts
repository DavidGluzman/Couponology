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
import {UpdateCustomerComponent} from '../update-customer/update-customer.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    
companies:Company[]=[];
    displayedColumnsCompany: string[] = ['id', 'name', 'email', 'password','options'];
    dataSourceCompany = new MatTableDataSource(this.companies);

    customers:Customer[]=[];
    displayedColumnsCustomer: string[] = ['id', 'firstName','lastName', 'email', 'password','options'];
    dataSourceCustomer = new MatTableDataSource(this.customers);
  
    applyFilterCompany(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceCompany.filter = filterValue.trim().toLowerCase();
    }
    applyFilterCustomer(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceCustomer.filter = filterValue.trim().toLowerCase();
    }

  
  constructor(private adminService:AdminService,private dialog: MatDialog) {
  


   }
addCompany(): void{
  const dialogRef = this.dialog.open(AddCompanyComponent);
  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
    
    if(result) this.ngOnInit();
    else alert("aaa")
  });
}




addCustomer(): void{
  const dialogRef = this.dialog.open(AddCustomerComponent);
  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
    
    if(result) this.ngOnInit();
    else alert("aaa")
  });
}
updateCustomer(): void{
  const dialogRef = this.dialog.open(UpdateCustomerComponent);
  dialogRef.afterClosed().subscribe(result=>{
    console.log(result);
    
    if(result) this.ngOnInit();
    else alert("aaa")
  });
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
