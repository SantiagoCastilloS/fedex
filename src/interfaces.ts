export interface Producto{
  idProducto:number;
  nombreP: string;
  descripcion: string;
  precio: number;
  marca: Marca;
  categoria: Categoria;
  imagen: Imagen;
}
export interface RespuestaProducto{
  listaProductos: Producto[];
}

export interface Marca{
  idMarca: number;
  nombreM: string;
}
export interface Categoria{
  idCategoria: number;
  nombreC: string;
}
export interface Imagen{
  idImagen: number;
  nombreI: string;
  urlImg: string;
}

export interface Cliente{
  nombre: string;
  apellPat: string;
  apellMat: string;
  direccion: string;
  telefono: number;
  email: string;
  usuario: string;
  pass: string;
}

export interface Compra{
  idCliente: number;
  idPedido: number;
  idProducto: number;
  precio: number;
  cantidad: number;
  monto: number;
}

