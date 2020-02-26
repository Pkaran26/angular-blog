import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Url } from "Url";
import Login from '../login/Login';
import Signup from '../signup/Signup';
import NewBlog from '../createBlog/NewBlog';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  doLogin(payload: Login){

  }

  doSignup(payload: Signup){

  }

  getDashboardCount(){

  }

  getUserBlogs(skip: number){

  }

  filterBlogs(type: string){

  }

  submitBlog(payload: Blog){
    
  }
}
