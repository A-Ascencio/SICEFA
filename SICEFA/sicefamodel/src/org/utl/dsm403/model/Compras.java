package org.utl.dsm403.model;

/**
 *
 * @author diego
 */
public class Compras {

    private int idCompra;
    private String fechaHoraPedido;
    private int estatus;
    private int activo;
    private Double totalPedido;
    private Empleado empleado;
    private String nombreProducto;

    public Compras() {
    }

    public Compras(int idCompra, String fechaHoraPedido, int estatus, int activo, Double totalPedido, Empleado empleado) {
        this.idCompra = idCompra;
        this.fechaHoraPedido = fechaHoraPedido;
        this.estatus = estatus;
        this.activo = activo;
        this.totalPedido = totalPedido;
        this.empleado = empleado;
    }

//        public Compras(int idCompra, String fechaHoraPedido, int estatus, int activo, Empleado empleado) {
//            this.idCompra = idCompra;
//            this.fechaHoraPedido = fechaHoraPedido;
//            this.estatus = estatus;
//            this.activo = activo;
//            this.empleado = empleado;
//        }
    public Double gettotalPedido() {
        return totalPedido;
    }

    public void settotalPedido(Double totalPedido) {
        this.totalPedido = totalPedido;
    }

    public int getIdCompra() {
        return idCompra;
    }

    public void setIdCompra(int idCompra) {
        this.idCompra = idCompra;
    }

    public String getFechaHoraPedido() {
        return fechaHoraPedido;
    }

    public void setFechaHoraPedido(String fechaHoraPedido) {
        this.fechaHoraPedido = fechaHoraPedido;
    }

    public int getEstatus() {
        return estatus;
    }

    public void setEstatus(int estatus) {
        this.estatus = estatus;
    }

    public int getActivo() {
        return activo;
    }

    public void setActivo(int activo) {
        this.activo = activo;
    }

    public Empleado getEmpleado() {
        return empleado;
    }

    public void setEmpleado(Empleado empleado) {
        this.empleado = empleado;
    }

    public Double getTotalPedido() {
        return totalPedido;
    }

    public void setTotalPedido(Double totalPedido) {
        this.totalPedido = totalPedido;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Compra{");
        sb.append("idCompra:").append(idCompra);
        sb.append(", fechaHoraPedido:").append(fechaHoraPedido);
        sb.append(", estatus:").append(estatus);
        sb.append(", activo:").append(activo);
        sb.append(", empleado:").append(empleado);
        sb.append(", totalPedido:").append(totalPedido);
        sb.append(", nombreProducto:").append(nombreProducto);
        sb.append('}');
        return sb.toString();
    }
}
