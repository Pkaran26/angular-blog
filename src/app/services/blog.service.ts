import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Url } from "Url";
import NewBlog from '../createBlog/NewBlog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _htttp: HttpClient) { }

  getBlogCount(){

  }

  getBlogs(skip: number){

  }

  getBlogsDetail(id: number){

  }

  filterBlogs(type: string){

  }
}
