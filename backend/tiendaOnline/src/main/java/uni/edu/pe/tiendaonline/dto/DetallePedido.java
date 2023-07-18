package uni.edu.pe.tiendaonline.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DetallePedido {
    private int idPedido;
    private int idProducto;
    private Double precio;
    private int cantidad;
}
