$(document).ready(function () {
    $(document).on('click', '.Status', function () {
        var idCompra = $(this).attr('idCompra')
        if (idCompra === "") {
            Swal.fire({
                title: "Proceso Fallido",
                text: "La informacion de la compra no se encontro, intentalo nuevamente",
                icon: "error"
            });
            return;
        }
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#20c997",
            cancelButtonColor: "#20c997",
            confirmButtonText: "Sí, eliminarlo"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8080/sicefasucursal/api/pedido/atendido?idCompra=${idCompra}`)
                        .then(response => response.json())
                        .then(data => {
                            if (data.result) {
                                console.log("La compra se atendió exitosamente.");
                                Swal.fire({
                                    title: "Proceso Exitoso",
                                    text: "La compra se atendió exitosamente.",
                                    icon: "success"
                                });
                                cargarCatalogoPedidos();
                                return;
                            } else {
                                console.log("No se pudo atender la compra.");
                                Swal.fire({
                                    title: "Proceso Fallido",
                                    text: "No se pudo atender la compra, intentalo nuevamente",
                                    icon: "error"
                                });
                                return;
                            }
                        })
                        .catch(error => {
                            console.error('Error en la petición:', error);
                        });
            }
        });
    })
    // Handler for .ready() called.
});



function cargarCatalogoPedidos() {
    fetch("http://localhost:8080/sicefasucursal/api/pedido/getAll")
            .then(response => response.json())
            .then(data => {
                var mostrar = data.map(item => {
                    var botton = '';
                    if (item.estatus == 1) {
                        botton = "<button class='btn btn-outline-primary Status' idCompra='" + item.idCompra + "'>Atendido</button>";
                    }
                    return "<tr>" +
                            "<td>" + (item.idCompra || "") + "</td>" +
                            "<td>" + (item.fechaHoraPedido || "") + "</td>" +
                            "<td>" + (item.empleado.sucursal.nombre || "") + "</td>" +
                            "<td>" + (item.empleado.persona.nombre || "") + "</td>" +
                            "<td>" + (item.empleado.sucursal.codigoPostal || "") + "</td>" +
                            "<td>" + (item.empleado.sucursal.ciudad + ", " + item.empleado.sucursal.estado || "") + "</td>" +
                            "<td>" + (item.totalPedido || "") + "</td>" +
                            "<td>" + (item.estatus || "") + "</td>" +
                            "<td>" + (item.nombreProducto || "") + "</td>" +
                            "<td><button class='btn btn-outline-secondary' onclick='SeleccionarEmpleado(" + (item.idCompra || "") + ");'>Seleccionar</button>\n\
                     <br><br><button class='btn btn-outline-danger' onclick='eliminarEmpleado(" + (item.idCompra || "") + ");'>Desactivar</button>\n\
                     <br><br>" + botton + "</td>" +
                            "</tr>";
                }).join("");

                document.getElementById("cargarCatalogoPedidos").innerHTML = mostrar;


            })
            .catch(error => console.error('Error al cargar datos:', error));
}


cargarCatalogoPedidos()