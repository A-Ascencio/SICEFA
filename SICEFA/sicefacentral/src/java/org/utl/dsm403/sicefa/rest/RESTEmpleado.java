/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm403.sicefa.rest;

import com.google.gson.Gson;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.utl.dsm403.controller.ControllerEmpleado;
import org.utl.dsm403.model.Empleado;

/**
 *
 * @author pezca
 */
@Path("empleado")
public class RESTEmpleado {
    @Path("getAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() throws ClassNotFoundException{
        ControllerEmpleado objCE = new ControllerEmpleado();
        String out="";
        try {
            List<Empleado> listaEmpleados = objCE.getAll();
            Gson objGson = new Gson();
            out = objGson.toJson(listaEmpleados);
            
        } 
        catch (SQLException ex) {
           out = """
                 {"ERROR":"Se Produjo un error en la ejecucion"}
                 """;
        }
        return Response.ok(out).build();
        
    }
    
}
