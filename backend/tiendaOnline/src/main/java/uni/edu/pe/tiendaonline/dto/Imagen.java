package uni.edu.pe.tiendaonline.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Imagen {
    private int idImagen;
    private String nombreI;
    private String urlImg;
}
