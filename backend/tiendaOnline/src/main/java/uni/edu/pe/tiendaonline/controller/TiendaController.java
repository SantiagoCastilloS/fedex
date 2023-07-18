package uni.edu.pe.tiendaonline.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import uni.edu.pe.tiendaonline.dto.*;
import uni.edu.pe.tiendaonline.service.TiendaService;

import java.util.List;
@CrossOrigin(origins = {"*"})
@RestController
public class TiendaController {
    @Autowired
    private TiendaService service;
    @RequestMapping(value="/registrarUsuario",
            method = RequestMethod.POST)
    public Cliente registrarUsuario(@RequestBody Cliente cliente){
        return service.registrarUsuario(cliente);
    }
    @RequestMapping(value="/obtenerProductos",
            method = RequestMethod.POST)
    public @ResponseBody RespuestaProducto obtenerProductos(){
        RespuestaProducto respuestaProducto = new RespuestaProducto();
        respuestaProducto.setListaProductos(service.obtenerProductos());
        return respuestaProducto;
    }
    @RequestMapping(value="/registrarPedido",
            method = RequestMethod.POST)
    public Pedido registrarPedido(@RequestBody Pedido pedido){
        return service.registrarPedido(pedido);
    }
    @RequestMapping(value="/registrarDetallePedido",
            method = RequestMethod.POST)
    public DetallePedido registrarDetallePedido(@RequestBody DetallePedido detallePedido){
        return service.registrarDetallePedido(detallePedido);
    }
    @RequestMapping(value="/getDetalleCompra",
            method = RequestMethod.GET)
    public List<DetalleCompra> getDetalleCompra(){
        return service.getDetalleCompra();
    }
}
