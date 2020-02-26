import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(public router: Router) { }

  canActivate(): boolean {
    if (this.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  isAuthenticated(){
    try {
      const user = JSON.parse(localStorage.getItem('userVal'));
      if(user){
        return true;
      }else{
        return false;
      }
    } catch(e){
      return false;
    }
  }
}
