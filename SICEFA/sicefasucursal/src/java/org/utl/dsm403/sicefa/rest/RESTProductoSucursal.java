/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm403.sicefa.rest;

import com.google.gson.Gson;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.sql.SQLException;
import java.util.List;
import org.utl.dsm403.controller.ControllerProductoSucursal;
import org.utl.dsm403.model.Producto;
import org.utl.dsm403.model.Inventario;
import org.utl.dsm403.model.Sucursal;


@Path("productoSuc")
public class RESTProductoSucursal {
    @Path("getAllProductoSuc")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() throws ClassNotFoundException{
        ControllerProductoSucursal objCE = new ControllerProductoSucursal();
        String out="";
        try {
            List<Inventario> listaProductos = objCE.getAllProductoSuc();
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
    
    @Path("getAllProductoSuc1")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll1() throws ClassNotFoundException{
        ControllerProductoSucursal objCE = new ControllerProductoSucursal();
        String out="";
        try {
            List<Inventario> listaProductos = objCE.getAllProductoSuc1();
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
    
    @Path("getAllProductoSuc2")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll2() throws ClassNotFoundException{
        ControllerProductoSucursal objCE = new ControllerProductoSucursal();
        String out="";
        try {
            List<Inventario> listaProductos = objCE.getAllProductoSuc2();
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
    
    @Path("getAllProductoSuc3")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll3() throws ClassNotFoundException{
        ControllerProductoSucursal objCE = new ControllerProductoSucursal();
        String out="";
        try {
            List<Inventario> listaProductos = objCE.getAllProductoSuc3();
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
    
    @Path("buscar")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response buscar(@QueryParam("valor") String valor) throws ClassNotFoundException {
        ControllerProductoSucursal objCE = new ControllerProductoSucursal();
        String out = "";

        try {
            List<Inventario> listaEmpleados = objCE.buscar(valor);
            Gson objGson = new Gson();
            out = objGson.toJson(listaEmpleados);

        } catch (SQLException ex) {
            out = """
                 {"ERROR":"Se Produjo un error en la ejecución"}
                 """;
        }
        return Response.ok(out).build();
    }
    
    @Path("buscar1")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response buscar1(@QueryParam("valor") String valor) throws ClassNotFoundException {
        ControllerProductoSucursal objCE = new ControllerProductoSucursal();
        String out = "";

        try {
            List<Inventario> listaEmpleados = objCE.buscar1(valor);
            Gson objGson = new Gson();
            out = objGson.toJson(listaEmpleados);

        } catch (SQLException ex) {
            out = """
                 {"ERROR":"Se Produjo un error en la ejecución"}
                 """;
        }
        return Response.ok(out).build();
    }
    
    @Path("buscar2")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response buscar2(@QueryParam("valor") String valor) throws ClassNotFoundException {
        ControllerProductoSucursal objCE = new ControllerProductoSucursal();
        String out = "";

        try {
            List<Inventario> listaEmpleados = objCE.buscar2(valor);
            Gson objGson = new Gson();
            out = objGson.toJson(listaEmpleados);

        } catch (SQLException ex) {
            out = """
                 {"ERROR":"Se Produjo un error en la ejecución"}
                 """;
        }
        return Response.ok(out).build();
    }
    
    @Path("buscar3")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response buscar3(@QueryParam("valor") String valor) throws ClassNotFoundException {
        ControllerProductoSucursal objCE = new ControllerProductoSucursal();
        String out = "";

        try {
            List<Inventario> listaEmpleados = objCE.buscar3(valor);
            Gson objGson = new Gson();
            out = objGson.toJson(listaEmpleados);

        } catch (SQLException ex) {
            out = """
                 {"ERROR":"Se Produjo un error en la ejecución"}
                 """;
        }
        return Response.ok(out).build();
    }
}
