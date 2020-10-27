import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import {EmailPassModel} from 'src/app/models/EmailPassModel';
import { LoginResult } from 'src/app/models/LoginResponse';
import {LoginService} from '../../services/login.service';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private clientType:string;
public emailPassModel = new EmailPassModel();
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void { 
  this.clientType="customer"; //default clientType when opening the login form
  }

  //when you press the "login" button it checks the clientType and send a json of email and password and gets a json of clientType and token

  public loginToServer():void{
switch (this.clientType) {
  case "admin":
    this.loginService.adminLoginRequest(this.emailPassModel).subscribe(
      (loginResult)=>{
        // alert(loginResult.message+" "+loginResult.token);
        sessionStorage.setItem('Token',loginResult.token)
        this.loginService.token = loginResult.token;
        this.loginService.type = this.clientType;
        this.loginService.isLoggedIn = true;
        // console.log(this.loginService.token);
        // console.log(this.loginService.type);
        // console.log(this.loginService.isLoggedIn);
        this.router.navigate(['/admin']);


        }
        , (err) => { alert(err.error); }
       );
    break;
    case "company":
      this.loginService.companyLoginRequest(this.emailPassModel).subscribe(
        (loginResult)=>{
          alert(loginResult.message+" "+loginResult.token);
          this.loginService.token = loginResult.token;
          this.loginService.type = this.clientType;
          this.loginService.isLoggedIn = true;
          console.log(this.loginService.token);
          console.log(this.loginService.type);
          console.log(this.loginService.isLoggedIn);
  
          }
          , (err) => { alert(err.error); }
         );
      break;
      case "customer":
    this.loginService.customerLoginRequest(this.emailPassModel).subscribe(
      (loginResult)=>{
        alert(loginResult.message+" "+loginResult.token);
        this.loginService.token = loginResult.token;
        this.loginService.type = this.clientType;
        this.loginService.isLoggedIn = true;
        console.log(this.loginService.token);
        console.log(this.loginService.type);
        console.log(this.loginService.isLoggedIn);

        }
        , (err) => { alert(err.error); }
       );
    break;
  default:
    break;
}
  }
    

//changes clientType when choosing the clientType

  changeClientType(event){ 
    switch(event.index){
case 0: {
  this.clientType="customer";
  break;
}
case 1:{
  this.clientType="company";
  break;
}
case 2:{
  this.clientType="admin";
  break;
}
}

}
}
