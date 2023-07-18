package uni.edu.pe.tiendaonline.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pedido {
    private int idPedido;
    private int idCliente;
    private String fecha;
    private Double monto;
}
