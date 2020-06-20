import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor( private router: Router,
               private login: LoginService){}


  canActivate( ):boolean {

    if( this.login.estaAutenticado() ){
      return true;
    } else{
      this.router.navigateByUrl('/login');
    }
  }
  
}
