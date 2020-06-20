import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../../models/usuario.model';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor( private loginService: LoginService) { }

  ngOnInit() {
  }
  
  login( form: NgForm ){

    if( form.invalid ){ return; }

    this.loginService.login( this.usuario)
    .subscribe( resp =>{
        console.log(resp);
    }, (err) => {
                console.log(err.error.error.message);
    });

    console.log(this.usuario);
    console.log( form );
  }

}
