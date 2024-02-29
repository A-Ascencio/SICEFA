/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm403.bd;
import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;
/**
 *
 * @author pezca
 */
public class ConnectionMysql {
   Connection conn;

 

    /**
     * Metodo para abrir una conexión a BD-MySQL
     * @return Devuelve un objeto de tipo Connection 
     */
    public Connection open()
    {
        String user = "root";
        String password = "Patotas117";
        String url = "jdbc:mysql://localhost:3306/sicefa";

 

        try
        {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(url, user, password);
            return conn;
        } catch (ClassNotFoundException ex)
        {
            throw new RuntimeException(ex);
        } catch (SQLException ex)
        {
            throw new RuntimeException(ex);
        }
    }
    
    /**
     * Método para cerrar una conexión a BD-MySQL existente
     */
    public void close()
    {
        if(conn!=null)
        {
            try
            {
                conn.close();
            } catch (SQLException ex)
            {
                ex.printStackTrace();
            }
        }
    }
}

