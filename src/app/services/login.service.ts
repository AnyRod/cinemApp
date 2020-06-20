import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'https://identitytoolkit.googleapis.com/v1'; 
  private apiKey= 'AIzaSyC7SlAb7OmJ0n9tzqbth6FlGB5VwrL27Ks';
  private userToken: string;
  // crear usuarios
  //V1  https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // V3  https://www.googleapis.com/identitytoolkit/v3/relyingparty/signUpNewUser?key=[API_KEY]

  //login

  //V1 https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  //V3 https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]

  constructor( private http: HttpClient) { 
    this.leerToken();
  }

  logout(){

    
  }

  login(usuario: UsuarioModel){
    const authData = {
      ...usuario,  // el uso del ... dice que llame y envie todas las propiedades del objeto usuario
      returnSecureToken: true };
      return this.http.post(
        `${this.url}/accounts:signInWithPassword?key=${this.apiKey}`,
        authData // debe recibir 2 parametros el url+key y elauthData
).pipe(
  map( resp =>{
    console.log('Entroen el mapa de RXJS');
      this.guardarToken( resp['idToken'] );
      return resp;

  })

);

  }

   addUser( usuario: UsuarioModel ){
     const authData = {
                ...usuario,  // el uso del ... dice que llame y envie todas las propiedades del objeto usuario
                returnSecureToken: true
     };
     return this.http.post(
                    `${this.url}/accounts:signUp?key=${this.apiKey}`,
                    authData // debe recibir 2 parametros el url+key y elauthData
     ).pipe(
              map( resp =>{
                console.log('Entroen el mapa de RXJS');
                  this.guardarToken( resp['idToken'] );
                  return resp;

              })

     );
   }

   private  guardarToken( idToken: string ){
     this.userToken = idToken;
     localStorage.setItem('token', idToken);
   }

   leerToken(){
     if( localStorage.getItem('token')){
       this.userToken = localStorage.getItem('token');
     } else{
       this.userToken = '';
     }
   }

}
