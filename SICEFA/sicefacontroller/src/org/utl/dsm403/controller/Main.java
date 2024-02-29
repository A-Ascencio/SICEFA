/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package org.utl.dsm403.controller;
import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.utl.dsm403.model.Empleado;
import org.utl.dsm403.model.Persona;
import org.utl.dsm403.model.Producto;
import org.utl.dsm403.model.Sucursal;
import org.utl.dsm403.model.Usuario;
/**
 *
 * @author pezca
 */
public class Main {

    /**m
     * @param args the command line arguments
     */
    public static void main(String[] args) throws ClassNotFoundException, SQLException{  
        Login();
}
        
    
    public static void insert() {
    // No necesitas proporcionar un idProducto manualmente si es autoincremental
        Producto p = new Producto("Ácido acetilsalicílico", "Ácido acetilsalicílico", "tableta", "Tableta", "Envase con 20 tabletas.", "Artritis reumatoide", 
                              "Hipersensibilidad al fármaco, úlcera péptica o gastritis activas, hipoprotrombinemia, niños menores de 6 años.", "500 mg", 20, 499.68f, 637, "", "", "");
    
    ControllerProducto objCE = new ControllerProducto();
    
    try {
        objCE.insert(p);
    } catch (SQLException ex) {
        ex.printStackTrace();
    }
    
    System.out.println(p.toString());
}
//    public static void agregar() throws SQLException{
//      
//       Persona p = new Persona(4, "Marco", "Antonio", "solis", "H", "01/01/1901", "R", "R", "aqui", "37130", "Silao", "guanajuato", "4776968219", "--");
//    Usuario u = new Usuario(4, "marquito", "1234", "EMPS");
//    Sucursal s = new Sucursal(2, "", "", "", "", "", "", "", "", "", "", "", 0);
//    Empleado e = new Empleado(0, "", "12/10/2022", "email.com", "empleado", (float) 152.0, 0, p, u, s);
//
//    ControllerEmpleado objCE = new ControllerEmpleado();
//    int idEmpleado = objCE.insert(e);
//
//    if (idEmpleado > 0) {
//        System.out.println("Empleado insertado con éxito. ID del empleado: " + idEmpleado);
//    } else {
//        System.out.println("Error al insertar el empleado.");
//    }
//    }
//    
//    public static void actualizar() throws SQLException{
//        Persona p = new Persona(3, "Luis", "Martinez", "Silva", "M", "01/01/1901", "R", "R", "aqui", "37130", "Silao", "guanajuato", "4776968219", "--");
//    Usuario u = new Usuario(3, "ElPanadero", "1234", "EMPS");
//    Sucursal s = new Sucursal(1, "", "", "", "", "", "", "", "", "", "", "", 0);
//    Empleado e = new Empleado(3, "", "12/10/2022", "email.com", "empleado", (float) 152.0, 0, p, u, s);
//
//    }
//    
    public static void Login(){
        
    }
//    
    }
    
