import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Login from './Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login = new Login('','');

  constructor() { }

  ngOnInit(): void {
  }

}
