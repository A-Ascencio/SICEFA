/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm403.sicefa.rest;

import com.google.gson.Gson;
import jakarta.ws.rs.DefaultValue;
import jakarta.ws.rs.FormParam;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.utl.dsm403.controller.ControllerCliente;
import org.utl.dsm403.model.Cliente;

/**
 *
 * @author ascen
 */

@Path("cliente")
public class RESTCliente {
    @Path("getAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() {
        String out = "";
        try {
            ControllerCliente objCc = new ControllerCliente();
            List<Cliente> listaCliente = objCc.getAll();

            Gson objGson = new Gson();
            out = objGson.toJson(listaCliente);

        } catch (SQLException ex) {
            out = "{\"error\":\"Se produjo un error en la ejecucion\"}";
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(RESTCliente.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(RESTCliente.class.getName()).log(Level.SEVERE, null, ex);
        }
        return Response.ok(out).build();
    }
    @Path("delete")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response delete(@QueryParam("idCliente") @DefaultValue("0") String idCliente) throws ClassNotFoundException {
        Cliente c = new Cliente();
        c.setIdCliente(Integer.parseInt(idCliente));
        ControllerCliente objCc = new ControllerCliente();
        objCc.delete(c);
        String out = "{\"result\":\"Cliente Desactivado con Éxito\"}";
        return Response.ok(out).build();
    }
    
    @Path("activar")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response activar(@QueryParam("idCliente") @DefaultValue("0") String idCliente) throws ClassNotFoundException {
        Cliente c = new Cliente();
        c.setIdCliente(Integer.parseInt(idCliente));
        ControllerCliente objCE = new ControllerCliente();
        objCE.activar(c);
        String out = "{\"result\":\"Cliente Activado con Éxito\"}";
        return Response.ok(out).build();
    }
    
    @Path("insert")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Response insert(@FormParam("c") @DefaultValue("") String cliente) {
        Gson objGson = new Gson();

        Cliente c = objGson.fromJson(cliente, Cliente.class);

        String out = "";

        ControllerCliente objCc = new ControllerCliente();
        try {
            int idClienteGenerado = objCc.insert(c);
            out = "{\"result\":\"Cliente insertado exitosamente\"}";
            out = String.format(out, idClienteGenerado);

        } catch (SQLException ex) {
            out = "{\"error\":\"Error al insertar \"}";
        }
        return Response.ok(out).build();
    }
    
    @Path("update")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Response update(@FormParam("c")  @DefaultValue("0") String cliente) {
        Gson objGson = new Gson();
        Cliente c = objGson.fromJson(cliente, Cliente.class);

        String out;
        ControllerCliente objCc = new ControllerCliente();

        try {
            int resultado = objCc.update(c);

            if (resultado > 0) {
                out = "{\"result\":\"Cliente actualizado con Éxito\"}";
            } else {
                out = "{\"error\":\"No se encontró el empleado a actualizar\"}";
            }

        } catch (SQLException | ClassNotFoundException | IOException ex) {
            out = "{\"error\":\"Hubo un error al actualizar el cliente: " + ex.getMessage() + "\"}";
        }

        return Response.ok(out).build();
    }
    
    
     @Path("buscar")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response buscar(@QueryParam("valor") String valor) throws ClassNotFoundException {
        ControllerCliente objCC = new ControllerCliente();
        String out = "";

        try {
            List<Cliente> listaClientes = objCC.buscar(valor);
            Gson objGson = new Gson();
            out = objGson.toJson(listaClientes);

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
        ControllerCliente objCC = new ControllerCliente();
        String out="";
        try{
        List<Cliente> listaClientes = objCC.seleccionar(val);
        Gson objGson = new Gson();
        out = objGson.toJson(listaClientes);
        }catch (SQLException ex) {
            
        }
        return Response.ok(out).build();
        }
    
}
