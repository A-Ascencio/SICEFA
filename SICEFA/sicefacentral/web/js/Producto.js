/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
let productos;

function cargarCatProducto() {
    fetch("http://localhost:8080/sicefacentral/api/producto/getAll")
            .then(response => response.json()
            )
            .then(response => {
                let mostrar = "";
                productos = response;
                for (var i = 0; i < response.length; i++) {
                    if(response[i].estatus==1){
                    mostrar += '<tr>';

                    mostrar += '<td>' + response[i].nombre + '</td>';
                    mostrar += '<td>' + response[i].nombreGenerico + '</td>';
                    mostrar += '<td>' + response[i].formaFarmaceutica + '</td>';
                    
                    mostrar += '<td>' + response[i].concentracion + '</td>';
                    mostrar += '<td>' + response[i].unidadesEnvase + '</td>';
                    mostrar += '<td>' + response[i].precioVenta + '</td>';

                    mostrar += '<td> <button class="btn btn-warning btn-modificarC" data-bs-toggle="modal" data-bs-target="#formularioModal2" onclick="modificaProducto(' + i + ');"> <i class="bi bi-pencil"></i></button>' + '</td>';
                        mostrar += '<td> <button class="btn btn-danger btn-md" onclick="eliminarProducto(' + i + ');"><i class="bi bi-trash"></i></button>' + '</td>';
                    mostrar += '</tr>';
                }
                }

                document.getElementById("tblProducto").innerHTML = mostrar;

            });

}

function modificaProducto(i) {
    document.getElementById("txtIdProducto").value = productos[i].idProducto;
    document.getElementById("nombre").value = productos[i].nombre;
    document.getElementById("nombreGenerico").value = productos[i].nombreGenerico;
    document.getElementById("formaFarmaceutica").value = productos[i].formaFarmaceutica;
    document.getElementById("unidadMedida").value = productos[i].unidadMedida;
    document.getElementById("presentacion").value = productos[i].presentacion;
    document.getElementById("principalIndicacion").value = productos[i].principalIndicacion;
    document.getElementById("contraindicaciones").value = productos[i].contraindicaciones;
    document.getElementById("concentracion").value = productos[i].concentracion;
    document.getElementById("unidadesEnvase").value = productos[i].unidadesEnvase;
    document.getElementById("precioCompra").value = productos[i].precioCompra;
    document.getElementById("precioVenta").value = productos[i].precioVenta;
    document.getElementById("codigoBarras").value = productos[i].codigoBarras;
    document.getElementById("txtRutaFoto").value = productos[i].rutaFoto;
    let fotoBase64 = productos[i].foto;
    // Muestra la imagen base64
    mostrarImagenBase64(fotoBase64);

}

function InsertarProducto() {
    // Obtener los valores ingresados por el usuario en el formulario

    let nombre = document.getElementById("nombre").value;
    let nombreGenerico = document.getElementById("nombreGenerico").value;
    let formaFarmaceutica = document.getElementById("formaFarmaceutica").value;
    let unidadMedida = document.getElementById("unidadMedida").value;
    let presentacion = document.getElementById("presentacion").value;
    let principalIndicacion = document.getElementById("principalIndicacion").value;
    let contraindicaciones = document.getElementById("contraindicaciones").value;
    let concentracion = document.getElementById("concentracion").value;
    let unidadesEnvase = parseInt(document.getElementById("unidadesEnvase").value);
    let precioCompra = parseFloat(document.getElementById("precioCompra").value);
    let precioVenta = parseFloat(document.getElementById("precioVenta").value);
    let foto = document.getElementById("txtaCodigoImagen").value;
    let rutaFoto = document.getElementById("txtRutaFoto").value;
    let codigoBarras = document.getElementById("codigoBarras").value;

    // Obtener los valores para el objeto producto



    let Producto = {nombre: nombre, nombreGenerico: nombreGenerico, formaFarmaceutica: formaFarmaceutica, unidadMedida: unidadMedida, presentacion: presentacion, principalIndicacion: principalIndicacion, contraindicaciones: contraindicaciones, concentracion: concentracion, unidadesEnvase: unidadesEnvase,
        precioCompra: precioCompra, precioVenta: precioVenta, foto: foto, rutaFoto: rutaFoto, codigoBarras: codigoBarras};

    // Realizar la solicitud POST al servidor con el objeto producto
    let params = {p: JSON.stringify(Producto)};
    let ruta = "http://localhost:8080/sicefacentral/api/producto/insert";
    fetch(ruta,
            {method: "POST",
                headers: {'Content-Type':
                            'application/x-www-form-urlencoded;charset=UTF-8'},
                body: new URLSearchParams(params)
            })
            .then(response => response.json())
            .then(response => {
                if (response.result) {
                    Swal.fire("Insercion correcta", response.result, "success");
                }
                if (response.error) {
                    Swal.fire("Problemas para insertar", response.error, "error");
                }


            });
    limpiarCamposProductos();

}

function guardarCambiosProducto() {
    // Obtener los valores ingresados por el usuario en el formulario
    let idProducto = parseInt(document.getElementById("txtIdProducto").value);
    let nombre = document.getElementById("nombre").value;
    let nombreGenerico = document.getElementById("nombreGenerico").value;
    let formaFarmaceutica = document.getElementById("formaFarmaceutica").value;
    let unidadMedida = document.getElementById("unidadMedida").value;
    let presentacion = document.getElementById("presentacion").value;
    let principalIndicacion = document.getElementById("principalIndicacion").value;
    let contraindicaciones = document.getElementById("contraindicaciones").value;
    let concentracion = document.getElementById("concentracion").value;
    let unidadesEnvase = parseInt(document.getElementById("unidadesEnvase").value);
    let precioCompra = parseFloat(document.getElementById("precioCompra").value);
    let precioVenta = parseFloat(document.getElementById("precioVenta").value);
    let foto = document.getElementById("txtaCodigoImagen").value;
    let rutaFoto = document.getElementById("txtRutaFoto").value;
    let codigoBarras = document.getElementById("codigoBarras").value;


    let Producto = {idProducto: idProducto, nombre: nombre, nombreGenerico: nombreGenerico, formaFarmaceutica: formaFarmaceutica, unidadMedida: unidadMedida, presentacion: presentacion, principalIndicacion: principalIndicacion, contraindicaciones: contraindicaciones, concentracion: concentracion, unidadesEnvase: unidadesEnvase,
        precioCompra: precioCompra, precioVenta: precioVenta, foto: foto, rutaFoto: rutaFoto, codigoBarras: codigoBarras};

    let params = {p: JSON.stringify(Producto)};
    let ruta = "http://localhost:8080/sicefacentral/api/producto/modificar?"; // Cambiar la ruta según tu configuración

    fetch(ruta,
            {method: "POST",
                headers: {'Content-Type':
                            'application/x-www-form-urlencoded;charset=UTF-8'},
                body: new URLSearchParams(params)
            })
            .then(response => response.json())
            .then(response => {
                if (response.result) {
                    Swal.fire("Actualizacion correctaa", response.result, "success");
                }
                if (response.error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Problemas para insertar"
                    });
                }
            });


    console.log(JSON.stringify(Producto));
    alert(JSON.stringify(Producto));
    limpiarCamposProductos();

}

function eliminarProducto(i) {
    let idProduct = productos[i].idProducto;
    fetch("http://localhost:8080/sicefacentral/api/producto/delete?idE=" + idProduct)
            .then(response => response.json())
            .then(response => {
                Swal.fire(response.result, "Producto eliminado", "success");
            }
            );


}

function activarProducto(i) {
    let idProduct = productos[i].idProducto;
    fetch("http://localhost:8080/sicefacentral/api/producto/activar?idE=" + idProduct)
            .then(response => response.json())
            .then(response => {
                Swal.fire(response.result, "Producto activado", "success");
            }
            );
}

function seleccionarProducto() {
    let checkbox = document.getElementById("chkestatus");
    if (checkbox.checked) {
        fetch("http://localhost:8080/sicefacentral/api/producto/seleccionar?val=" + 0)
                .then(response => response.json())
                .then(response => {
                    let mostrar = "";
                    productos = response;
                    for (var i = 0; i < response.length; i++) {
                        mostrar += '<tr>';
                        mostrar += '<td>' + response[i].nombre + '</td>';
                        mostrar += '<td>' + response[i].nombreGenerico + '</td>';
                        mostrar += '<td>' + response[i].formaFarmaceutica + '</td>';
                        
                        mostrar += '<td>' + response[i].concentracion + '</td>';
                        mostrar += '<td>' + response[i].unidadesEnvase + '</td>';
                        mostrar += '<td>' + response[i].precioVenta + '</td>';

                        mostrar += '<td> <button class="btn btn-warning btn-modificarC" data-bs-toggle="modal" data-bs-target="#formularioModal2" onclick="modificaProducto(' + i + ');"> <i class="bi bi-pencil"></i></button>' + '</td>';
                        mostrar += '<td> <button class="btn btn-success btn-md" onclick="activarProducto(' + i + ');"><i class="bi bi-check"></i></button>' + '</td>';
                        mostrar += '</tr>';
                    }

                    document.getElementById("tblProducto").innerHTML = mostrar;
                }
                );
    } else {
        fetch("http://localhost:8080/sicefacentral/api/producto/seleccionar?val=" + 1)
                .then(response => response.json())
                .then(response => {
                    let mostrar = "";
                    productos = response;
                    for (var i = 0; i < response.length; i++) {
                        mostrar += '<tr>';
                        mostrar += '<td>' + response[i].nombre + '</td>';
                        mostrar += '<td>' + response[i].nombreGenerico + '</td>';
                        mostrar += '<td>' + response[i].formaFarmaceutica + '</td>';
                        
                        mostrar += '<td>' + response[i].concentracion + '</td>';
                        mostrar += '<td>' + response[i].unidadesEnvase + '</td>';
                        mostrar += '<td>' + response[i].precioVenta + '</td>';

                        mostrar += '<td> <button class="btn btn-warning btn-modificarC" data-bs-toggle="modal" data-bs-target="#formularioModal2" onclick="modificaProducto(' + i + ');"> <i class="bi bi-pencil"></i></button>' + '</td>';
                        mostrar += '<td> <button class="btn btn-danger btn-md" onclick="eliminarProducto(' + i + ');"><i class="bi bi-trash"></i></button>' + '</td>';
                        mostrar += '</tr>';
                    }

                    document.getElementById("tblProducto").innerHTML = mostrar;
                }
                );
    }
}






function buscarProducto() {
    let busqueda = document.getElementById("campoBusqueda").value;

    if (busqueda === "") {
        fetch("http://localhost:8080/sicefacentral/api/producto/getAll")
                .then(response => response.json()
                )
                .then(response => {
                    let mostrar = "";
                    productos = response;
                    for (var i = 0; i < response.length; i++) {
                        mostrar += '<tr>';
                        mostrar += '<td>' + response[i].nombre + '</td>';
                        mostrar += '<td>' + response[i].nombreGenerico + '</td>';
                        mostrar += '<td>' + response[i].formaFarmaceutica + '</td>';
                        
                        mostrar += '<td>' + response[i].concentracion + '</td>';
                        mostrar += '<td>' + response[i].unidadesEnvase + '</td>';
                        mostrar += '<td>' + response[i].precioVenta + '</td>';

                        mostrar += '<td> <button class="btn btn-warning btn-modificarC" data-bs-toggle="modal" data-bs-target="#formularioModal2" onclick="modificaProducto(' + i + ');"> <i class="bi bi-pencil"></i></button>' + '</td>';
                        mostrar += '<td> <button class="btn btn-danger btn-md" onclick="eliminarProducto(' + i + ');"><i class="bi bi-trash"></i></button>' + '</td>';
                        mostrar += '<td> <button class="btn btn-success btn-md" onclick="activarProducto(' + i + ');"><i class="bi bi-check"></i></button>' + '</td>';
                        mostrar += '</tr>';
                    }

                    document.getElementById("tblProducto").innerHTML = mostrar;


                });
    } else {
        fetch(`http://localhost:8080/sicefacentral/api/producto/buscar?valor=${busqueda}`)
                .then(response => response.json()
                )
                .then(response => {

                    document.getElementById("tblProducto").innerHTML = "";
                    let mostrar = "";
                    productos = response;
                    for (var i = 0; i < response.length; i++) {
                        mostrar += '<tr>';
                        mostrar += '<td>' + response[i].nombre + '</td>';
                        mostrar += '<td>' + response[i].nombreGenerico + '</td>';
                        mostrar += '<td>' + response[i].formaFarmaceutica + '</td>';
                        
                        mostrar += '<td>' + response[i].concentracion + '</td>';
                        mostrar += '<td>' + response[i].unidadesEnvase + '</td>';
                        mostrar += '<td>' + response[i].precioVenta + '</td>';

                        mostrar += '<td> <button class="btn btn-warning btn-modificarC" data-bs-toggle="modal" data-bs-target="#formularioModal2" onclick="modificaProducto(' + i + ');"> <i class="bi bi-pencil"></i></button>' + '</td>';
                        mostrar += '<td> <button class="btn btn-danger btn-md" onclick="eliminarProducto(' + i + ');"><i class="bi bi-trash"></i></button>' + '</td>';
                        mostrar += '<td> <button class="btn btn-success btn-md" onclick="activarProducto(' + i + ');"><i class="bi bi-check"></i></button>' + '</td>';
                        mostrar += '</tr>';
                    }

                    document.getElementById("tblProducto").innerHTML = mostrar;


                });
    }
}

function cargarFotografia(input) {
    let file = input.files[0];
    let reader = new FileReader();

    reader.onload = function (e) {
        let imgFoto = document.getElementById("imgFoto");
        imgFoto.src = e.target.result;

        let txtaCodigoImagen = document.getElementById("txtaCodigoImagen");
        txtaCodigoImagen.value = e.target.result;

        mostrarImagenBase64(e.target.result);
    };


    reader.readAsDataURL(file);
}



function mostrarImagenBase64(base64String) {

    let imgFoto = document.getElementById("imgFoto");
    imgFoto.src = base64String;

    let txtaCodigoImagen = document.getElementById("txtaCodigoImagen");
    txtaCodigoImagen.value = base64String;
}

function limpiarCamposProductos() {
    // Obtener referencias a los elementos del formulario
    var nombre = document.getElementById('nombre');
    var nombreGenerico = document.getElementById('nombreGenerico');
    var formaFarmaceutica = document.getElementById('formaFarmaceutica');
    var unidadMedida = document.getElementById('unidadMedida');
    var presentacion = document.getElementById('presentacion');
    var principalIndicacion = document.getElementById('principalIndicacion');
    var contraindicaciones = document.getElementById('contraindicaciones');
    var concentracion = document.getElementById('concentracion');
    var unidadesEnvase = document.getElementById('unidadesEnvase');
    var precioCompra = document.getElementById('precioCompra');
    var precioVenta = document.getElementById('precioVenta');
    var imgFoto = document.getElementById('imgFoto');
    var txtaCodigoImagen = document.getElementById('txtaCodigoImagen');
    var inputFileImagen = document.getElementById('inputFileImagen');
    var txtRutaFoto = document.getElementById('txtRutaFoto');
    var codigoBarras = document.getElementById('codigoBarras');
    var txtIdProducto = document.getElementById('txtIdProducto');

    // Limpiar el valor de cada campo
    nombre.value = '';
    nombreGenerico.value = '';
    formaFarmaceutica.value = '';
    unidadMedida.value = '';
    presentacion.value = '';
    principalIndicacion.value = '';
    contraindicaciones.value = '';
    concentracion.value = '';
    unidadesEnvase.value = '';
    precioCompra.value = '';
    precioVenta.value = '';
    imgFoto.src = '';
    txtaCodigoImagen.value = '';
    inputFileImagen.value = '';
    txtRutaFoto.value = '';
    codigoBarras.value = '';
    txtIdProducto.value = '';
}
