/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm403.model;

/**
 *
 * @author pezca
 */
public class Inventario {
    private int idInventario;
    Producto Producto;
    Sucursal Sucursal;
    private int existencias;

    public Inventario() {
    }

    public Inventario(int idInventario, Producto Producto, Sucursal Sucursal, int existencias) {
        this.idInventario = idInventario;
        this.Producto = Producto;
        this.Sucursal = Sucursal;
        this.existencias = existencias;
    }

    public Inventario(Producto Producto, Sucursal Sucursal, int existencias) {
        this.Producto = Producto;
        this.Sucursal = Sucursal;
        this.existencias = existencias;
    }

    public int getIdInventario() {
        return idInventario;
    }

    public void setIdInventario(int idInventario) {
        this.idInventario = idInventario;
    }

    public Producto getProducto() {
        return Producto;
    }

    public void setProducto(Producto Producto) {
        this.Producto = Producto;
    }

    public Sucursal getSucursal() {
        return Sucursal;
    }

    public void setSucursal(Sucursal Sucursal) {
        this.Sucursal = Sucursal;
    }

    public int getExistencias() {
        return existencias;
    }

    public void setExistencias(int existencias) {
        this.existencias = existencias;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Inventario{");
        sb.append("idInventario:").append(idInventario);
        sb.append(", Producto:").append(Producto.toString());
        sb.append(", Sucursal:").append(Sucursal.toString());
        sb.append(", existencias:").append(existencias);
        sb.append('}');
        return sb.toString();
    }
    
    
    
}
