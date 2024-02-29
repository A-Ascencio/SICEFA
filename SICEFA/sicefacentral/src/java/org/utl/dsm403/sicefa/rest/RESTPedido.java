package org.utl.dsm403.sicefa.rest;

import com.google.gson.Gson;
import jakarta.ws.rs.DefaultValue;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import java.sql.SQLException;
import java.util.List;
import jakarta.ws.rs.core.Response;
import java.io.IOException;
import org.utl.dsm403.controller.ControllerPedidos;
import org.utl.dsm403.model.Compras;

@Path("pedido")
public class RESTPedido {

    @Path("getAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() throws ClassNotFoundException, IOException {
        String out = " ";
        try {
            ControllerPedidos objCE = new ControllerPedidos();
            List<Compras> listaCompra = objCE.getAllCompras();
            Gson objGson = new Gson();
            out = objGson.toJson(listaCompra);

        } catch (SQLException ex) {

            out = "{\"error\":\"Se produjo un error en la ejecucion\"}";
//out = ex.getMessage();
        }
        return Response.ok(out).build();
    }

    @Path("atendido")
@GET
@Produces(MediaType.APPLICATION_JSON)
public Response atendido(@QueryParam("idCompra") int idCompra) throws ClassNotFoundException, IOException, SQLException {
    String out = "";
    try {
        ControllerPedidos objCP = new ControllerPedidos();

        // Llamar al método para actualizar el estado y obtener el resultado
        boolean actualizacionExitosa = objCP.actualizarStatus(idCompra);

        // Crear una respuesta con el JSON de resultado
        if (actualizacionExitosa) {
            out = "{\"result\":\"Operación exitosa \"}";
        }else{
            out = "{\"result\":false}";
        }
    } catch (SQLException ex) {
        //ex.printStackTrace();
        //out = ex.getMessage();
        out = "{\"result\":false}";
    }
    return Response.ok(out).build();
}


}
