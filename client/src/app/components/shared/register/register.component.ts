import { Component,ViewChild } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @ViewChild('registroForm') registroForm!: NgForm;

  tipoUsuario: any[] = [];
  tipoIdentidad: any[] = [];

  datos: any = {}

  constructor( private usuarioService: UsuarioService) {

    this.usuarioService.getTipoUsuario().subscribe((data: any) => {
      this.tipoUsuario = data;
    });

    this.usuarioService.getTipoIdentidad().subscribe((data: any) => {
      this.tipoIdentidad = data;
    });
   }


   registrarUsuario(){
    this.usuarioService.registrarUsuario(this.datos).subscribe((data: any) => {
      console.log(data);
      this.datos = {};
      this.registroForm.resetForm();
    });

   }


}
