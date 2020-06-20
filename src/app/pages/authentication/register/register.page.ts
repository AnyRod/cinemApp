import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario : UsuarioModel;

  constructor(private login: LoginService) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit( form: NgForm ){
    if( form.invalid ){ return; }

    this.login.addUser( this.usuario )
    .subscribe( resp =>{
            console.log(resp);
    }, (err) => {
      console.log(err.error.error.message);
    });
    /*console.log('formulario enviado');
    console.log(this.usuario);
    console.log(form);*/
  }

}
