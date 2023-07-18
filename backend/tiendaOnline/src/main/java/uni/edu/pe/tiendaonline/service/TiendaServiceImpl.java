package uni.edu.pe.tiendaonline.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uni.edu.pe.tiendaonline.dao.TiendaDao;
import uni.edu.pe.tiendaonline.dto.*;

import java.util.List;

@Service
public class TiendaServiceImpl implements TiendaService{
    @Autowired
    private TiendaDao dao;

    @Override
    public Cliente registrarUsuario(Cliente cliente) {
        return dao.registrarUsuario(cliente);
    }

    @Override
    public Pedido registrarPedido(Pedido pedido) {
        return dao.registrarPedido(pedido);
    }

    @Override
    public DetallePedido registrarDetallePedido(DetallePedido detallePedido) {
        return dao.registrarDetallePedido(detallePedido);
    }

    @Override
    public List<DetalleCompra> getDetalleCompra() {
        return dao.getDetalleCompra();
    }

    @Override
    public List<Producto> obtenerProductos() {
        return dao.obtenerProductos();
    }
}
