package uni.edu.pe.tiendaonline.dao;

import uni.edu.pe.tiendaonline.dto.*;

import java.util.List;

public interface TiendaDao {
    Cliente registrarUsuario(Cliente cliente);

    Pedido registrarPedido(Pedido pedido);

    DetallePedido registrarDetallePedido(DetallePedido detallePedido);

    List<DetalleCompra> getDetalleCompra();

    List<Producto> obtenerProductos();
}
