import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css']
})
export class HeaderComponent implements OnInit {
  public buttonText:string;
  constructor(public dialog:MatDialog) {}

  ngOnInit(): void {
    this.buttonText="login";
  }
  openDialog() {
     this.dialog.open(LoginComponent);
  }
 }
