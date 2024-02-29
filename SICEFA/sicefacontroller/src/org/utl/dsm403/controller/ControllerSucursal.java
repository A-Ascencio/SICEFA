/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm403.controller;

import com.mysql.cj.jdbc.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.utl.dsm403.bd.ConnectionMysql;
import org.utl.dsm403.model.Sucursal;

/**
 *
 * @author Miriam1 Granados
 */
public class ControllerSucursal {

    public List<Sucursal> getAllSucursal() throws SQLException, ClassNotFoundException {
        List<Sucursal> listaSucursales = new ArrayList<>();
        ConnectionMysql connMysql = new ConnectionMysql();

        //1. Crear la sentencia SQL
        String query = "SELECT * FROM sucursal";
        //2. Se establece la conexion con la BD
        ConnectionMysql connMySQL = new ConnectionMysql();
        //3. Se abre la conexion
        Connection conn = connMySQL.open();
        //4. Se genera el statement para enviar la consulta
        PreparedStatement pstmt = conn.prepareStatement(query);
        //5. Se prepara un ResultSet para obtener la respuesta de la BD
        ResultSet rs = pstmt.executeQuery();
        //6. Recorrer el rs y extraer los datos

        while (rs.next()) {
            Sucursal s = new Sucursal();
            s.setIdSucursal(rs.getInt("idSucursal"));
            s.setNombre(rs.getString("nombre"));
            s.setTitular(rs.getString("titular"));
            s.setCiudad(rs.getString("ciudad"));
            s.setCodigoPostal(rs.getString("codigoPostal"));
            s.setColonia(rs.getString("colonia"));
            s.setDomicilio(rs.getString("domicilio"));
            s.setEstado(rs.getString("estado"));
            s.setEstatus(rs.getInt("estatus"));
            s.setLatitud(rs.getString("latitud"));
            s.setLongitud(rs.getString("longitud"));
            s.setRfc(rs.getString("rfc"));
            s.setTelefono(rs.getString("telefono"));

            listaSucursales.add(s);
        }

        //7. Cerrar todos los objetos
        rs.close();
        pstmt.close();
        conn.close();
        connMysql.close();

        //8. Devolver la informacion
        return listaSucursales;
    }

    public void deleteSuc(Sucursal s) throws ClassNotFoundException {
        try {
            //1. generar la consulta
            String query = "UPDATE sucursal SET estatus = 0 WHERE idSucursal=" + s.getIdSucursal() + ";";
            //2.Generar la conexion con la BD
            ConnectionMysql connMysql = new ConnectionMysql();
            //abrir la conexion
            Connection conn = connMysql.open();
            //crear objeto que lleva la sentencia - Statement
            Statement stmt = conn.createStatement();
            //5.Ejecutar la query
            stmt.execute(query);
        } catch (SQLException ex) {
            Logger.getLogger(ControllerEmpleado.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    public void activarSuc(Sucursal s) throws ClassNotFoundException {
        try {
            //1. generar la consulta
            String query = "UPDATE sucursal SET estatus = 1 WHERE idSucursal=" + s.getIdSucursal() + ";";
            //2.Generar la conexion con la BD
            ConnectionMysql connMysql = new ConnectionMysql();
            //abrir la conexion
            Connection conn = connMysql.open();
            //crear objeto que lleva la sentencia - Statement
            Statement stmt = conn.createStatement();
            //5.Ejecutar la query
            stmt.execute(query);
        } catch (SQLException ex) {
            Logger.getLogger(ControllerEmpleado.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public int insertarSucursal(Sucursal s) throws SQLException, ClassNotFoundException {
        String query = "{call insertarSucursal(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
        ConnectionMysql connMysql = new ConnectionMysql();
        // se abre la conexion
        Connection conn = connMysql.open();
        // crear el steatment  que llevara la consulta
        CallableStatement cstm = (CallableStatement) conn.prepareCall(query);
        //llenar todos los parametros de la llamada al procedure
        cstm.setString(1, s.getNombre());
        cstm.setString(2, s.getTitular());
        cstm.setString(3, s.getRfc());
        cstm.setString(4, s.getDomicilio());
        cstm.setString(5, s.getColonia());
        cstm.setString(6, s.getCodigoPostal());
        cstm.setString(7, s.getCiudad());
        cstm.setString(8, s.getEstado());
        cstm.setString(9, s.getTelefono());
        cstm.setString(10, s.getLatitud());
        cstm.setString(11, s.getLongitud());

        cstm.registerOutParameter(12, Types.INTEGER);  // var_idSucursal
        cstm.registerOutParameter(13, Types.INTEGER);  // var_idUsuario
        cstm.registerOutParameter(14, Types.VARCHAR);  // var_nombreUsuario
        cstm.registerOutParameter(15, Types.VARCHAR);  // var_contrasenia

        cstm.execute();
        
        s.setIdSucursal(cstm.getInt(12));
        int idUsuario = cstm.getInt(13);
        String nombreUsuario = cstm.getString(14);
        String contrasenia = cstm.getString(15);

        cstm.close();
        conn.close();
        connMysql.close();
        return s.getIdSucursal();
    }
    
    public int updateSucursal(Sucursal s) throws SQLException, ClassNotFoundException{
        String query = "{call modificarSucursal(?,?,?,?,?,?,?,?,?,?,?,?)}";
         ConnectionMysql connMysql = new ConnectionMysql();
        // se abre la conexion
        Connection conn = connMysql.open();
        // crear el steatment  que llevara la consulta
        CallableStatement cstm =  (CallableStatement) conn.prepareCall(query);
        //llenar todos los parametros de la llamada al procedure
        cstm.setInt(1, s.getIdSucursal());
        cstm.setString(2, s.getNombre());
        cstm.setString(3, s.getTitular());
        cstm.setString(4, s.getRfc());
        cstm.setString(5, s.getDomicilio());
        cstm.setString(6, s.getColonia());
        cstm.setString(7, s.getCodigoPostal());
        cstm.setString(8, s.getCiudad());
        cstm.setString(9, s.getEstado());
        cstm.setString(10, s.getTelefono());
        cstm.setString(11, s.getLatitud());
        cstm.setString(12, s.getLongitud());
        
        cstm.execute();
        
        cstm.close();
        conn.close();
        connMysql.close();
        
        return s.getIdSucursal();
        
    }
}
