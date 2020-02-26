import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import NewBlog from './NewBlog';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {
  public newBlog = new NewBlog('', '', []);
  public tag : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addTag(){
    if(this.tag){
      this.newBlog.tags = [...this.newBlog.tags, this.tag];
      this.tag = "";
      console.log(this.newBlog);
    }
  }

  onSubmit(){
    console.log(this.newBlog);

  }

}
