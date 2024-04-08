import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient ) { }




  getTipoUsuario() {
    return this.http.get('http://127.0.0.1:8000/tipo_usuario/');
  }

  getTipoIdentidad() {
    return this.http.get('http://127.0.0.1:8000/tipo_identificacion/');
  }

  registrarUsuario(datosCliente: any ) : Observable<any>  {
    return this.http.post('http://127.0.0.1:8000/usuario/', datosCliente)
  }



}
