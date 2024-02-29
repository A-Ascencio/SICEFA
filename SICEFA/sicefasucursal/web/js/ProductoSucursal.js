/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

let productos;

function cargarCatProducto() {
    var radioButtons = document.getElementsByName('opcion');

    // Inicializar una variable para almacenar el valor seleccionado
    var opcion;

    // Iterar sobre los radio buttons para encontrar el seleccionado
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            // Obtener el valor del radio button seleccionado
            opcion = radioButtons[i].value;
            break; // Puedes salir del bucle una vez que encuentres el seleccionado
        }
    }

    if (opcion == null) {
        fetch("http://localhost:8080/sicefasucursal/api/productoSuc/getAllProductoSuc")
                .then(response => response.json()
                )
                .then(response => {
                    let mostrar = "";
                    productos = response;
                    for (var i = 0; i < response.length; i++) {
                        let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                        mostrar += '<tr>';
                        mostrar += '<td>' + response[i].Producto.idProducto + '</td>';
                        mostrar += '<td>' + response[i].Producto.nombre + '</td>';
                        mostrar += '<td>' + response[i].Producto.nombreGenerico + '</td>';
                        mostrar += '<td>' + response[i].Producto.formaFarmaceutica + '</td>';
                        mostrar += '<td>' + response[i].Producto.unidadMedida + '</td>';
                        mostrar += '<td>' + response[i].Producto.presentacion + '</td>';
                        mostrar += '<td>' + response[i].Producto.principalIndicacion + '</td>';
                        mostrar += '<td>' + response[i].Producto.contraindicaciones + '</td>';
                        mostrar += '<td>' + response[i].Producto.concentracion + '</td>';
                        mostrar += '<td>' + response[i].Producto.unidadesEnvase + '</td>';
                        mostrar += '<td>' + response[i].Producto.precioCompra + '</td>';
                        mostrar += '<td>' + response[i].Producto.precioVenta + '</td>';
                        mostrar += '<td>' + response[i].Producto.foto + '</td>';
                        mostrar += '<td>' + response[i].Producto.codigoBarras + '</td>';
                        mostrar += '<td>' + response[i].Producto.estatus + '</td>';
                        mostrar += '<td>' + response[i].existencias + '</td>';
                        mostrar += '<td>' + datos6 + '</td>';
                        mostrar += '</tr>';
                    }

                    document.getElementById("tblProductos").innerHTML = mostrar;
                });


    } else if (opcion == 1) {
        fetch("http://localhost:8080/sicefasucursal/api/productoSuc/getAllProductoSuc1")
                .then(response => response.json()
                )
                .then(response => {
                    let mostrar = "";
                    productos = response;
                    for (var i = 0; i < response.length; i++) {
                        let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                        mostrar += '<tr>';
                        mostrar += '<td>' + response[i].Producto.idProducto + '</td>';
                        mostrar += '<td>' + response[i].Producto.nombre + '</td>';
                        mostrar += '<td>' + response[i].Producto.nombreGenerico + '</td>';
                        mostrar += '<td>' + response[i].Producto.formaFarmaceutica + '</td>';
                        mostrar += '<td>' + response[i].Producto.unidadMedida + '</td>';
                        mostrar += '<td>' + response[i].Producto.presentacion + '</td>';
                        mostrar += '<td>' + response[i].Producto.principalIndicacion + '</td>';
                        mostrar += '<td>' + response[i].Producto.contraindicaciones + '</td>';
                        mostrar += '<td>' + response[i].Producto.concentracion + '</td>';
                        mostrar += '<td>' + response[i].Producto.unidadesEnvase + '</td>';
                        mostrar += '<td>' + response[i].Producto.precioCompra + '</td>';
                        mostrar += '<td>' + response[i].Producto.precioVenta + '</td>';
                        mostrar += '<td>' + response[i].Producto.foto + '</td>';
                        mostrar += '<td>' + response[i].Producto.codigoBarras + '</td>';
                        mostrar += '<td>' + response[i].Producto.estatus + '</td>';
                        mostrar += '<td>' + response[i].existencias + '</td>';
                        mostrar += '<td>' + datos6 + '</td>';
                        mostrar += '</tr>';
                    }

                    document.getElementById("tblProductos").innerHTML = mostrar;
                });
    } else if (opcion == 2) {
        fetch("http://localhost:8080/sicefasucursal/api/productoSuc/getAllProductoSuc2")
                .then(response => response.json()
                )
                .then(response => {
                    let mostrar = "";
                    productos = response;
                    for (var i = 0; i < response.length; i++) {
                        let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                        mostrar += '<tr>';
                        mostrar += '<td>' + response[i].Producto.idProducto + '</td>';
                        mostrar += '<td>' + response[i].Producto.nombre + '</td>';
                        mostrar += '<td>' + response[i].Producto.nombreGenerico + '</td>';
                        mostrar += '<td>' + response[i].Producto.formaFarmaceutica + '</td>';
                        mostrar += '<td>' + response[i].Producto.unidadMedida + '</td>';
                        mostrar += '<td>' + response[i].Producto.presentacion + '</td>';
                        mostrar += '<td>' + response[i].Producto.principalIndicacion + '</td>';
                        mostrar += '<td>' + response[i].Producto.contraindicaciones + '</td>';
                        mostrar += '<td>' + response[i].Producto.concentracion + '</td>';
                        mostrar += '<td>' + response[i].Producto.unidadesEnvase + '</td>';
                        mostrar += '<td>' + response[i].Producto.precioCompra + '</td>';
                        mostrar += '<td>' + response[i].Producto.precioVenta + '</td>';
                        mostrar += '<td>' + response[i].Producto.foto + '</td>';
                        mostrar += '<td>' + response[i].Producto.codigoBarras + '</td>';
                        mostrar += '<td>' + response[i].Producto.estatus + '</td>';
                        mostrar += '<td>' + response[i].existencias + '</td>';
                        mostrar += '<td>' + datos6 + '</td>';
                        mostrar += '</tr>';
                    }

                    document.getElementById("tblProductos").innerHTML = mostrar;
                });
    } else if (opcion == 3) {
        fetch("http://localhost:8080/sicefasucursal/api/productoSuc/getAllProductoSuc3")
                .then(response => response.json()
                )
                .then(response => {
                    let mostrar = "";
                    productos = response;
                    for (var i = 0; i < response.length; i++) {
                        let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                        mostrar += '<tr>';
                        mostrar += '<td>' + response[i].Producto.idProducto + '</td>';
                        mostrar += '<td>' + response[i].Producto.nombre + '</td>';
                        mostrar += '<td>' + response[i].Producto.nombreGenerico + '</td>';
                        mostrar += '<td>' + response[i].Producto.formaFarmaceutica + '</td>';
                        mostrar += '<td>' + response[i].Producto.unidadMedida + '</td>';
                        mostrar += '<td>' + response[i].Producto.presentacion + '</td>';
                        mostrar += '<td>' + response[i].Producto.principalIndicacion + '</td>';
                        mostrar += '<td>' + response[i].Producto.contraindicaciones + '</td>';
                        mostrar += '<td>' + response[i].Producto.concentracion + '</td>';
                        mostrar += '<td>' + response[i].Producto.unidadesEnvase + '</td>';
                        mostrar += '<td>' + response[i].Producto.precioCompra + '</td>';
                        mostrar += '<td>' + response[i].Producto.precioVenta + '</td>';
                        mostrar += '<td>' + response[i].Producto.foto + '</td>';
                        mostrar += '<td>' + response[i].Producto.codigoBarras + '</td>';
                        mostrar += '<td>' + response[i].Producto.estatus + '</td>';
                        mostrar += '<td>' + response[i].existencias + '</td>';
                        mostrar += '<td>' + datos6 + '</td>';
                        mostrar += '</tr>';
                    }

                    document.getElementById("tblProductos").innerHTML = mostrar;
                });
    } else if (opcion == 123) {
        fetch("http://localhost:8080/sicefasucursal/api/productoSuc/getAllProductoSuc")
                .then(response => response.json()
                )
                .then(response => {
                    let mostrar = "";
                    productos = response;
                    for (var i = 0; i < response.length; i++) {
                        let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                        mostrar += '<tr>';
                        mostrar += '<td>' + response[i].Producto.idProducto + '</td>';
                        mostrar += '<td>' + response[i].Producto.nombre + '</td>';
                        mostrar += '<td>' + response[i].Producto.nombreGenerico + '</td>';
                        mostrar += '<td>' + response[i].Producto.formaFarmaceutica + '</td>';
                        mostrar += '<td>' + response[i].Producto.unidadMedida + '</td>';
                        mostrar += '<td>' + response[i].Producto.presentacion + '</td>';
                        mostrar += '<td>' + response[i].Producto.principalIndicacion + '</td>';
                        mostrar += '<td>' + response[i].Producto.contraindicaciones + '</td>';
                        mostrar += '<td>' + response[i].Producto.concentracion + '</td>';
                        mostrar += '<td>' + response[i].Producto.unidadesEnvase + '</td>';
                        mostrar += '<td>' + response[i].Producto.precioCompra + '</td>';
                        mostrar += '<td>' + response[i].Producto.precioVenta + '</td>';
                        mostrar += '<td>' + response[i].Producto.foto + '</td>';
                        mostrar += '<td>' + response[i].Producto.codigoBarras + '</td>';
                        mostrar += '<td>' + response[i].Producto.estatus + '</td>';
                        mostrar += '<td>' + response[i].existencias + '</td>';
                        mostrar += '<td>' + datos6 + '</td>';
                        mostrar += '</tr>';
                    }

                    document.getElementById("tblProductos").innerHTML = mostrar;
                });
    }
}

function buscarInventario() {
    let busqueda = document.getElementById("campoBusqueda").value;
    var radioButtons = document.getElementsByName('opcion');

    // Inicializar una variable para almacenar el valor seleccionado
    var opcion;

    // Iterar sobre los radio buttons para encontrar el seleccionado
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            // Obtener el valor del radio button seleccionado
            opcion = radioButtons[i].value;
            break; // Puedes salir del bucle una vez que encuentres el seleccionado
        }
    }
    if (opcion == 1) {
        if (busqueda === "") {
            fetch("http://localhost:8080/sicefasucursal/api/productoSuc/getAllProductoSuc1")
                    .then(response => response.json()
                    )
                    .then(response => {
                        let mostrar = "";
                        productos = response;
                        for (var i = 0; i < response.length; i++) {
                            let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                            mostrar += '<tr>';
                            mostrar += '<td>' + response[i].Producto.idProducto + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombre + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombreGenerico + '</td>';
                            mostrar += '<td>' + response[i].Producto.formaFarmaceutica + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadMedida + '</td>';
                            mostrar += '<td>' + response[i].Producto.presentacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.principalIndicacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.contraindicaciones + '</td>';
                            mostrar += '<td>' + response[i].Producto.concentracion + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadesEnvase + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioCompra + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioVenta + '</td>';
                            mostrar += '<td>' + response[i].Producto.foto + '</td>';
                            mostrar += '<td>' + response[i].Producto.codigoBarras + '</td>';
                            mostrar += '<td>' + response[i].Producto.estatus + '</td>';
                            mostrar += '<td>' + response[i].existencias + '</td>';
                            mostrar += '<td>' + datos6 + '</td>';
                            mostrar += '</tr>';
                        }

                        document.getElementById("tblProductos").innerHTML = mostrar;
                    });

        } else {

            fetch(`http://localhost:8080/sicefasucursal/api/productoSuc/buscar1?valor=${busqueda}`)
                    .then(response => response.json()
                    )
                    .then(response => {

                        document.getElementById("tblProductos").innerHTML = "";
                        let mostrar = "";
                        productos = response;
                        for (var i = 0; i < response.length; i++) {
                            let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                            mostrar += '<tr>';
                            mostrar += '<td>' + response[i].Producto.idProducto + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombre + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombreGenerico + '</td>';
                            mostrar += '<td>' + response[i].Producto.formaFarmaceutica + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadMedida + '</td>';
                            mostrar += '<td>' + response[i].Producto.presentacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.principalIndicacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.contraindicaciones + '</td>';
                            mostrar += '<td>' + response[i].Producto.concentracion + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadesEnvase + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioCompra + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioVenta + '</td>';
                            mostrar += '<td>' + response[i].Producto.foto + '</td>';
                            mostrar += '<td>' + response[i].Producto.codigoBarras + '</td>';
                            mostrar += '<td>' + response[i].Producto.estatus + '</td>';
                            mostrar += '<td>' + response[i].existencias + '</td>';
                            mostrar += '<td>' + datos6 + '</td>';
                            mostrar += '</tr>';
                        }


                        document.getElementById("tblProductos").innerHTML = mostrar;


                    });

        }


    }
    else if (opcion == 2) {
        if (busqueda === "") {
            fetch("http://localhost:8080/sicefasucursal/api/productoSuc/getAllProductoSuc2")
                    .then(response => response.json()
                    )
                    .then(response => {
                        let mostrar = "";
                        productos = response;
                        for (var i = 0; i < response.length; i++) {
                            let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                            mostrar += '<tr>';
                            mostrar += '<td>' + response[i].Producto.idProducto + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombre + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombreGenerico + '</td>';
                            mostrar += '<td>' + response[i].Producto.formaFarmaceutica + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadMedida + '</td>';
                            mostrar += '<td>' + response[i].Producto.presentacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.principalIndicacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.contraindicaciones + '</td>';
                            mostrar += '<td>' + response[i].Producto.concentracion + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadesEnvase + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioCompra + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioVenta + '</td>';
                            mostrar += '<td>' + response[i].Producto.foto + '</td>';
                            mostrar += '<td>' + response[i].Producto.codigoBarras + '</td>';
                            mostrar += '<td>' + response[i].Producto.estatus + '</td>';
                            mostrar += '<td>' + response[i].existencias + '</td>';
                            mostrar += '<td>' + datos6 + '</td>';
                            mostrar += '</tr>';
                        }

                        document.getElementById("tblProductos").innerHTML = mostrar;
                    });

        } else {

            fetch(`http://localhost:8080/sicefasucursal/api/productoSuc/buscar2?valor=${busqueda}`)
                    .then(response => response.json()
                    )
                    .then(response => {

                        document.getElementById("tblProductos").innerHTML = "";
                        let mostrar = "";
                        productos = response;
                        for (var i = 0; i < response.length; i++) {
                            let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                            mostrar += '<tr>';
                            mostrar += '<td>' + response[i].Producto.idProducto + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombre + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombreGenerico + '</td>';
                            mostrar += '<td>' + response[i].Producto.formaFarmaceutica + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadMedida + '</td>';
                            mostrar += '<td>' + response[i].Producto.presentacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.principalIndicacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.contraindicaciones + '</td>';
                            mostrar += '<td>' + response[i].Producto.concentracion + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadesEnvase + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioCompra + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioVenta + '</td>';
                            mostrar += '<td>' + response[i].Producto.foto + '</td>';
                            mostrar += '<td>' + response[i].Producto.codigoBarras + '</td>';
                            mostrar += '<td>' + response[i].Producto.estatus + '</td>';
                            mostrar += '<td>' + response[i].existencias + '</td>';
                            mostrar += '<td>' + datos6 + '</td>';
                            mostrar += '</tr>';
                        }


                        document.getElementById("tblProductos").innerHTML = mostrar;


                    });

        }


    }
    else if (opcion == 3) {
        if (busqueda === "") {
            fetch("http://localhost:8080/sicefasucursal/api/productoSuc/getAllProductoSuc3")
                    .then(response => response.json()
                    )
                    .then(response => {
                        let mostrar = "";
                        productos = response;
                        for (var i = 0; i < response.length; i++) {
                            let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                            mostrar += '<tr>';
                            mostrar += '<td>' + response[i].Producto.idProducto + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombre + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombreGenerico + '</td>';
                            mostrar += '<td>' + response[i].Producto.formaFarmaceutica + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadMedida + '</td>';
                            mostrar += '<td>' + response[i].Producto.presentacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.principalIndicacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.contraindicaciones + '</td>';
                            mostrar += '<td>' + response[i].Producto.concentracion + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadesEnvase + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioCompra + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioVenta + '</td>';
                            mostrar += '<td>' + response[i].Producto.foto + '</td>';
                            mostrar += '<td>' + response[i].Producto.codigoBarras + '</td>';
                            mostrar += '<td>' + response[i].Producto.estatus + '</td>';
                            mostrar += '<td>' + response[i].existencias + '</td>';
                            mostrar += '<td>' + datos6 + '</td>';
                            mostrar += '</tr>';
                        }

                        document.getElementById("tblProductos").innerHTML = mostrar;
                    });

        } else {

            fetch(`http://localhost:8080/sicefasucursal/api/productoSuc/buscar3?valor=${busqueda}`)
                    .then(response => response.json()
                    )
                    .then(response => {

                        document.getElementById("tblProductos").innerHTML = "";
                        let mostrar = "";
                        productos = response;
                        for (var i = 0; i < response.length; i++) {
                            let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                            mostrar += '<tr>';
                            mostrar += '<td>' + response[i].Producto.idProducto + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombre + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombreGenerico + '</td>';
                            mostrar += '<td>' + response[i].Producto.formaFarmaceutica + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadMedida + '</td>';
                            mostrar += '<td>' + response[i].Producto.presentacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.principalIndicacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.contraindicaciones + '</td>';
                            mostrar += '<td>' + response[i].Producto.concentracion + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadesEnvase + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioCompra + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioVenta + '</td>';
                            mostrar += '<td>' + response[i].Producto.foto + '</td>';
                            mostrar += '<td>' + response[i].Producto.codigoBarras + '</td>';
                            mostrar += '<td>' + response[i].Producto.estatus + '</td>';
                            mostrar += '<td>' + response[i].existencias + '</td>';
                            mostrar += '<td>' + datos6 + '</td>';
                            mostrar += '</tr>';
                        }


                        document.getElementById("tblProductos").innerHTML = mostrar;


                    });

        }


    }
    else if (opcion ==123) {
        if (busqueda === "") {
            fetch("http://localhost:8080/sicefasucursal/api/productoSuc/getAllProductoSuc")
                    .then(response => response.json()
                    )
                    .then(response => {
                        let mostrar = "";
                        productos = response;
                        for (var i = 0; i < response.length; i++) {
                            let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                            mostrar += '<tr>';
                            mostrar += '<td>' + response[i].Producto.idProducto + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombre + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombreGenerico + '</td>';
                            mostrar += '<td>' + response[i].Producto.formaFarmaceutica + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadMedida + '</td>';
                            mostrar += '<td>' + response[i].Producto.presentacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.principalIndicacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.contraindicaciones + '</td>';
                            mostrar += '<td>' + response[i].Producto.concentracion + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadesEnvase + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioCompra + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioVenta + '</td>';
                            mostrar += '<td>' + response[i].Producto.foto + '</td>';
                            mostrar += '<td>' + response[i].Producto.codigoBarras + '</td>';
                            mostrar += '<td>' + response[i].Producto.estatus + '</td>';
                            mostrar += '<td>' + response[i].existencias + '</td>';
                            mostrar += '<td>' + datos6 + '</td>';
                            mostrar += '</tr>';
                        }

                        document.getElementById("tblProductos").innerHTML = mostrar;
                    });

        } else {

            fetch(`http://localhost:8080/sicefasucursal/api/productoSuc/buscar?valor=${busqueda}`)
                    .then(response => response.json()
                    )
                    .then(response => {

                        document.getElementById("tblProductos").innerHTML = "";
                        let mostrar = "";
                        productos = response;
                        for (var i = 0; i < response.length; i++) {
                            let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                            mostrar += '<tr>';
                            mostrar += '<td>' + response[i].Producto.idProducto + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombre + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombreGenerico + '</td>';
                            mostrar += '<td>' + response[i].Producto.formaFarmaceutica + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadMedida + '</td>';
                            mostrar += '<td>' + response[i].Producto.presentacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.principalIndicacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.contraindicaciones + '</td>';
                            mostrar += '<td>' + response[i].Producto.concentracion + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadesEnvase + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioCompra + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioVenta + '</td>';
                            mostrar += '<td>' + response[i].Producto.foto + '</td>';
                            mostrar += '<td>' + response[i].Producto.codigoBarras + '</td>';
                            mostrar += '<td>' + response[i].Producto.estatus + '</td>';
                            mostrar += '<td>' + response[i].existencias + '</td>';
                            mostrar += '<td>' + datos6 + '</td>';
                            mostrar += '</tr>';
                        }


                        document.getElementById("tblProductos").innerHTML = mostrar;


                    });

        }


    }
    else if (opcion ==null) {
        if (busqueda === "") {
            fetch("http://localhost:8080/sicefasucursal/api/productoSuc/getAllProductoSuc")
                    .then(response => response.json()
                    )
                    .then(response => {
                        let mostrar = "";
                        productos = response;
                        for (var i = 0; i < response.length; i++) {
                            let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                            mostrar += '<tr>';
                            mostrar += '<td>' + response[i].Producto.idProducto + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombre + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombreGenerico + '</td>';
                            mostrar += '<td>' + response[i].Producto.formaFarmaceutica + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadMedida + '</td>';
                            mostrar += '<td>' + response[i].Producto.presentacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.principalIndicacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.contraindicaciones + '</td>';
                            mostrar += '<td>' + response[i].Producto.concentracion + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadesEnvase + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioCompra + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioVenta + '</td>';
                            mostrar += '<td>' + response[i].Producto.foto + '</td>';
                            mostrar += '<td>' + response[i].Producto.codigoBarras + '</td>';
                            mostrar += '<td>' + response[i].Producto.estatus + '</td>';
                            mostrar += '<td>' + response[i].existencias + '</td>';
                            mostrar += '<td>' + datos6 + '</td>';
                            mostrar += '</tr>';
                        }

                        document.getElementById("tblProductos").innerHTML = mostrar;
                    });

        } else {

            fetch(`http://localhost:8080/sicefasucursal/api/productoSuc/buscar?valor=${busqueda}`)
                    .then(response => response.json()
                    )
                    .then(response => {

                        document.getElementById("tblProductos").innerHTML = "";
                        let mostrar = "";
                        productos = response;
                        for (var i = 0; i < response.length; i++) {
                            let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                            mostrar += '<tr>';
                            mostrar += '<td>' + response[i].Producto.idProducto + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombre + '</td>';
                            mostrar += '<td>' + response[i].Producto.nombreGenerico + '</td>';
                            mostrar += '<td>' + response[i].Producto.formaFarmaceutica + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadMedida + '</td>';
                            mostrar += '<td>' + response[i].Producto.presentacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.principalIndicacion + '</td>';
                            mostrar += '<td>' + response[i].Producto.contraindicaciones + '</td>';
                            mostrar += '<td>' + response[i].Producto.concentracion + '</td>';
                            mostrar += '<td>' + response[i].Producto.unidadesEnvase + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioCompra + '</td>';
                            mostrar += '<td>' + response[i].Producto.precioVenta + '</td>';
                            mostrar += '<td>' + response[i].Producto.foto + '</td>';
                            mostrar += '<td>' + response[i].Producto.codigoBarras + '</td>';
                            mostrar += '<td>' + response[i].Producto.estatus + '</td>';
                            mostrar += '<td>' + response[i].existencias + '</td>';
                            mostrar += '<td>' + datos6 + '</td>';
                            mostrar += '</tr>';
                        }


                        document.getElementById("tblProductos").innerHTML = mostrar;


                    });

        }


    }



}

