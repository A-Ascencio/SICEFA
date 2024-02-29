/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm403.sicefa.rest;

import com.google.gson.Gson;
import com.mysql.cj.Query;
import jakarta.ws.rs.DefaultValue;
import jakarta.ws.rs.FormParam;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.utl.dsm403.controller.ControllerEmpleado;
import org.utl.dsm403.model.Empleado;
import org.utl.dsm403.model.Sucursal;

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
    
    @Path("delete")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response delete(@QueryParam("idE") @DefaultValue("0") String idE) throws ClassNotFoundException{
        Empleado e = new Empleado();
        e.setIdEmpleado(Integer.parseInt(idE));
        
        ControllerEmpleado objCE = new ControllerEmpleado();
        objCE.delete(e);
        
        String out="""
                 {"result":"ok"}
                 """;
        
        return Response.ok(out).build();
    }
    
    @Path("activar")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response activar(@QueryParam("idE") @DefaultValue("0") String idE) throws ClassNotFoundException{
        Empleado e = new Empleado();
        e.setIdEmpleado(Integer.parseInt(idE));
        
        ControllerEmpleado objCE = new ControllerEmpleado();
        objCE.activar(e);
        
        String out="""
                 {"result":"ok"}
                 """;
        
        return Response.ok(out).build();
    }
    
    @Path("insert")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Response insert(@FormParam("e") @DefaultValue("") String empleado) {
        Gson objGson = new Gson();

        Empleado e = objGson.fromJson(empleado, Empleado.class);

        String out = "";

        ControllerEmpleado objCE = new ControllerEmpleado();
        try {
            int idEmpleadoGenerado = objCE.insert(e);
            out = "{\"result\":\"Empleado insertado exitosamente\"}";
            out = String.format(out, idEmpleadoGenerado);

        } catch (SQLException ex) {
            out = "{\"error\":\"Error al insertar \"}";
        }
        return Response.ok(out).build();
    }
    
    /////desde aqui modifique
    
     @Path("buscar")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response buscar(@QueryParam("valor") String valor) throws ClassNotFoundException {
        ControllerEmpleado objCE = new ControllerEmpleado();
        String out = "";

        try {
            List<Empleado> listaEmpleados = objCE.buscar(valor);
            Gson objGson = new Gson();
            out = objGson.toJson(listaEmpleados);

        } catch (SQLException ex) {
            out = """
                 {"ERROR":"Se Produjo un error en la ejecución"}
                 """;
        }
        return Response.ok(out).build();
    }
   
        
    @Path("seleccionar")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response seleccionar(@QueryParam("val") @DefaultValue("") String val) throws ClassNotFoundException{
        ControllerEmpleado objCE = new ControllerEmpleado();
        String out="";
        try{
        List<Empleado> listaEmpleados = objCE.seleccionar(val);
        Gson objGson = new Gson();
        out = objGson.toJson(listaEmpleados);
        }catch (SQLException ex) {
            
        }
        return Response.ok(out).build();
        
    }
    
    @Path("getAllSucursal")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response GetAllSucursales(){
         String out="";  
        try {
            ControllerEmpleado objCE = new ControllerEmpleado();
           
            List<Sucursal> listaSuc = objCE.getAllSucursal();
            Gson objGson = new Gson();
            out = objGson.toJson(listaSuc);
            
        } catch (SQLException ex) {
            
            out = """
                 {"error":"No se pudo cargar la informacion"}
                 """;
            
        }
       return Response.ok(out).build();
    }
    
    
    @Path("update")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Response update(@FormParam("e")  @DefaultValue("0") String empleado) {
        Gson objGson = new Gson();
        Empleado e = objGson.fromJson(empleado, Empleado.class);

        String out;
        ControllerEmpleado objCE = new ControllerEmpleado();

        try {
            int resultado = objCE.update(e);

            if (resultado > 0) {
                out = "{\"result\":\"Empleado actualizado exitosamente\"}";
            } else {
                out = "{\"error\":\"No se encontró el empleado a actualizar\"}";
            }

        } catch (SQLException | ClassNotFoundException | IOException ex) {
            out = "{\"result\":\"Error al actualizar el empleado: " + ex.getMessage() + "\"}";
        }

        return Response.ok(out).build();
    }
    
}
