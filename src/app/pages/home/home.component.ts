import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarios : any[] = []
  
  constructor(private userSer:UsuarioService) { }
  lUsuarios(){
    this.userSer.listarUsuarios().subscribe(
      (data)=>{
        this.usuarios=data
      }
    )
  }

  ngOnInit(): void {this.lUsuarios()

  }
  
}
