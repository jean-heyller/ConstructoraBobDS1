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
  files: File[] = [];

  datos: any = {
    genero: 'Selecciona tu Género',
    tipoIdentID: 'Selecciona el tipo de identificación',
    tipoUsuario: 'Selecciona el tipo de usuario',
    foto: '',
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
    this.upload();

    if((this.usuarioService.getUrl()).length > 0){
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

    }else{
      console.log("No entro")
    }
    

   }

   onSelect(event:any) {
    const images = event.addedFiles.filter((file:any) => this.isFileImage(file));
    this.files.push(...images);
  }

  onRemove(event:any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  upload(){

    if(this.files.length > 0){
      
      const file_data = this.files[0];

      const form_data = new FormData();

      form_data.append('file', file_data);
      form_data.append('upload_preset', 'constructora-bob');
      form_data.append('cloud_name', 'dck1pqw4h');

      this.usuarioService.uploadImg(form_data).subscribe((data: any) => {
      
        this.datos.foto = data.url;

        this.usuarioService.seturl(data.url);
      })
    }

  }

  private isFileImage(file: File): boolean {
    return file.type.startsWith('image/');
  }


}