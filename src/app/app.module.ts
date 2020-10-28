import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutComponent} from './components/layout/layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {HeaderComponent} from './components/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { BodyComponent } from './components/body/body.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';


import { from } from 'rxjs';
import { AdminComponent } from './components/admin/admin.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, BodyComponent, ToolbarComponent, LoginComponent, AdminComponent, AddCompanyComponent, AddCustomerComponent, UpdateCustomerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [LayoutComponent,HeaderComponent]
})
export class AppModule { }
