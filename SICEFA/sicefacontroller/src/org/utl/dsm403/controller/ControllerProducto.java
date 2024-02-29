/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm403.controller;

import java.io.IOException;
import java.util.List;
import org.utl.dsm403.bd.ConnectionMysql;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.Statement;
import java.sql.SQLException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Types;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.utl.dsm403.model.Sucursal;
import org.utl.dsm403.model.Producto;
import org.utl.dsm403.model.Inventario;

public class ControllerProducto {

    public List<Producto> getAllProductos() throws ClassNotFoundException, SQLException {

        //generar consulta 
        String query = "SELECT * FROM v_producto";

        //conectarse a la BD
        ConnectionMysql connMySQL = new ConnectionMysql();
        //abrir la conexion
        Connection conn = connMySQL.open();

        //crear el elemento que llleva la sentencia bd
        PreparedStatement pstmt = conn.prepareStatement(query);

        //se ejecuta la sentencia y recibe el resultado
        ResultSet rs = pstmt.executeQuery();

        List<Producto> listaProductos = new ArrayList<>();

        //se recorre el resultado de la consulta: rs
        while (rs.next()) {

            Producto p = new Producto();
            p.setIdProducto(rs.getInt("idProducto"));
            p.setNombre(rs.getString("nombre"));
            p.setNombreGenerico(rs.getString("nombreGenerico"));
            p.setFormaFarmaceutica(rs.getString("formaFarmaceutica"));
            p.setUnidadMedida(rs.getString("unidadMedida"));
            p.setPresentacion(rs.getString("presentacion"));
            p.setPrincipalIndicacion(rs.getString("principalIndicacion"));
            p.setContraindicaciones(rs.getString("contraindicaciones"));
            p.setConcentracion(rs.getString("concentracion"));
            p.setUnidadesEnvase(rs.getInt("unidadesEnvase"));
            p.setPrecioCompra(rs.getFloat("precioCompra"));
            p.setPrecioVenta(rs.getFloat("precioVenta"));
            p.setFoto(rs.getString("foto"));
            p.setRutaFoto(rs.getString("rutaFoto"));
            p.setCodigoBarras(rs.getString("codigoBarras"));
            p.setEstatus(rs.getInt("estatus"));

            listaProductos.add(p);

        }
        rs.close();
        pstmt.close();
        conn.close();
        connMySQL.close();
        return listaProductos;
    }

    public void delete(Producto e) {
        try {
            //. Generar la consulta
            String query = "UPDATE producto SET estatus=0 WHERE idProducto=" + e.getIdProducto() + ";";
            //conectarse a la BD
            ConnectionMysql objConnMySQL = new ConnectionMysql();
            //abrir la conexion
            Connection conn = objConnMySQL.open();
            //crear el elemento que lleva la sentencia bd
            Statement stmt = conn.createStatement();
            //ejecutar el query
            stmt.execute(query);
        } catch (SQLException ex) {
            Logger.getLogger(ControllerEmpleado.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    public void activar(Producto e) {
        try {
            //. Generar la consulta
            String query = "UPDATE producto SET estatus=1 WHERE idProducto=" + e.getIdProducto() + ";";
            //conectarse a la BD
            ConnectionMysql objConnMySQL = new ConnectionMysql();
            //abrir la conexion
            Connection conn = objConnMySQL.open();
            //crear el elemento que lleva la sentencia bd
            Statement stmt = conn.createStatement();
            
            //ejecutar el query
            stmt.execute(query);
        } catch (SQLException ex) {
            Logger.getLogger(ControllerEmpleado.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    public List<Producto> seleccionar(String val) throws SQLException {

        String query = "SELECT * FROM v_producto where estatus=" + val;

        ConnectionMysql connMySQL = new ConnectionMysql();
        //abrir la conexion
        Connection conn = connMySQL.open();

        //crear el elemento que llleva la sentencia bd
        PreparedStatement pstmt = conn.prepareStatement(query);

        //se ejecuta la sentencia y recibe el resultado
        ResultSet rs = pstmt.executeQuery();

        List<Producto> listaProductos = new ArrayList<>();

        //se recorre el resultado de la consulta: rs
        while (rs.next()) {
            Producto p = new Producto();
            p.setIdProducto(rs.getInt("idProducto"));
            p.setNombre(rs.getString("nombre"));
            p.setNombreGenerico(rs.getString("nombreGenerico"));
            p.setFormaFarmaceutica(rs.getString("formaFarmaceutica"));
            p.setUnidadMedida(rs.getString("unidadMedida"));
            p.setPresentacion(rs.getString("presentacion"));
            p.setPrincipalIndicacion(rs.getString("principalIndicacion"));
            p.setContraindicaciones(rs.getString("contraindicaciones"));
            p.setConcentracion(rs.getString("concentracion"));
            p.setUnidadesEnvase(rs.getInt("unidadesEnvase"));
            p.setPrecioCompra(rs.getFloat("precioCompra"));
            p.setPrecioVenta(rs.getFloat("precioVenta"));
            p.setFoto(rs.getString("foto"));
            p.setRutaFoto(rs.getString("rutaFoto"));
            p.setCodigoBarras(rs.getString("codigoBarras"));
            p.setEstatus(rs.getInt("estatus"));

            listaProductos.add(p);

        }
        rs.close();
        pstmt.close();
        conn.close();
        connMySQL.close();
        return listaProductos;
    }

    public List<Producto> buscar(String valor) throws SQLException {

        List<Producto> listaProductos = new ArrayList<>();

        // Implementa la lógica para buscar por nombre o código aquí
        // Puedes usar una consulta SQL que seleccione empleados que coincidan con el valor proporcionado.
        // Ejemplo:
        String query = "SELECT * FROM v_producto WHERE idProducto LIKE ? OR nombre LIKE ? OR nombreGenerico LIKE ? OR formaFarmaceutica LIKE ?"
                + "OR unidadMedida LIKE ? OR presentacion LIKE ? OR principalIndicacion LIKE ? OR contraindicaciones LIKE ?"
                + "OR concentracion LIKE ? OR unidadesEnvase LIKE ? OR precioCompra LIKE ? OR precioVenta LIKE ?"
                + "OR foto LIKE ? OR rutaFoto LIKE ? OR codigoBarras LIKE ? OR estatus LIKE ?";
        ConnectionMysql connMySQL = new ConnectionMysql();
        //3. Se abre la conexion
        Connection conn = connMySQL.open();

        PreparedStatement stmt = conn.prepareStatement(query);
        stmt.setString(1, "%" + valor + "%");
        stmt.setString(2, "%" + valor + "%");
        stmt.setString(3, "%" + valor + "%");
        stmt.setString(4, "%" + valor + "%");
        stmt.setString(5, "%" + valor + "%");
        stmt.setString(6, "%" + valor + "%");
        stmt.setString(7, "%" + valor + "%");
        stmt.setString(8, "%" + valor + "%");
        stmt.setString(9, "%" + valor + "%");
        stmt.setString(10, "%" + valor + "%");
        stmt.setString(11, "%" + valor + "%");
        stmt.setString(12, "%" + valor + "%");
        stmt.setString(13, "%" + valor + "%");
        stmt.setString(14, "%" + valor + "%");
        stmt.setString(15, "%" + valor + "%");
        stmt.setString(16, "%" + valor + "%");
        ResultSet rs = stmt.executeQuery();

        while (rs.next()) {

//            Usuario u = new Usuario(rs.getInt("idUsuario"),
//                           rs.getString("nombreUsuario"),
//                           rs.getString("contrasenia"),
//                           rs.getString("rol"));
            Producto p = new Producto();
            p.setIdProducto(rs.getInt("idProducto"));
            p.setNombre(rs.getString("nombre"));
            p.setNombreGenerico(rs.getString("nombreGenerico"));
            p.setFormaFarmaceutica(rs.getString("formaFarmaceutica"));
            p.setUnidadMedida(rs.getString("unidadMedida"));
            p.setPresentacion(rs.getString("presentacion"));
            p.setPrincipalIndicacion(rs.getString("principalIndicacion"));
            p.setContraindicaciones(rs.getString("contraindicaciones"));
            p.setConcentracion(rs.getString("concentracion"));
            p.setUnidadesEnvase(rs.getInt("unidadesEnvase"));
            p.setPrecioCompra(rs.getFloat("precioCompra"));
            p.setPrecioVenta(rs.getFloat("precioVenta"));
            p.setFoto(rs.getString("foto"));
            p.setRutaFoto(rs.getString("rutaFoto"));
            p.setCodigoBarras(rs.getString("codigoBarras"));
            p.setEstatus(rs.getInt("estatus"));

            listaProductos.add(p);

        }

        rs.close();
        stmt.close();
        conn.close();
        connMySQL.close();

        return listaProductos;
    }

    public int insert(Producto p) throws SQLException {
        //1.- Generar la sentencia SQL
        String query = "{call insertarProducto(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";    //2.- Crear la conexion a la BD
        ConnectionMysql conMySQL = new ConnectionMysql();
        //3.- Se abre la conexion
        Connection conn = conMySQL.open();
        //4.- Crear un statement que llevara la consulta
        CallableStatement cstm = conn.prepareCall(query);
        //5.- Llenar todos los parametros de la llamada al procedure
        cstm.setString(1, p.getNombre());
        cstm.setString(2, p.getNombreGenerico());
        cstm.setString(3, p.getFormaFarmaceutica());
        cstm.setString(4, p.getUnidadMedida());
        cstm.setString(5, p.getPresentacion());
        cstm.setString(6, p.getPrincipalIndicacion());
        cstm.setString(7, p.getContraindicaciones());
        cstm.setString(8, p.getConcentracion());
        cstm.setInt(9, p.getUnidadesEnvase());
        cstm.setFloat(10, p.getPrecioCompra());
        cstm.setFloat(11, p.getPrecioVenta());
        cstm.setString(12, p.getFoto());
        cstm.setString(13, p.getRutaFoto());
        cstm.setString(14, p.getCodigoBarras());
        cstm.registerOutParameter(15, Types.INTEGER);
        //6.- Ejecutar la sentencia
        cstm.execute();
        //7.- Obtener el parámetro de retorno
        p.setIdProducto(cstm.getInt(15));
        //8.- Cerrar los objetos
        cstm.close();
        conn.close();
        conMySQL.close();
        return p.getIdProducto();
    }

    public int modificar(Producto p) throws SQLException {
        // Generar la sentencia SQL
        String query = "{call modificarProducto(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
//2.- Crear la conexion a la BD
        ConnectionMysql conMySQL = new ConnectionMysql();
        //3.- Se abre la conexion
        Connection conn = conMySQL.open();
        //4.- Crear un statement que llevara la consulta
        CallableStatement cstm = conn.prepareCall(query);
        //5.- Llenar todos los parametros de la llamada al procedure
        cstm.setString(1, p.getNombre());
        cstm.setString(2, p.getNombreGenerico());
        cstm.setString(3, p.getFormaFarmaceutica());
        cstm.setString(4, p.getUnidadMedida());
        cstm.setString(5, p.getPresentacion());
        cstm.setString(6, p.getPrincipalIndicacion());
        cstm.setString(7, p.getContraindicaciones());
        cstm.setString(8, p.getConcentracion());
        cstm.setInt(9, p.getUnidadesEnvase());
        cstm.setFloat(10, p.getPrecioCompra());
        cstm.setFloat(11, p.getPrecioVenta());
        cstm.setString(12, p.getFoto());
        cstm.setString(13, p.getRutaFoto());
        cstm.setString(14, p.getCodigoBarras());
        cstm.setInt(15, p.getIdProducto());
        //6.- Ejecutar la sentencia
        cstm.execute();
        //7.- Obtener el parámetro de retorno

        //8.- Cerrar los objetos
        cstm.close();
        conn.close();
        conMySQL.close();
        return p.getIdProducto();
    }
}
