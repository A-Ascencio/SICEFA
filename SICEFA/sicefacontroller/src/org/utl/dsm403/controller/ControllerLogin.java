/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm403.controller;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.utl.dsm403.bd.ConnectionMysql;
import java.sql.Statement;
import org.utl.dsm403.model.Usuario;

/**
 *
 * @author pezca
 */
public class ControllerLogin {

    public Usuario logIn(String nombreUsuario, String contrasenia) throws SQLException {
        String query = "SELECT * FROM vista_usuario_sucursal2 WHERE nombreUsuario=\"" + nombreUsuario + "\" AND contrasenia=\"" + contrasenia + "\";";
        ConnectionMysql connMySQL = new ConnectionMysql();
        Connection objConn = connMySQL.open();
        Statement stmt = objConn.createStatement();
        ResultSet rs = stmt.executeQuery(query);
        Usuario u = new Usuario();
        if (rs.next()) {
            u.setContrasenia(rs.getString("contrasenia"));
            u.setIdUsuario(rs.getInt("idUsuario"));
            u.setNombreUsuario(rs.getString("nombreUsuario"));
            u.setRol(rs.getString("rol"));
            u.setIdSucursal(rs.getInt("idSucursal"));

        } else {
            u.setContrasenia("");
            u.setIdUsuario(0);
            u.setNombreUsuario("");
            u.setRol("Error");
        }
        rs.close();
        stmt.close();
        objConn.close();
        connMySQL.close();

        return u;
    }

    
}
