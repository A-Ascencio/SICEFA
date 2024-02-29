package org.utl.dsm403.controller;

import java.io.IOException;
import java.util.List;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import org.utl.dsm403.bd.ConnectionMysql;
import org.utl.dsm403.model.Compras;
import org.utl.dsm403.model.Empleado;
import org.utl.dsm403.model.Persona;
import org.utl.dsm403.model.Sucursal;

/**
 *
 * @author diego
 */
public class ControllerPedidos {

    public List<Compras> getAllCompras() throws ClassNotFoundException, IOException, SQLException {
        
        // Generate the query
        String query = "SELECT * FROM vista_control_pedidos";

        // Establish a connection to the database
        ConnectionMysql connMySQL = new ConnectionMysql();
        Connection conn = connMySQL.open();

        PreparedStatement pstmt = conn.prepareStatement(query);

        // Execute the query and get the result set
        ResultSet rs = pstmt.executeQuery();

        List<Compras> compras = new ArrayList<>();

        // Iterate through the result set
        while (rs.next()) {

            Sucursal sucursal = new Sucursal();
            sucursal.setNombre(rs.getString("nombreSucursal"));
            sucursal.setCodigoPostal(rs.getString("codigoPostalSucursal"));
            sucursal.setCiudad(rs.getString("ciudadSucursal"));
            sucursal.setEstado(rs.getString("estadoSucursal"));

            Persona p = new Persona();
            p.setNombre(rs.getString("nombreEmpleado"));
            Empleado e = new Empleado();
            e.setSucursal(sucursal);
            e.setPersona(p);

            Compras c = new Compras();
            c.setIdCompra(rs.getInt("idCompra"));
            c.setFechaHoraPedido(rs.getString("fecha"));
            c.setEmpleado(e);
            c.setEstatus(rs.getInt("estatus"));
            c.settotalPedido(rs.getDouble("totalPedido"));
            c.setNombreProducto(rs.getString("nombreProducto"));
            compras.add(c);
        }

        // Close resources
        rs.close();
        pstmt.close();
        conn.close();
        connMySQL.close();

        return compras;
    }
    
    public boolean actualizarStatus(int idCompra) throws ClassNotFoundException, IOException, SQLException {
       
        ConnectionMysql connMySQL = new ConnectionMysql();
        Connection conn = connMySQL.open();
        
        PreparedStatement pstmt = conn.prepareStatement("CALL actualizarAtendido(?)");
        
        // Establece el parámetro en el PreparedStatement
        pstmt.setInt(1, idCompra);

        // Ejecuta la actualización, no necesitas un ResultSet ya que es un procedimiento almacenado
        pstmt.executeUpdate();
        
        pstmt.close();
        conn.close();
        connMySQL.close();
       
        return true;
    }


}
