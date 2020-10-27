import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Company } from 'src/app/models/Company';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
public name?:string
public email?:string
public password?:string
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {

  }
addCompany(){
  const company: Company = new Company(0,this.name,this.email,this.password,null)
   this.adminService.addCompany(company).subscribe(
       (res)=>{console.log(res);},
       
       (err)=>{console.log(err);}
   ); 

}
}
