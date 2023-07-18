package uni.edu.pe.tiendaonline.dto;

import lombok.Data;

import java.util.List;

@Data
public class RespuestaProducto {
    private List<Producto> listaProductos;
}
