package uni.edu.pe.tiendaonline.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DetalleCompra {
    private String nombre;
    private String apellPat;
    private String apellMat;
    private String fecha;
    private String nombreP;
    private Double precio;
    private String nombreM;
    private String nombreC;
}
