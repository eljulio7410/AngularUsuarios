import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService{
    url='http://localhost:8080'

    constructor(private http:HttpClient){}
    public crearUsuario(user:any){
      return this.http.post(`${this.url}/usuarios/crear`,user)
    }

    public listarUsuarios():Observable<any[]>{
      return this.http.get<any[]>(`${this.url}/usuarios`)
    }
  }