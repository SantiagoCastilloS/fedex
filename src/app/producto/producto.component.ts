import {Component, OnInit} from '@angular/core';
import {Producto} from "../../interfaces";
import {ApiService} from "../../ApiService";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit{
  listaProductos: Producto[] = [];
  indice: number = -1;
  producto?: Producto = undefined;
  constructor(private api:ApiService) {
  }
  ngOnInit(): void{
    this.api.obtenerProductos().subscribe(data => {
      this.listaProductos = data.listaProductos;
    })

  }

  obtenerProducto() {
    this.producto = this.listaProductos[this.indice];
  }
}


