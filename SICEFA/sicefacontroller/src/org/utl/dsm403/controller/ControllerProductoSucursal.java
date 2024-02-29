/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm403.controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import org.utl.dsm403.bd.ConnectionMysql;
import org.utl.dsm403.model.Inventario;
import org.utl.dsm403.model.Producto;
import org.utl.dsm403.model.Sucursal;
import org.utl.dsm403.model.Usuario;

/**
 *
 * @author pezca
 */
public class ControllerProductoSucursal {
    
    

    public List<Inventario> getAllProductoSuc() throws SQLException {
        

        String query = "SELECT * FROM v_inventario";

        ConnectionMysql connMySQL = new ConnectionMysql();
        //abrir la conexion
        Connection conn = connMySQL.open();

        //crear el elemento que llleva la sentencia bd
        PreparedStatement pstmt = conn.prepareStatement(query);

        //se ejecuta la sentencia y recibe el resultado
        ResultSet rs = pstmt.executeQuery();

        List<Inventario> inventario = new ArrayList<>();

        //se recorre el resultado de la consulta: rs
        while (rs.next()) {

//            Usuario u = new Usuario(rs.getInt("idUsuario"),
//                           rs.getString("nombreUsuario"),
//                           rs.getString("contrasenia"),
//                           rs.getString("rol"));
            Sucursal s = new Sucursal();
            s.setIdSucursal(rs.getInt("sucursal_id"));
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

            Producto p = new Producto();
            p.setIdProducto(rs.getInt("producto_id"));
            p.setNombre(rs.getString("producto_nombre"));
            p.setNombreGenerico(rs.getString("producto_nombreGenerico"));
            p.setFormaFarmaceutica(rs.getString("producto_formaFarmaceutica"));
            p.setUnidadMedida(rs.getString("producto_unidadMedida"));
            p.setPresentacion(rs.getString("producto_presentacion"));
            p.setPrincipalIndicacion(rs.getString("producto_principalIndicacion"));
            p.setContraindicaciones(rs.getString("producto_contraindicaciones"));
            p.setConcentracion(rs.getString("producto_concentracion"));
            p.setUnidadesEnvase(rs.getInt("producto_unidadesEnvase"));
            p.setPrecioCompra(rs.getFloat("producto_precioCompra"));
            p.setPrecioVenta(rs.getFloat("producto_precioVenta"));
            p.setFoto(rs.getString("producto_foto"));
            p.setRutaFoto(rs.getString("producto_rutaFoto"));
            p.setCodigoBarras(rs.getString("producto_codigoBarras"));
            p.setEstatus(rs.getInt("producto_estatus"));

            Inventario in = new Inventario();
            in.setExistencias(rs.getInt("inventario_existencias"));
            in.setIdInventario(rs.getInt("inventario_id"));
            in.setProducto(p);
            in.setSucursal(s);

            inventario.add(in);

        }
        rs.close();
        pstmt.close();
        conn.close();
        connMySQL.close();
        return inventario;
    }
    
    public List<Inventario> getAllProductoSuc1() throws SQLException {
        

        String query = "SELECT * FROM v_inventario where sucursal_id=1";

        ConnectionMysql connMySQL = new ConnectionMysql();
        //abrir la conexion
        Connection conn = connMySQL.open();

        //crear el elemento que llleva la sentencia bd
        PreparedStatement pstmt = conn.prepareStatement(query);

        //se ejecuta la sentencia y recibe el resultado
        ResultSet rs = pstmt.executeQuery();

        List<Inventario> inventario = new ArrayList<>();

        //se recorre el resultado de la consulta: rs
        while (rs.next()) {

//            Usuario u = new Usuario(rs.getInt("idUsuario"),
//                           rs.getString("nombreUsuario"),
//                           rs.getString("contrasenia"),
//                           rs.getString("rol"));
            Sucursal s = new Sucursal();
            s.setIdSucursal(rs.getInt("sucursal_id"));
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

            Producto p = new Producto();
            p.setIdProducto(rs.getInt("producto_id"));
            p.setNombre(rs.getString("producto_nombre"));
            p.setNombreGenerico(rs.getString("producto_nombreGenerico"));
            p.setFormaFarmaceutica(rs.getString("producto_formaFarmaceutica"));
            p.setUnidadMedida(rs.getString("producto_unidadMedida"));
            p.setPresentacion(rs.getString("producto_presentacion"));
            p.setPrincipalIndicacion(rs.getString("producto_principalIndicacion"));
            p.setContraindicaciones(rs.getString("producto_contraindicaciones"));
            p.setConcentracion(rs.getString("producto_concentracion"));
            p.setUnidadesEnvase(rs.getInt("producto_unidadesEnvase"));
            p.setPrecioCompra(rs.getFloat("producto_precioCompra"));
            p.setPrecioVenta(rs.getFloat("producto_precioVenta"));
            p.setFoto(rs.getString("producto_foto"));
            p.setRutaFoto(rs.getString("producto_rutaFoto"));
            p.setCodigoBarras(rs.getString("producto_codigoBarras"));
            p.setEstatus(rs.getInt("producto_estatus"));

            Inventario in = new Inventario();
            in.setExistencias(rs.getInt("inventario_existencias"));
            in.setIdInventario(rs.getInt("inventario_id"));
            in.setProducto(p);
            in.setSucursal(s);

            inventario.add(in);

        }
        rs.close();
        pstmt.close();
        conn.close();
        connMySQL.close();
        return inventario;
    }
    
    public List<Inventario> getAllProductoSuc2() throws SQLException {
        

        String query = "SELECT * FROM v_inventario where sucursal_id=2";

        ConnectionMysql connMySQL = new ConnectionMysql();
        //abrir la conexion
        Connection conn = connMySQL.open();

        //crear el elemento que llleva la sentencia bd
        PreparedStatement pstmt = conn.prepareStatement(query);

        //se ejecuta la sentencia y recibe el resultado
        ResultSet rs = pstmt.executeQuery();

        List<Inventario> inventario = new ArrayList<>();

        //se recorre el resultado de la consulta: rs
        while (rs.next()) {

//            Usuario u = new Usuario(rs.getInt("idUsuario"),
//                           rs.getString("nombreUsuario"),
//                           rs.getString("contrasenia"),
//                           rs.getString("rol"));
            Sucursal s = new Sucursal();
            s.setIdSucursal(rs.getInt("sucursal_id"));
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

            Producto p = new Producto();
            p.setIdProducto(rs.getInt("producto_id"));
            p.setNombre(rs.getString("producto_nombre"));
            p.setNombreGenerico(rs.getString("producto_nombreGenerico"));
            p.setFormaFarmaceutica(rs.getString("producto_formaFarmaceutica"));
            p.setUnidadMedida(rs.getString("producto_unidadMedida"));
            p.setPresentacion(rs.getString("producto_presentacion"));
            p.setPrincipalIndicacion(rs.getString("producto_principalIndicacion"));
            p.setContraindicaciones(rs.getString("producto_contraindicaciones"));
            p.setConcentracion(rs.getString("producto_concentracion"));
            p.setUnidadesEnvase(rs.getInt("producto_unidadesEnvase"));
            p.setPrecioCompra(rs.getFloat("producto_precioCompra"));
            p.setPrecioVenta(rs.getFloat("producto_precioVenta"));
            p.setFoto(rs.getString("producto_foto"));
            p.setRutaFoto(rs.getString("producto_rutaFoto"));
            p.setCodigoBarras(rs.getString("producto_codigoBarras"));
            p.setEstatus(rs.getInt("producto_estatus"));

            Inventario in = new Inventario();
            in.setExistencias(rs.getInt("inventario_existencias"));
            in.setIdInventario(rs.getInt("inventario_id"));
            in.setProducto(p);
            in.setSucursal(s);

            inventario.add(in);

        }
        rs.close();
        pstmt.close();
        conn.close();
        connMySQL.close();
        return inventario;
    }
    
    public List<Inventario> getAllProductoSuc3() throws SQLException {
        

        String query = "select * from v_inventario where sucursal_id=3";

        ConnectionMysql connMySQL = new ConnectionMysql();
        //abrir la conexion
        Connection conn = connMySQL.open();

        //crear el elemento que llleva la sentencia bd
        PreparedStatement pstmt = conn.prepareStatement(query);

        //se ejecuta la sentencia y recibe el resultado
        ResultSet rs = pstmt.executeQuery();

        List<Inventario> inventario = new ArrayList<>();

        //se recorre el resultado de la consulta: rs
        while (rs.next()) {

//            Usuario u = new Usuario(rs.getInt("idUsuario"),
//                           rs.getString("nombreUsuario"),
//                           rs.getString("contrasenia"),
//                           rs.getString("rol"));
            Sucursal s = new Sucursal();
            s.setIdSucursal(rs.getInt("sucursal_id"));
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

            Producto p = new Producto();
            p.setIdProducto(rs.getInt("producto_id"));
            p.setNombre(rs.getString("producto_nombre"));
            p.setNombreGenerico(rs.getString("producto_nombreGenerico"));
            p.setFormaFarmaceutica(rs.getString("producto_formaFarmaceutica"));
            p.setUnidadMedida(rs.getString("producto_unidadMedida"));
            p.setPresentacion(rs.getString("producto_presentacion"));
            p.setPrincipalIndicacion(rs.getString("producto_principalIndicacion"));
            p.setContraindicaciones(rs.getString("producto_contraindicaciones"));
            p.setConcentracion(rs.getString("producto_concentracion"));
            p.setUnidadesEnvase(rs.getInt("producto_unidadesEnvase"));
            p.setPrecioCompra(rs.getFloat("producto_precioCompra"));
            p.setPrecioVenta(rs.getFloat("producto_precioVenta"));
            p.setFoto(rs.getString("producto_foto"));
            p.setRutaFoto(rs.getString("producto_rutaFoto"));
            p.setCodigoBarras(rs.getString("producto_codigoBarras"));
            p.setEstatus(rs.getInt("producto_estatus"));

            Inventario in = new Inventario();
            in.setExistencias(rs.getInt("inventario_existencias"));
            in.setIdInventario(rs.getInt("inventario_id"));
            in.setProducto(p);
            in.setSucursal(s);

            inventario.add(in);

        }
        rs.close();
        pstmt.close();
        conn.close();
        connMySQL.close();
        return inventario;
    }

    public List<Inventario> buscar(String valor) throws SQLException {

        List<Inventario> inventario = new ArrayList<>();

        // Implementa la lógica para buscar por nombre o código aquí
        // Puedes usar una consulta SQL que seleccione empleados que coincidan con el valor proporcionado.
        // Ejemplo:
        String query = "SELECT * FROM v_inventario WHERE inventario_id LIKE ? OR inventario_existencias LIKE ? OR producto_id LIKE ? OR producto_nombre LIKE ?"
                + "OR producto_nombreGenerico LIKE ? OR producto_formaFarmaceutica LIKE ? OR producto_unidadMedida LIKE ? OR producto_presentacion LIKE ?"
                + "OR producto_principalIndicacion LIKE ? OR producto_contraindicaciones LIKE ? OR producto_concentracion LIKE ? OR producto_unidadesEnvase LIKE ?"
                + "OR producto_precioCompra LIKE ? OR producto_precioVenta LIKE ? OR sucursal_nombre LIKE ? OR sucursal_codigoPostal LIKE ?";
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
            Sucursal s = new Sucursal();
            s.setIdSucursal(rs.getInt("sucursal_id"));
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

            Producto p = new Producto();
            p.setIdProducto(rs.getInt("producto_id"));
            p.setNombre(rs.getString("producto_nombre"));
            p.setNombreGenerico(rs.getString("producto_nombreGenerico"));
            p.setFormaFarmaceutica(rs.getString("producto_formaFarmaceutica"));
            p.setUnidadMedida(rs.getString("producto_unidadMedida"));
            p.setPresentacion(rs.getString("producto_presentacion"));
            p.setPrincipalIndicacion(rs.getString("producto_principalIndicacion"));
            p.setContraindicaciones(rs.getString("producto_contraindicaciones"));
            p.setConcentracion(rs.getString("producto_concentracion"));
            p.setUnidadesEnvase(rs.getInt("producto_unidadesEnvase"));
            p.setPrecioCompra(rs.getFloat("producto_precioCompra"));
            p.setPrecioVenta(rs.getFloat("producto_precioVenta"));
            p.setFoto(rs.getString("producto_foto"));
            p.setRutaFoto(rs.getString("producto_rutaFoto"));
            p.setCodigoBarras(rs.getString("producto_codigoBarras"));
            p.setEstatus(rs.getInt("producto_estatus"));

            Inventario in = new Inventario();
            in.setExistencias(rs.getInt("inventario_existencias"));
            in.setIdInventario(rs.getInt("inventario_id"));
            in.setProducto(p);
            in.setSucursal(s);

            inventario.add(in);
        }

        rs.close();
        stmt.close();
        conn.close();
        connMySQL.close();

        return inventario;
    }
    
    public List<Inventario> buscar1(String valor) throws SQLException {

        List<Inventario> inventario = new ArrayList<>();

        // Implementa la lógica para buscar por nombre o código aquí
        // Puedes usar una consulta SQL que seleccione empleados que coincidan con el valor proporcionado.
        // Ejemplo:
        String query = "SELECT * FROM v_inventario WHERE sucursal_id=1 and( inventario_id LIKE ? OR inventario_existencias LIKE ? OR producto_id LIKE ? OR producto_nombre LIKE ?"
                + "OR producto_nombreGenerico LIKE ? OR producto_formaFarmaceutica LIKE ? OR producto_unidadMedida LIKE ? OR producto_presentacion LIKE ?"
                + "OR producto_principalIndicacion LIKE ? OR producto_contraindicaciones LIKE ? OR producto_concentracion LIKE ? OR producto_unidadesEnvase LIKE ?"
                + "OR producto_precioCompra LIKE ? OR producto_precioVenta LIKE ? OR sucursal_nombre LIKE ? OR sucursal_codigoPostal LIKE ?);";
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
            Sucursal s = new Sucursal();
            s.setIdSucursal(rs.getInt("sucursal_id"));
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

            Producto p = new Producto();
            p.setIdProducto(rs.getInt("producto_id"));
            p.setNombre(rs.getString("producto_nombre"));
            p.setNombreGenerico(rs.getString("producto_nombreGenerico"));
            p.setFormaFarmaceutica(rs.getString("producto_formaFarmaceutica"));
            p.setUnidadMedida(rs.getString("producto_unidadMedida"));
            p.setPresentacion(rs.getString("producto_presentacion"));
            p.setPrincipalIndicacion(rs.getString("producto_principalIndicacion"));
            p.setContraindicaciones(rs.getString("producto_contraindicaciones"));
            p.setConcentracion(rs.getString("producto_concentracion"));
            p.setUnidadesEnvase(rs.getInt("producto_unidadesEnvase"));
            p.setPrecioCompra(rs.getFloat("producto_precioCompra"));
            p.setPrecioVenta(rs.getFloat("producto_precioVenta"));
            p.setFoto(rs.getString("producto_foto"));
            p.setRutaFoto(rs.getString("producto_rutaFoto"));
            p.setCodigoBarras(rs.getString("producto_codigoBarras"));
            p.setEstatus(rs.getInt("producto_estatus"));

            Inventario in = new Inventario();
            in.setExistencias(rs.getInt("inventario_existencias"));
            in.setIdInventario(rs.getInt("inventario_id"));
            in.setProducto(p);
            in.setSucursal(s);

            inventario.add(in);
        }

        rs.close();
        stmt.close();
        conn.close();
        connMySQL.close();

        return inventario;
    }
    
    public List<Inventario> buscar2(String valor) throws SQLException {

        List<Inventario> inventario = new ArrayList<>();

        // Implementa la lógica para buscar por nombre o código aquí
        // Puedes usar una consulta SQL que seleccione empleados que coincidan con el valor proporcionado.
        // Ejemplo:
        String query = "SELECT * FROM v_inventario WHERE sucursal_id=2 and( inventario_id LIKE ? OR inventario_existencias LIKE ? OR producto_id LIKE ? OR producto_nombre LIKE ?"
                + "OR producto_nombreGenerico LIKE ? OR producto_formaFarmaceutica LIKE ? OR producto_unidadMedida LIKE ? OR producto_presentacion LIKE ?"
                + "OR producto_principalIndicacion LIKE ? OR producto_contraindicaciones LIKE ? OR producto_concentracion LIKE ? OR producto_unidadesEnvase LIKE ?"
                + "OR producto_precioCompra LIKE ? OR producto_precioVenta LIKE ? OR sucursal_nombre LIKE ? OR sucursal_codigoPostal LIKE ?);";
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
            Sucursal s = new Sucursal();
            s.setIdSucursal(rs.getInt("sucursal_id"));
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

            Producto p = new Producto();
            p.setIdProducto(rs.getInt("producto_id"));
            p.setNombre(rs.getString("producto_nombre"));
            p.setNombreGenerico(rs.getString("producto_nombreGenerico"));
            p.setFormaFarmaceutica(rs.getString("producto_formaFarmaceutica"));
            p.setUnidadMedida(rs.getString("producto_unidadMedida"));
            p.setPresentacion(rs.getString("producto_presentacion"));
            p.setPrincipalIndicacion(rs.getString("producto_principalIndicacion"));
            p.setContraindicaciones(rs.getString("producto_contraindicaciones"));
            p.setConcentracion(rs.getString("producto_concentracion"));
            p.setUnidadesEnvase(rs.getInt("producto_unidadesEnvase"));
            p.setPrecioCompra(rs.getFloat("producto_precioCompra"));
            p.setPrecioVenta(rs.getFloat("producto_precioVenta"));
            p.setFoto(rs.getString("producto_foto"));
            p.setRutaFoto(rs.getString("producto_rutaFoto"));
            p.setCodigoBarras(rs.getString("producto_codigoBarras"));
            p.setEstatus(rs.getInt("producto_estatus"));

            Inventario in = new Inventario();
            in.setExistencias(rs.getInt("inventario_existencias"));
            in.setIdInventario(rs.getInt("inventario_id"));
            in.setProducto(p);
            in.setSucursal(s);

            inventario.add(in);
        }

        rs.close();
        stmt.close();
        conn.close();
        connMySQL.close();

        return inventario;
    }
    
    public List<Inventario> buscar3(String valor) throws SQLException {

        List<Inventario> inventario = new ArrayList<>();

        // Implementa la lógica para buscar por nombre o código aquí
        // Puedes usar una consulta SQL que seleccione empleados que coincidan con el valor proporcionado.
        // Ejemplo:
        String query = "SELECT * FROM v_inventario WHERE sucursal_id=3 and( inventario_id LIKE ? OR inventario_existencias LIKE ? OR producto_id LIKE ? OR producto_nombre LIKE ?"
                + "OR producto_nombreGenerico LIKE ? OR producto_formaFarmaceutica LIKE ? OR producto_unidadMedida LIKE ? OR producto_presentacion LIKE ?"
                + "OR producto_principalIndicacion LIKE ? OR producto_contraindicaciones LIKE ? OR producto_concentracion LIKE ? OR producto_unidadesEnvase LIKE ?"
                + "OR producto_precioCompra LIKE ? OR producto_precioVenta LIKE ? OR sucursal_nombre LIKE ? OR sucursal_codigoPostal LIKE ?);";
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
            Sucursal s = new Sucursal();
            s.setIdSucursal(rs.getInt("sucursal_id"));
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

            Producto p = new Producto();
            p.setIdProducto(rs.getInt("producto_id"));
            p.setNombre(rs.getString("producto_nombre"));
            p.setNombreGenerico(rs.getString("producto_nombreGenerico"));
            p.setFormaFarmaceutica(rs.getString("producto_formaFarmaceutica"));
            p.setUnidadMedida(rs.getString("producto_unidadMedida"));
            p.setPresentacion(rs.getString("producto_presentacion"));
            p.setPrincipalIndicacion(rs.getString("producto_principalIndicacion"));
            p.setContraindicaciones(rs.getString("producto_contraindicaciones"));
            p.setConcentracion(rs.getString("producto_concentracion"));
            p.setUnidadesEnvase(rs.getInt("producto_unidadesEnvase"));
            p.setPrecioCompra(rs.getFloat("producto_precioCompra"));
            p.setPrecioVenta(rs.getFloat("producto_precioVenta"));
            p.setFoto(rs.getString("producto_foto"));
            p.setRutaFoto(rs.getString("producto_rutaFoto"));
            p.setCodigoBarras(rs.getString("producto_codigoBarras"));
            p.setEstatus(rs.getInt("producto_estatus"));

            Inventario in = new Inventario();
            in.setExistencias(rs.getInt("inventario_existencias"));
            in.setIdInventario(rs.getInt("inventario_id"));
            in.setProducto(p);
            in.setSucursal(s);

            inventario.add(in);
        }

        rs.close();
        stmt.close();
        conn.close();
        connMySQL.close();

        return inventario;
    }
}
