/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm403.model;

/**
 *
 * @author pezca
 */
public class Empleado {
  private int idEmpleado;
  private String codigo;
  private String fechaIngreso;
  private String puesto;
  private float salarioBruto;
  private String email;
  private int activo;
  Persona Persona;  //objEmpleado.persona.getIdPersona();
  Usuario Usuario;
   Sucursal Sucursal;

   public Empleado(){
       
   }
   
    public Empleado(int idEmpleado, String codigo, String fechaIngreso,String email, String puesto, float salarioBruto, int activo, Persona Persona, Usuario Usuario, Sucursal Sucursal) {
        this.idEmpleado = idEmpleado;
        this.codigo = codigo;
        this.fechaIngreso = fechaIngreso;
        this.puesto = puesto;
        this.salarioBruto = salarioBruto;
        this.activo = activo;
        this.Persona = Persona;
        this.Usuario = Usuario;
        this.Sucursal = Sucursal;
        this.email=email;
    }

    public Empleado(String codigo, String fechaIngreso,String email, String puesto, float salarioBruto, int activo, Persona Persona, Usuario Usuario, Sucursal Sucursal) {
        this.codigo = codigo;
        this.fechaIngreso = fechaIngreso;
        this.puesto = puesto;
        this.salarioBruto = salarioBruto;
        this.activo = activo;
        this.Persona = Persona;
        this.Usuario = Usuario;
        this.Sucursal = Sucursal;
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    

    public int getIdEmpleado() {
        return idEmpleado;
    }

    public void setIdEmpleado(int idEmpleado) {
        this.idEmpleado = idEmpleado;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(String fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public String getPuesto() {
        return puesto;
    }

    public void setPuesto(String puesto) {
        this.puesto = puesto;
    }

    public float getSalarioBruto() {
        return salarioBruto;
    }

    public void setSalarioBruto(float salarioBruto) {
        this.salarioBruto = salarioBruto;
    }

    public int getActivo() {
        return activo;
    }

    public void setActivo(int activo) {
        this.activo = activo;
    }

    public Persona getPersona() {
        return Persona;
    }

    public void setPersona(Persona Persona) {
        this.Persona = Persona;
    }

    public Usuario getUsuario() {
        return Usuario;
    }

    public void setUsuario(Usuario Usuario) {
        this.Usuario = Usuario;
    }

    public Sucursal getSucursal() {
        return Sucursal;
    }

    public void setSucursal(Sucursal Sucursal) {
        this.Sucursal = Sucursal;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Empleado{");
        sb.append("idEmpleado:").append(idEmpleado);
        sb.append(", codigo:").append(codigo);
        sb.append(", fechaIngreso:").append(fechaIngreso);
        sb.append(", puesto:").append(puesto);
        sb.append(", salarioBruto:").append(salarioBruto);
        sb.append(", email:").append("");
        sb.append(", activo:").append(activo);
        sb.append(", Persona:").append(Persona.toString());
        sb.append(", Usuario:").append(Usuario.toString());
        sb.append(", Sucursal:").append(Sucursal.toString());
        sb.append('}');
        return sb.toString();
    }
   
   
}
