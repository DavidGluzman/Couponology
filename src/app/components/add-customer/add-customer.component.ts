import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Customer } from 'src/app/models/Customer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  public firstname?:string
  public lastname?:string
public email?:string
public password?:string
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {

  }
addCustomer(){
  const customer: Customer = new Customer(0,this.firstname,this.lastname,this.email,this.password,null)
   this.adminService.addCustomer(customer).subscribe(
       (res)=>{console.log(res);},
       
       (err)=>{console.log(err);}
   ); 

}
}
