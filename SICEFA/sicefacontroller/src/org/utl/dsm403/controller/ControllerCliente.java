/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm403.controller;

import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;
import org.utl.dsm403.bd.ConnectionMysql;
import org.utl.dsm403.model.Cliente;
import org.utl.dsm403.model.Persona;

/**
 *
 * @author ascen
 */
public class ControllerCliente {

    public List<Cliente> getAll() throws SQLException, ClassNotFoundException, IOException {
        //genera la cnsulta 
        String query = "SELECT * FROM vista_cliente;";

        //conexion con la bd
        ConnectionMysql connMysql = new ConnectionMysql();
        //abre la conexion 
        Connection conn = connMysql.open();
        
        PreparedStatement pstmt = conn.prepareStatement(query);
        //se ejecuta la sentencia y se recibe el resultado
        ResultSet rs = pstmt.executeQuery();

        List<Cliente> clientes = new ArrayList<>();
        //se recorre el resultado de la consulta - rs
        while (rs.next()) {
            
            Persona p = new Persona(rs.getInt("idPersona"),rs.getString("nombre"),rs.getString("apellidoPaterno"),
            rs.getString("apellidoMaterno"),rs.getString("genero"),rs.getString("fechaNacimiento"),rs.getString("rfc"),
            rs.getString("curp"),rs.getString("domicilio"),rs.getString("codigoPostal"),rs.getString("ciudad"),rs.getString("estado"),
            rs.getString("telefono"),rs.getString("foto"));

            Cliente c = new Cliente();
            c.setEstatus(rs.getInt("estatus"));
            c.setEmail(rs.getString("email"));
            c.setFechaRegistro(rs.getString("fechaRegistro"));
            c.setIdCliente(rs.getInt("idCliente"));
            c.setPersona(p);
            clientes.add(c);
        }
        rs.close();
        pstmt.close();
        conn.close();
        connMysql.close();
        return clientes;
    }
    public void delete(Cliente c){
        try {
            String query="UPDATE cliente SET estatus=0 WHERE idCliente="+c.getIdCliente()+";";
            
            //conexion con la bd
            ConnectionMysql objConnMySql = new ConnectionMysql();
            
            //abre la conexion
            Connection conn = objConnMySql.open();
            
            Statement stmt = conn.createStatement();
            
            stmt.execute(query);
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
    }
    public void activar(Cliente c){
        try {
            String query="UPDATE cliente SET estatus=1 WHERE idCliente="+c.getIdCliente()+";";
            
            //conexion con la bd
            ConnectionMysql objConnMySql = new ConnectionMysql();
            
            //abre la conexion
            Connection conn = objConnMySql.open();
            
            Statement stmt = conn.createStatement();
            
            stmt.execute(query);
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
    }
    
     public int insert (Cliente c) throws SQLException{
        String query="{call insertarCliente(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
        ConnectionMysql conMysql=new ConnectionMysql();
        Connection conn = conMysql.open();
        CallableStatement cstm= conn.prepareCall(query);
        
        cstm.setString(1, c.getPersona().getNombre());
        cstm.setString(2, c.getPersona().getApellidoPaterno());
        cstm.setString(3, c.getPersona().getApellidoMaterno());
        cstm.setString(4, c.getPersona().getGenero());
        cstm.setString(5, c.getPersona().getFechaNacimiento());
        cstm.setString(6, c.getPersona().getRfc());
        cstm.setString(7, c.getPersona().getCurp());
        cstm.setString(8, c.getPersona().getDomicilio());
        cstm.setString(9, c.getPersona().getCodigoPostal());
        cstm.setString(10, c.getPersona().getCiudad());
        cstm.setString(11, c.getPersona().getEstado());
        cstm.setString(12, c.getPersona().getTelefono());
        cstm.setString(13, c.getPersona().getFoto());
        
        cstm.setString(14, c.getEmail());
        
        cstm.setString(15, c.getFechaRegistro());
        cstm.setInt(16, c.getEstatus());
        
        cstm.registerOutParameter(17, Types.INTEGER);
        cstm.registerOutParameter(18, Types.INTEGER);
        
        cstm.execute();
        
        c.getPersona().setIdPersona(cstm.getInt(17));
        c.setIdCliente(cstm.getInt(18)); 
        
        cstm.close();
        conn.close();
        conMysql.close();
        
        return c.getIdCliente();
        
    }
     
     public int update(Cliente c) throws ClassNotFoundException, SQLException, IOException {
        //1. Generar la sentencia SQL
        String query = "{call modificarCliente(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
         //2. Crear la conexión a la BD
        ConnectionMysql conMySQL = new ConnectionMysql();
        //3. Se abre la conexión
        Connection conn = conMySQL.open();
        //4. Crear el statement que llevara la consulta
        CallableStatement cstm = conn.prepareCall(query);
        //5. LLenar todos los parametros de la llamada al Procedure
        cstm.setInt(1, c.getIdCliente());
        cstm.setString(2, c.getPersona().getNombre());
        cstm.setString(3, c.getPersona().getApellidoPaterno());
        cstm.setString(4, c.getPersona().getApellidoMaterno());
        cstm.setString(5, c.getPersona().getGenero());
        cstm.setString(6, c.getPersona().getFechaNacimiento());
        cstm.setString(7, c.getPersona().getRfc());
        cstm.setString(8, c.getPersona().getCurp());
        cstm.setString(9, c.getPersona().getDomicilio());
        cstm.setString(10,c.getPersona().getCodigoPostal());
        cstm.setString(11, c.getPersona().getCiudad());
        cstm.setString(12, c.getPersona().getEstado());
        cstm.setString(13, c.getPersona().getTelefono());
        cstm.setString(14, c.getPersona().getFoto());

        cstm.setString(15, c.getEmail());
        cstm.setString(16, c.getFechaRegistro());
        cstm.setInt(17, c.getEstatus());
        cstm.setInt(18, c.getPersona().getIdPersona());

        //6. Ejecutar la sentencia
        cstm.execute();
        //8. Cerrar los objetos
        cstm.close();
        conn.close();
        conMySQL.close();

        return c.getIdCliente();
    }
    
    public List<Cliente> buscar(String valor) throws SQLException {
        
        
        List<Cliente> listaClientes = new ArrayList<>();

        // Implementa la lógica para buscar por nombre o código aquí
        // Puedes usar una consulta SQL que seleccione empleados que coincidan con el valor proporcionado.
        // Ejemplo:
       String query = "SELECT * FROM vista_cliente WHERE nombre LIKE ? OR apellidoPaterno LIKE ? OR apellidoMaterno LIKE ?" +
               " OR genero LIKE ? OR fechaNacimiento LIKE ? OR rfc LIKE ? OR curp LIKE ?" +
               " OR domicilio LIKE ? OR codigoPostal LIKE ? OR ciudad LIKE ? OR estado LIKE ?" +
               " OR telefono LIKE ? OR email LIKE ? OR fechaRegistro LIKE ?";
ConnectionMysql connMySQL = new ConnectionMysql();

// Abre la conexión
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

ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                
                Persona p = new Persona();
                p.setIdPersona(rs.getInt("idPersona"));
                p.setNombre(rs.getString("nombre"));
                p.setApellidoPaterno(rs.getString("apellidoPaterno"));
                p.setApellidoMaterno(rs.getString("apellidoMaterno"));
                p.setGenero(rs.getString("genero"));
                p.setFechaNacimiento(rs.getString("fechaNacimiento"));
                p.setRfc(rs.getString("rfc"));
                p.setCurp(rs.getString("curp"));
                p.setDomicilio(rs.getString("domicilio"));
                p.setCodigoPostal(rs.getString("codigoPostal"));
                p.setCiudad(rs.getString("ciudad"));
                p.setEstado(rs.getString("estado"));
                p.setTelefono(rs.getString("telefono"));
                p.setFoto(rs.getString("foto"));

                Cliente c = new Cliente();
                c.setIdCliente(rs.getInt("idCliente"));
                c.setEmail(rs.getString("email"));
                c.setFechaRegistro(rs.getString("fechaRegistro"));
                c.setEstatus(rs.getInt("estatus"));
                c.setPersona(p);

                listaClientes.add(c);
            }
        
        
        rs.close();
        stmt.close();
        conn.close();
        connMySQL.close();

        return listaClientes;
    }
    
    public List<Cliente> seleccionar(String val) throws SQLException {
        
        String query = "SELECT * FROM vista_cliente where estatus="+val;
        
        ConnectionMysql connMySQL = new ConnectionMysql();
        //abrir la conexion
        Connection conn = connMySQL.open();

        //crear el elemento que llleva la sentencia bd
        PreparedStatement pstmt = conn.prepareStatement(query);

        //se ejecuta la sentencia y recibe el resultado
        ResultSet rs = pstmt.executeQuery();

        List<Cliente> lista = new ArrayList<>();

        //se recorre el resultado de la consulta: rs
        while (rs.next()) {

//            Usuario u = new Usuario(rs.getInt("idUsuario"),
//                           rs.getString("nombreUsuario"),
//                           rs.getString("contrasenia"),
//                           rs.getString("rol"));

            Persona p = new Persona();
            p.setIdPersona(rs.getInt("idPersona"));
            p.setNombre(rs.getString("nombre"));
            p.setApellidoMaterno(rs.getString("apellidoPaterno"));
            p.setApellidoPaterno(rs.getString("apellidoMaterno"));
            p.setGenero(rs.getString("genero"));
            p.setFechaNacimiento(rs.getString("fechaNacimiento"));
            p.setRfc(rs.getString("rfc"));
            p.setCurp(rs.getString("curp"));
            p.setDomicilio(rs.getString("domicilio"));
            p.setCodigoPostal(rs.getString("codigoPostal"));
            p.setCiudad(rs.getString("ciudad"));
            p.setEstado(rs.getString("estado"));
            p.setTelefono(rs.getString("telefono"));
            p.setFoto(rs.getString("foto"));

            Cliente c = new Cliente();
            c.setIdCliente(rs.getInt("idCliente"));
            c.setEmail(rs.getString("email"));
            c.setFechaRegistro(rs.getString("fechaRegistro"));
            c.setEstatus(rs.getInt("estatus"));
            c.setPersona(p);

            lista.add(c);
        }
        rs.close();
        pstmt.close();
        conn.close();
        connMySQL.close();
        return lista;
    }
    
}
