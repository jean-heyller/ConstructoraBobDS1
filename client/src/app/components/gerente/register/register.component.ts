import { Component,ViewChild } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @ViewChild('registroForm') registroForm!: NgForm;

  tipoUsuario: any[] = [];
  tipoIdentidad: any[] = [];

  datos: any = {
    genero: 'Selecciona tu Género',
    tipoIdentID: 'Selecciona el tipo de identificación',
    tipoUsuario: 'Selecciona el tipo de usuario'
  }

  constructor( private usuarioService: UsuarioService) {

    this.usuarioService.getTipoUsuario().subscribe((data: any) => {
      this.tipoUsuario = data;
    });

    this.usuarioService.getTipoIdentidad().subscribe((data: any) => {
      this.tipoIdentidad = data;
    });
   }


   registrarUsuario(){
    this.usuarioService.registrarUsuario(this.datos).subscribe({

      next: (data: any) => {

        Swal.fire({
          title: 'Usuario: '+ data.username + ' ha sido registrado',
          text: 'Se ha registrado el usuario correctamente',
          icon: 'success',
          showConfirmButton:false,
          timer: 2000
        });
        this.datos = {};
        this.registroForm.resetForm();
      },
      error: (error) => {
        console.log(error);

        let primerError;
        let campo;
        for (const key in error.error) {
          if (error.error.hasOwnProperty(key)) {
            primerError = error.error[key][0];
            campo = key
            break;
          }
        }

        Swal.fire({
          title: primerError,
          text: "Error en " + campo,
          icon: 'error',
          confirmButtonText: 'Ok'
        });

      }
    });

   }


}
