package uni.edu.pe.tiendaonline.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Producto {
    private int idProducto;
    private String nombreP;
    private String descripcion;
    private Double precio;
    private Marca marca;
    private Categoria categoria;
    private Imagen imagen;
}
