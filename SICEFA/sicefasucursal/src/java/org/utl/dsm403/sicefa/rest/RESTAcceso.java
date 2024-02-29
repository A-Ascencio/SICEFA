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
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.utl.dsm403.controller.ControllerLogin;
import org.utl.dsm403.model.Usuario;

/**
 *
 * @author pezca
 */
@Path("acesso")
public class RESTAcceso {

    @Path("login")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(@FormParam("u") @DefaultValue("") String u, @FormParam("c") @DefaultValue("") String c) {
        String out = "";

        Usuario us = null;
        Gson gson = new Gson();
        try {

            ControllerLogin ca = new ControllerLogin();
            us = ca.logIn(u, c);
            out = gson.toJson(us);
        } catch (SQLException ex) {
            Logger.getLogger(RESTAcceso.class.getName()).log(Level.SEVERE, null, ex);
            out = """
                {'Error':'Hubo un problema al acceder'}
                """;
        }
        return Response.ok(out).build();
    }
}
