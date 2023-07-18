import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../ApiService";
import {Cliente} from "../../interfaces";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit{
  nombre: string = "";
  apellPat: string = "";
  apellMat: string = "";
  direccion: string = "";
  telefono: number = 0;
  email: string = "";
  usuario: string = "";
  pass: string = "";
  constructor(private api: ApiService) {
  }
  ngOnInit() {
  }

  registrar() {
    console.log(this.nombre);
    console.log(this.apellPat);
    console.log(this.apellMat);
    console.log(this.direccion);
    console.log(this.telefono);
    console.log(this.email);
    console.log(this.usuario);
    console.log(this.pass);

    const cliente: Cliente ={
      nombre: this.nombre,
      apellPat: this.apellPat,
      apellMat: this.apellMat,
      direccion: this.direccion,
      telefono: this.telefono,
      email: this.email,
      usuario: this.usuario,
      pass: this.pass
    }

    this.api.registrarUsuario(cliente).subscribe(data =>{
      console.log("<=== respuesta del metodo registrar usuario ===>");
      console.log(data.nombre);
    })
  }
}
