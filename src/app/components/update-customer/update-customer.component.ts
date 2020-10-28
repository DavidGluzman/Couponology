import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
public id?:number
public firstname?:string
public lastname?:string
public email?:string
public password?:string
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }
    updateCustomer(){
      const customer: Customer = new Customer(this.id,this.firstname,this.lastname,this.email,this.password,null)
       this.adminService.updateCustomer(customer).subscribe(
           (res)=>{console.log(res);},
           
           (err)=>{console.log(err);}
       ); 
    
  }

}
