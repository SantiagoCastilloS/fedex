import {Component, OnInit} from '@angular/core';
import {Cliente, Compra, Producto} from "../../interfaces";
import {ApiService} from "../../ApiService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.scss']
})
export class DetalleproductoComponent implements OnInit{
  listaProductos: Producto[] = [];
  indice: number = -1;
  producto?: Producto = undefined;

  idCliente: number = -1;
  idPedido: number = -1;
  idProducto: number = -1;
  precio: number = 0;
  cantidad: number = 0;
  monto: number = 0;

  constructor(private api:ApiService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void{
    this.indice = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.api.obtenerProductos().subscribe(data => {
      this.listaProductos = data.listaProductos;
      this.producto = this.listaProductos[this.indice];
    })

  }

  obtenerProducto() {
    this.producto = this.listaProductos[this.indice];
  }

  registrarC(){
    const compra: Compra ={
      idCliente: this.idCliente,
      idPedido: this.idPedido,
      idProducto: this.indice,
      precio: this.precio,
      cantidad: this.cantidad,
      monto: this.precio * this.cantidad
    }
    this.api.registrarCompra(compra).subscribe(data =>{
      console.log("<=== respuesta del metodo registrar compra ===>");
    })
  }

}
