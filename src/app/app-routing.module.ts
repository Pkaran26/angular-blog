import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { CreateblogComponent } from './createblog/createblog.component';

import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';

const routes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog', component: BloglistComponent },
  { path: 'blog/:id', component: BlogdetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: UserComponent },
  { path: 'newblog', component: CreateblogComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'adminsignup', component: AdminsignupComponent },
  { path: 'admindashboard', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[
  BloglistComponent,
  BlogdetailComponent,
  LoginComponent,
  SignupComponent,
  UserComponent,
  CreateblogComponent,
  AdminComponent,
  AdminloginComponent,
  AdminsignupComponent
]
