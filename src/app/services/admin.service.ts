import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Url } from "Url";
import Login from '../login/Login';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http: HttpClient) { }

  doLogin(payload: Login){

  }

  getDashboardCount(){

  }

  getUserBlogs(skip: number){

  }

  filterBlogs(type: string){

  }

  getUsers(skip: number){

  }
}
