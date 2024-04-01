import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService{
    url='http://localhost:8080'

    constructor(private http:HttpClient){}
    public crearUsuario(user:any){
      return this.http.post(`${this.url}/usuarios/crear`,user)
    }
  }