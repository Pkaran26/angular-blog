import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Login from './Login';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  public login = new Login('','');
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
