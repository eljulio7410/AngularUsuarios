import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username : '',
    password : '',
    nombre : '',
    apellido : '',
    email : '',
    telefono : ''
  }

  constructor(private usuarioService: UsuarioService) { }
  crearUsuario(){
    

      Swal.fire({
        title: "Desea guardar sus datos",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        
        if (result.isConfirmed) {
           this.usuarioService.crearUsuario(this.user).subscribe()
          Swal.fire("Guardado!", "", "success");
         
        } else if (result.isDenied) {
          Swal.fire("No Guardado", "", "info");
        }
      })
      
    


  }

  ngOnInit(): void {
  }

}
