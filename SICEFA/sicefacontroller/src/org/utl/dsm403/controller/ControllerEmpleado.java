/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm403.controller;

import java.io.IOException;
import java.util.List;
import org.utl.dsm403.model.Empleado;
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
import org.utl.dsm403.model.Persona;
import org.utl.dsm403.model.Sucursal;
import org.utl.dsm403.model.Usuario;

/**
 *
 * @author pezca
 */
public class ControllerEmpleado {

    public List<Empleado> getAll() throws ClassNotFoundException, SQLException {

        //generar consulta 
        String query = "SELECT * FROM v_empleado";

        //conectarse a la BD
        ConnectionMysql connMySQL = new ConnectionMysql();
        //abrir la conexion
        Connection conn = connMySQL.open();

        //crear el elemento que llleva la sentencia bd
        PreparedStatement pstmt = conn.prepareStatement(query);

        //se ejecuta la sentencia y recibe el resultado
        ResultSet rs = pstmt.executeQuery();

        List<Empleado> empleados = new ArrayList<>();

        //se recorre el resultado de la consulta: rs
        while (rs.next()) {

//            Usuario u = new Usuario(rs.getInt("idUsuario"),
//                           rs.getString("nombreUsuario"),
//                           rs.getString("contrasenia"),
//                           rs.getString("rol"));
            Usuario u = new Usuario();
            u.setIdUsuario(rs.getInt("usuario_idUsuario"));
            u.setNombreUsuario(rs.getString("usuario_nombreUsuario"));
            u.setContrasenia(rs.getString("usuario_contrasenia"));
            u.setRol(rs.getString("usuario_rol"));

            Sucursal s = new Sucursal();
            s.setIdSucursal(rs.getInt("sucursal_idSucursal"));
            s.setNombre(rs.getString("sucursal_nombre"));
            s.setTitular(rs.getString("sucursal_titular"));
            s.setRfc(rs.getString("sucursal_rfc"));
            s.setDomicilio(rs.getString("sucursal_domicilio"));
            s.setColonia(rs.getString("sucursal_colonia"));
            s.setCodigoPostal(rs.getString("sucursal_codigoPostal"));
            s.setCiudad(rs.getString("sucursal_ciudad"));
            s.setEstado(rs.getString("sucursal_estado"));
            s.setTelefono(rs.getString("sucursal_telefono"));
            s.setLatitud(rs.getString("sucursal_latitud"));
            s.setLongitud(rs.getString("sucursal_longitud"));
            s.setEstatus(rs.getInt("sucursal_estatus"));

            Persona p = new Persona();
            p.setIdPersona(rs.getInt("persona_idPersona"));
            p.setNombre(rs.getString("persona_nombre"));
            p.setApellidoMaterno(rs.getString("persona_apellidoPaterno"));
            p.setApellidoPaterno(rs.getString("persona_apellidoMaterno"));
            p.setGenero(rs.getString("persona_genero"));
            p.setFechaNacimiento(rs.getString("persona_fechaNacimiento"));
            p.setRfc(rs.getString("persona_rfc"));
            p.setCurp(rs.getString("persona_curp"));
            p.setDomicilio(rs.getString("persona_domicilio"));
            p.setCodigoPostal(rs.getString("persona_codigoPostal"));
            p.setCiudad(rs.getString("persona_ciudad"));
            p.setEstado(rs.getString("persona_estado"));
            p.setTelefono(rs.getString("persona_telefono"));
            p.setFoto(rs.getString("persona_foto"));

            Empleado e = new Empleado();
            e.setIdEmpleado(rs.getInt("empleado_id"));
            e.setCodigo(rs.getString("empleado_codigo"));
            e.setFechaIngreso(rs.getString("empleado_fechaIngreso"));
            e.setPuesto(rs.getString("empleado_puesto"));
            e.setSalarioBruto(rs.getFloat("empleado_salarioBruto"));
            e.setEmail(rs.getString("email"));
            e.setActivo(rs.getInt("empleado_activo"));
            e.setPersona(p);
            e.setSucursal(s);
            e.setUsuario(u);

            empleados.add(e);

        }
        rs.close();
        pstmt.close();
        conn.close();
        connMySQL.close();
        return empleados;
    }

    public void delete(Empleado e) {
        try {
            //. Generar la consulta
            String query = "update empleado set activo=0 where idEmpleado=" + e.getIdEmpleado() + ";";
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

    public void activar(Empleado e) {
        try {
            //. Generar la consulta
            String query = "update empleado set activo=1 where idEmpleado=" + e.getIdEmpleado() + ";";
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
    
    public int insert (Empleado e) throws SQLException{
        String query="{call insertarEmpleado(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
        ConnectionMysql conMysql=new ConnectionMysql();
        Connection conn = conMysql.open();
        CallableStatement cstm= conn.prepareCall(query);
        
        cstm.setString(1, e.getPersona().getNombre());
        cstm.setString(2, e.getPersona().getApellidoPaterno());
        cstm.setString(3, e.getPersona().getApellidoMaterno());
        cstm.setString(4, e.getPersona().getGenero());
        cstm.setString(5, e.getPersona().getFechaNacimiento());
        cstm.setString(6, e.getPersona().getRfc());
        cstm.setString(7, e.getPersona().getCurp());
        cstm.setString(8, e.getPersona().getDomicilio());
        cstm.setString(9, e.getPersona().getCodigoPostal());
        cstm.setString(10, e.getPersona().getCiudad());
        cstm.setString(11, e.getPersona().getEstado());
        cstm.setString(12, e.getPersona().getTelefono());
        cstm.setString(13, e.getPersona().getFoto());
        
        cstm.setInt(14, e.getSucursal().getIdSucursal());
        
        cstm.setString(15, e.getUsuario().getNombreUsuario());
        cstm.setString(16, e.getUsuario().getContrasenia());
        cstm.setString(17, e.getUsuario().getRol());
        
        cstm.setString(18, e.getEmail());
        cstm.setString(19, e.getPuesto());
        cstm.setFloat(20, e.getSalarioBruto());
        
        cstm.registerOutParameter(21, Types.INTEGER);
        cstm.registerOutParameter(22, Types.INTEGER);
        cstm.registerOutParameter(23, Types.INTEGER);
        cstm.registerOutParameter(24, Types.VARCHAR);
        
        cstm.execute();
        
        e.getPersona().setIdPersona(cstm.getInt(21));
        e.getUsuario().setIdUsuario(cstm.getInt(22));
        e.setIdEmpleado(cstm.getInt(23));
        e.setCodigo(cstm.getString(24));
        
        cstm.close();
        conn.close();
        conMysql.close();
        
        return e.getIdEmpleado();
        
    }
    
    
    public int update(Empleado e) throws ClassNotFoundException, SQLException, IOException {
        //1. Generar la sentencia SQL
        String query = "{call modificarEmpleado(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
        //2. Crear la conexión a la BD
        ConnectionMysql conMySQL = new ConnectionMysql();
        //3. Se abre la conexión
        Connection conn = conMySQL.open();
        //4. Crear el statement que llevara la consulta
        CallableStatement cstm = conn.prepareCall(query);
        //5. LLenar todos los parametros de la llamada al Procedure
        cstm.setInt(1, e.getIdEmpleado());
        cstm.setString(2, e.getPersona().getNombre());
        cstm.setString(3, e.getPersona().getApellidoPaterno());
        cstm.setString(4, e.getPersona().getApellidoMaterno());
        cstm.setString(5, e.getPersona().getGenero());
        cstm.setString(6, e.getPersona().getFechaNacimiento());
        cstm.setString(7, e.getPersona().getRfc());
        cstm.setString(8, e.getPersona().getCurp());
        cstm.setString(9, e.getPersona().getDomicilio());
        cstm.setString(10, e.getPersona().getCodigoPostal());
        cstm.setString(11, e.getPersona().getCiudad());
        cstm.setString(12, e.getPersona().getEstado());
        cstm.setString(13, e.getPersona().getTelefono());
        cstm.setString(14, e.getPersona().getFoto());

        cstm.setString(15, e.getUsuario().getNombreUsuario());
        cstm.setString(16, e.getUsuario().getContrasenia());
        cstm.setString(17, e.getUsuario().getRol());

        cstm.setString(18, e.getEmail());
        cstm.setString(19, e.getPuesto());
        cstm.setFloat(20, e.getSalarioBruto());

        cstm.setInt(21, e.getSucursal().getIdSucursal());

        //6. Ejecutar la sentencia
        cstm.execute();
        //7. Obtener todos los parametros de retorno
//        e.getPersona().setIdPersona(cstm.getInt(22));
//        e.getUsuario().setIdUsuario(cstm.getInt(23));
//        e.setIdEmpleado(cstm.getInt(24));
//        e.setCodigo(cstm.getString(25));

        //8. Cerrar los objetos
        cstm.close();
        conn.close();
        conMySQL.close();

        return e.getIdEmpleado();
    }

    public List<Sucursal> getAllSucursal() throws SQLException {
        List<Sucursal> listaSucursales = new ArrayList<>();

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
        connMySQL.close();

        //8. Devolver la informacion
        return listaSucursales;
    }
    
    
    
    
    /////desde aqui modifique

    public List<Empleado> buscar(String valor) throws SQLException {
        
        
        List<Empleado> listaEmpleados = new ArrayList<>();

        // Implementa la lógica para buscar por nombre o código aquí
        // Puedes usar una consulta SQL que seleccione empleados que coincidan con el valor proporcionado.
        // Ejemplo:
        String query = "SELECT * FROM v_empleado WHERE persona_nombre LIKE ? OR empleado_codigo LIKE ?";
        ConnectionMysql connMySQL = new ConnectionMysql();
        //3. Se abre la conexion
        Connection conn = connMySQL.open();
        
                PreparedStatement stmt = conn.prepareStatement(query);
            stmt.setString(1, "%" + valor + "%");
        stmt.setString(2, "%" + valor + "%");
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                Usuario u = new Usuario();
                u.setIdUsuario(rs.getInt("usuario_idUsuario"));
                u.setNombreUsuario(rs.getString("usuario_nombreUsuario"));
                u.setContrasenia(rs.getString("usuario_contrasenia"));
                u.setRol(rs.getString("usuario_rol"));

                Sucursal s = new Sucursal();
                s.setIdSucursal(rs.getInt("sucursal_idSucursal"));
                s.setNombre(rs.getString("sucursal_nombre"));
                s.setTitular(rs.getString("sucursal_titular"));
                s.setRfc(rs.getString("sucursal_rfc"));
                s.setDomicilio(rs.getString("sucursal_domicilio"));
                s.setColonia(rs.getString("sucursal_colonia"));
                s.setCodigoPostal(rs.getString("sucursal_codigoPostal"));
                s.setCiudad(rs.getString("sucursal_ciudad"));
                s.setEstado(rs.getString("sucursal_estado"));
                s.setTelefono(rs.getString("sucursal_telefono"));
                s.setLatitud(rs.getString("sucursal_latitud"));
                s.setLongitud(rs.getString("sucursal_longitud"));
                s.setEstatus(rs.getInt("sucursal_estatus"));

                Persona p = new Persona();
                p.setIdPersona(rs.getInt("persona_idPersona"));
                p.setNombre(rs.getString("persona_nombre"));
                p.setApellidoMaterno(rs.getString("persona_apellidoPaterno"));
                p.setApellidoPaterno(rs.getString("persona_apellidoMaterno"));
                p.setGenero(rs.getString("persona_genero"));
                p.setFechaNacimiento(rs.getString("persona_fechaNacimiento"));
                p.setRfc(rs.getString("persona_rfc"));
                p.setCurp(rs.getString("persona_curp"));
                p.setDomicilio(rs.getString("persona_domicilio"));
                p.setCodigoPostal(rs.getString("persona_codigoPostal"));
                p.setCiudad(rs.getString("persona_ciudad"));
                p.setEstado(rs.getString("persona_estado"));
                p.setTelefono(rs.getString("persona_telefono"));
                p.setFoto(rs.getString("persona_foto"));

                Empleado e = new Empleado();
                e.setIdEmpleado(rs.getInt("empleado_id"));
                e.setCodigo(rs.getString("empleado_codigo"));
                e.setFechaIngreso(rs.getString("empleado_fechaIngreso"));
                e.setPuesto(rs.getString("empleado_puesto"));
                e.setSalarioBruto(rs.getFloat("empleado_salarioBruto"));
                e.setEmail(rs.getString("email"));
                e.setActivo(rs.getInt("empleado_activo"));
                e.setPersona(p);
                e.setSucursal(s);
                e.setUsuario(u);

                listaEmpleados.add(e);
            }
        
        
        rs.close();
        stmt.close();
        conn.close();
        connMySQL.close();

        return listaEmpleados;
    }
    
    public List<Empleado> seleccionar(String val) throws SQLException {
        
        String query = "SELECT * FROM v_empleado where empleado_activo="+val;
        
        ConnectionMysql connMySQL = new ConnectionMysql();
        //abrir la conexion
        Connection conn = connMySQL.open();

        //crear el elemento que llleva la sentencia bd
        PreparedStatement pstmt = conn.prepareStatement(query);

        //se ejecuta la sentencia y recibe el resultado
        ResultSet rs = pstmt.executeQuery();

        List<Empleado> lista = new ArrayList<>();

        //se recorre el resultado de la consulta: rs
        while (rs.next()) {

//            Usuario u = new Usuario(rs.getInt("idUsuario"),
//                           rs.getString("nombreUsuario"),
//                           rs.getString("contrasenia"),
//                           rs.getString("rol"));
            Usuario u = new Usuario();
            u.setIdUsuario(rs.getInt("usuario_idUsuario"));
            u.setNombreUsuario(rs.getString("usuario_nombreUsuario"));
            u.setContrasenia(rs.getString("usuario_contrasenia"));
            u.setRol(rs.getString("usuario_rol"));

            Sucursal s = new Sucursal();
            s.setIdSucursal(rs.getInt("sucursal_idSucursal"));
            s.setNombre(rs.getString("sucursal_nombre"));
            s.setTitular(rs.getString("sucursal_titular"));
            s.setRfc(rs.getString("sucursal_rfc"));
            s.setDomicilio(rs.getString("sucursal_domicilio"));
            s.setColonia(rs.getString("sucursal_colonia"));
            s.setCodigoPostal(rs.getString("sucursal_codigoPostal"));
            s.setCiudad(rs.getString("sucursal_ciudad"));
            s.setEstado(rs.getString("sucursal_estado"));
            s.setTelefono(rs.getString("sucursal_telefono"));
            s.setLatitud(rs.getString("sucursal_latitud"));
            s.setLongitud(rs.getString("sucursal_longitud"));
            s.setEstatus(rs.getInt("sucursal_estatus"));

            Persona p = new Persona();
            p.setIdPersona(rs.getInt("persona_idPersona"));
            p.setNombre(rs.getString("persona_nombre"));
            p.setApellidoMaterno(rs.getString("persona_apellidoPaterno"));
            p.setApellidoPaterno(rs.getString("persona_apellidoMaterno"));
            p.setGenero(rs.getString("persona_genero"));
            p.setFechaNacimiento(rs.getString("persona_fechaNacimiento"));
            p.setRfc(rs.getString("persona_rfc"));
            p.setCurp(rs.getString("persona_curp"));
            p.setDomicilio(rs.getString("persona_domicilio"));
            p.setCodigoPostal(rs.getString("persona_codigoPostal"));
            p.setCiudad(rs.getString("persona_ciudad"));
            p.setEstado(rs.getString("persona_estado"));
            p.setTelefono(rs.getString("persona_telefono"));
            p.setFoto(rs.getString("persona_foto"));

            Empleado e = new Empleado();
            e.setIdEmpleado(rs.getInt("empleado_id"));
            e.setCodigo(rs.getString("empleado_codigo"));
            e.setFechaIngreso(rs.getString("empleado_fechaIngreso"));
            e.setPuesto(rs.getString("empleado_puesto"));
            e.setSalarioBruto(rs.getFloat("empleado_salarioBruto"));
            e.setEmail(rs.getString("email"));
            e.setActivo(rs.getInt("empleado_activo"));
            e.setPersona(p);
            e.setSucursal(s);
            e.setUsuario(u);

            lista.add(e);
        }
        rs.close();
        pstmt.close();
        conn.close();
        connMySQL.close();
        return lista;
    }
}
