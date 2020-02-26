import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Signup from './Signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signup = new Signup('','','');
  public public confirmPassword: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
