import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';

import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { CreateblogComponent } from './createblog/createblog.component';

import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog', component: BloglistComponent },
  { path: 'blog/:id', component: BloglistComponent },
  { path: 'blog/:id/detail', component: BlogdetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: UserComponent, canActivate: [AuthService] },
  { path: 'newblog', component: CreateblogComponent, canActivate: [AuthService] },
  { path: 'adminlogin', component: AdminloginComponent, canActivate: [AuthService] },
  { path: 'admindashboard', component: AdminComponent, canActivate: [AuthService] },
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
  AdminloginComponent
]
