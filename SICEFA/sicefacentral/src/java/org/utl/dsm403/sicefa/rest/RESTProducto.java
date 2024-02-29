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
import org.utl.dsm403.controller.ControllerProducto;
import org.utl.dsm403.model.Inventario;
import org.utl.dsm403.model.Producto;
import org.utl.dsm403.model.Sucursal;

    @Path("producto")
public class RESTProducto {
    @Path("getAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() throws ClassNotFoundException{
        ControllerProducto objCE = new ControllerProducto();
        String out="";
        try {
            List<Producto> listaProductos = objCE.getAllProductos();
            Gson objGson = new Gson();
            out = objGson.toJson(listaProductos);
            
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
        Producto e = new Producto();
        e.setIdProducto(Integer.parseInt(idE));
        
        ControllerProducto objCE = new ControllerProducto();
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
        Producto e = new Producto();
        e.setIdProducto(Integer.parseInt(idE));
        
        ControllerProducto objCE = new ControllerProducto();
        objCE.activar(e);
        
        String out="""
                 {"result":"ok"}
                 """;
        
        return Response.ok(out).build();
    }
    
    @Path("buscar")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response buscar(@QueryParam("valor") String valor) throws ClassNotFoundException {
        ControllerProducto objCE = new ControllerProducto();
        String out = "";

        try {
            List<Producto> listaProductos = objCE.buscar(valor);
            Gson objGson = new Gson();
            out = objGson.toJson(listaProductos);

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
        ControllerProducto objCE = new ControllerProducto();
        String out="";
        try{
        List<Producto> listaProductos = objCE.seleccionar(val);
        Gson objGson = new Gson();
        out = objGson.toJson(listaProductos);
        }catch (SQLException ex) {
            
        }
        return Response.ok(out).build();
        
    }
    
     @Path("insert")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Response insert(@FormParam("p") @DefaultValue("") String producto) {
        Gson objGson = new Gson();

        Producto p = objGson.fromJson(producto, Producto.class);

        String out = "";

        ControllerProducto objCE = new ControllerProducto();
        try {
            int idProductoGenerado = objCE.insert(p);
            out = "{\"result\":\"Empleado insertado exitosamente\"}";
            out = String.format(out, idProductoGenerado);

        } catch (SQLException ex) {
            out = "{\"error\":\"Error al insertar \"}";
        }
        return Response.ok(out).build();
    }
    
    @Path("modificar")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Response modificar(@FormParam("p") @DefaultValue("") String producto){
        Gson objGson = new Gson();
        //System.out.println("Impreso"+empleado);
        Producto p= objGson.fromJson(producto, Producto.class);
        
        String out="";
        
        ControllerProducto objCE= new ControllerProducto();
        try{
            int idProductoModificado=objCE.modificar(p);
            out="""
                 {"result":"Producto modificado exitosamente con id %s" }
               
                """;
            out= String.format(out, idProductoModificado);
        }catch(SQLException ex){
            System.out.println(p);
            ex.printStackTrace();
            out="""
                 {"error":"Error al modificar el producto" }
               
                """;
        }
        return Response.ok(out).build();
    }
}
