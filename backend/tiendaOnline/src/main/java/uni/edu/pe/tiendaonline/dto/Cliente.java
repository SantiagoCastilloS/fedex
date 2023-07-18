package uni.edu.pe.tiendaonline.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cliente {
    private int idCliente;
    private String nombre;
    private String apellPat;
    private String apellMat;
    private String direccion;
    private int telefono;
    private String email;
    private String usuario;
    private String pass;
}
