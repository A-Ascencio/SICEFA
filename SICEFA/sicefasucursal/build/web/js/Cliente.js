
let clientes;

function obtenerDatosCliente() {

    //agregar lo de persona

    let idP = document.getElementById("idPersona").value;
    let nombre = document.getElementById("nombre").value;
    let aP = document.getElementById("apellido_paterno").value;
    let aM = document.getElementById("apellido_materno").value;
    let g = document.getElementById("genero").value;
    let fn = document.getElementById("fecha_nacimiento").value;
    let rfc = document.getElementById("rfc").value;
    let curp = document.getElementById("curp").value;
    let dom = document.getElementById("domicilio").value;
    let cp = document.getElementById("codigo_postal").value;
    let ciudad = document.getElementById("ciudad").value;
    let edo = document.getElementById("estado").value;
    let tel = document.getElementById("telefono").value;
    let foto = document.getElementById("txtaCodigoImagen").value;

    //Enviar la funcion img a texto
    let persona = {idPersona: parseInt(idP), nombre: nombre, apellidoPaterno: aP, apellidoMaterno: aM, genero: g, fechaNacimiento: fn, rfc: rfc, curp: curp, domicilio: dom,
        codigoPostal: cp, ciudad: ciudad, estado: edo, telefono: tel, foto: foto};

    let idCliente = document.getElementById("idCliente").value;
    let estatus = document.getElementById("estatus").value;
    let email = document.getElementById("email").value;
    let fechaRegistro = document.getElementById("fechaRegistro").value;

    let cliente = {idCliente: parseInt(idCliente), estatus: parseInt(estatus), email: email, fechaRegistro: fechaRegistro, Persona: persona};

    let params = {c: JSON.stringify(cliente)};

    let ruta = "http://localhost:8080/sicefasucursal/api/cliente/insert?";
    fetch(ruta,
            {method: "POST",
                headers: {'Content-Type':
                            'application/x-www-form-urlencoded;charset=UTF-8'},
                body: new URLSearchParams(params)
            })
            .then(response => response.json())
            .then(response => {
                if (response.result) {
                    Swal.fire("Insercion de cliente correcta", response.result, "success");
                }
                if (response.error) {
                    Swal.fire("Problemas para insertar cliente", response.error, "error");
                }


            });

    limpiarCampos();

}

function cargarCatCliente() {
    fetch("http://localhost:8080/sicefasucursal/api/cliente/getAll")
            .then(response => response.json()
            )
            .then(response => {
                let mostrar = "";
                clientes = response;
                for (var i = 0; i < response.length; i++) {
                    if (response[i].estatus == 1) {
                        let datos1 = response[i].fechaRegistro + "-" + response[i].email + "-" + response[i].Persona.genero;
                        let datos2 = response[i].Persona.nombre + " " + response[i].Persona.apellidoPaterno + " " + response[i].Persona.apellidoMaterno;
                        let datos3 = response[i].Persona.fechaNacimiento + " - " + response[i].Persona.rfc + " - " + response[i].Persona.curp;
                        let datos4 = response[i].Persona.domicilio + " - " + response[i].Persona.codigoPostal + " - " + response[i].Persona.ciudad + " - " + response[i].Persona.estado;

                        mostrar += '<tr>';
                        mostrar += '<td>' + datos1 + '</td>';
                        mostrar += '<td>' + datos2 + '</td>';

                        mostrar += '<td>' + datos4 + '</td>';
                        mostrar += '<td>' + response[i].Persona.telefono + '</td>';
//                    mostrar+='<td>' + response[i].Persona.foto + '</td>';
                        mostrar += '<td> <button class="btn btn-warning btn-modificarC" data-bs-toggle="modal" data-bs-target="#formularioModal2" onclick="modificarCliente(' + i + '),recargarTabla();"><i class="bi bi-pencil"></i></button>' + '</td>';
                        mostrar += '<td> <button class="btn btn-danger btn-md" onclick="eliminarCliente(' + i + ');"><i class="bi bi-trash"></i></button>' + '</td>';
                        mostrar += '</tr>';
                    }
                }

                document.getElementById("tblCliente").innerHTML = mostrar;
            });

}

function modificarCliente(i) {

    document.getElementById("idPersona").value = clientes[i].Persona.idPersona;
    document.getElementById("nombre").value = clientes[i].Persona.nombre;
    document.getElementById("apellido_paterno").value = clientes[i].Persona.apellidoPaterno;
    document.getElementById("apellido_materno").value = clientes[i].Persona.apellidoMaterno;
    document.getElementById("genero").value = clientes[i].Persona.genero;
    document.getElementById("fecha_nacimiento").value = clientes[i].Persona.fechaNacimiento;
    document.getElementById("rfc").value = clientes[i].Persona.rfc;
    document.getElementById("curp").value = clientes[i].Persona.curp;
    document.getElementById("domicilio").value = clientes[i].Persona.domicilio;
    document.getElementById("codigo_postal").value = clientes[i].Persona.codigoPostal;
    document.getElementById("ciudad").value = clientes[i].Persona.ciudad;
    document.getElementById("estado").value = clientes[i].Persona.estado;
    document.getElementById("telefono").value = clientes[i].Persona.telefono;


    document.getElementById("idCliente").value = clientes[i].idCliente;
    document.getElementById("estatus").value = clientes[i].estatus;
    document.getElementById("email").value = clientes[i].email;
    document.getElementById("fechaRegistro").value = clientes[i].fechaRegistro;

}

function eliminarCliente(i) {
    let idCliente = clientes[i].idCliente;
    fetch("http://localhost:8080/sicefasucursal/api/cliente/delete?idCliente=" + idCliente)
            .then(response => response.json())
            .then(response => {
                Swal.fire(response.result, "Cliente eliminado correctamente", "success");
            }
            );
   
}

function activarCliente(i) {
    let idCliente = clientes[i].idCliente;
    fetch("http://localhost:8080/sicefasucursal/api/cliente/activar?idCliente=" + idCliente)
            .then(response => response.json())
            .then(response => {
                Swal.fire(response.result, "Cliente activado correctamente", "success");
            }
            );
    recargarTabla();
}

function  moddCliente() {
    //agregar lo de persona

    let idP = document.getElementById("idPersona").value;
    let nombre = document.getElementById("nombre").value;
    let aP = document.getElementById("apellido_paterno").value;
    let aM = document.getElementById("apellido_materno").value;
    let g = document.getElementById("genero").value;
    let fn = document.getElementById("fecha_nacimiento").value;
    let rfc = document.getElementById("rfc").value;
    let curp = document.getElementById("curp").value;
    let dom = document.getElementById("domicilio").value;
    let cp = document.getElementById("codigo_postal").value;
    let ciudad = document.getElementById("ciudad").value;
    let edo = document.getElementById("estado").value;
    let tel = document.getElementById("telefono").value;
    let foto = document.getElementById("txtaCodigoImagen").value;

    //Enviar la funcion img a texto
    let persona = {idPersona: parseInt(idP), nombre: nombre, apellidoPaterno: aP, apellidoMaterno: aM, genero: g, fechaNacimiento: fn, rfc: rfc, curp: curp, domicilio: dom,
        codigoPostal: cp, ciudad: ciudad, estado: edo, telefono: tel, foto: foto};

    let idC = document.getElementById("idCliente").value;
    let estatus = document.getElementById("estatus").value;
    let email = document.getElementById("email").value;
    let fechaRegistro = document.getElementById("fechaRegistro").value;

    let cliente = {idCliente: parseInt(idC), estatus: parseInt(estatus), email: email, fechaRegistro: fechaRegistro, Persona: persona};

    let params = {c: JSON.stringify(cliente)};

    let ruta = "http://localhost:8080/sicefasucursal/api/cliente/update?";
    fetch(ruta,
            {method: "POST",
                headers: {'Content-Type':
                            'application/x-www-form-urlencoded;charset=UTF-8'},
                body: new URLSearchParams(params)
            })
            .then(response => response.json())
            .then(response => {
                if (response.result) {
                    Swal.fire("Actualizacion de cliente correcta", response.result, "success");
                }
                if (response.error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Problemas para modificar cliente"
                    });
                }
                cargarCatalogoClientes();

            });
    limpiarCampos();
}

function buscarCliente() {
    let busqueda = document.getElementById("campoBusqueda").value;

    if (busqueda === "") {
        return;
    }

    let checkbox = document.getElementById("chkestatus");
    if (checkbox.checked) {
        fetch(`http://localhost:8080/sicefasucursal/api/cliente/buscar?valor=${busqueda}`)
                .then(response => response.json()
                )
                .then(response => {

                    document.getElementById("tblCliente").innerHTML = "";
                    let mostrar = "";
                    clientes = response;


                    for (var i = 0; i < response.length; i++) {
                        if (response[i].estatus == 0) {
                            let datos1 = response[i].fechaRegistro + "-" + response[i].email + "-" + response[i].Persona.genero;
                            let datos2 = response[i].Persona.nombre + " " + response[i].Persona.apellidoPaterno + " " + response[i].Persona.apellidoMaterno;
                            let datos3 = response[i].Persona.fechaNacimiento + " - " + response[i].Persona.rfc + " - " + response[i].Persona.curp;
                            let datos4 = response[i].Persona.domicilio + " - " + response[i].Persona.codigoPostal + " - " + response[i].Persona.ciudad + " - " + response[i].Persona.estado;

                            mostrar += '<tr>';
                            mostrar += '<td>' + datos1 + '</td>';
                            mostrar += '<td>' + datos2 + '</td>';

                            mostrar += '<td>' + datos4 + '</td>';
                            mostrar += '<td>' + response[i].Persona.telefono + '</td>';
//                    mostrar+='<td>' + response[i].Persona.foto + '</td>';
                            mostrar += '<td> <button class="btn btn-warning btn-modificarC" data-bs-toggle="modal" data-bs-target="#formularioModal2" onclick="modificarCliente(' + i + ');"><i class="bi bi-pencil"></i></button>' + '</td>';
                            mostrar += '<td> <button class="btn btn-success btn-md" onclick="activarCliente(' + i + ');"><i class="bi bi-check"></i></button>' + '</td>';
                            mostrar += '</tr>';
                        }
                    }
                    document.getElementById("tblCliente").innerHTML = mostrar;



                });
    } else {
        fetch(`http://localhost:8080/sicefasucursal/api/cliente/buscar?valor=${busqueda}`)
                .then(response => response.json()
                )
                .then(response => {

                    document.getElementById("tblCliente").innerHTML = "";
                    let mostrar = "";
                    clientes = response;


                    for (var i = 0; i < response.length; i++) {
                        if (response[i].estatus == 1) {
                            let datos1 = response[i].fechaRegistro + "-" + response[i].email + "-" + response[i].Persona.genero;
                            let datos2 = response[i].Persona.nombre + " " + response[i].Persona.apellidoPaterno + " " + response[i].Persona.apellidoMaterno;
                            let datos3 = response[i].Persona.fechaNacimiento + " - " + response[i].Persona.rfc + " - " + response[i].Persona.curp;
                            let datos4 = response[i].Persona.domicilio + " - " + response[i].Persona.codigoPostal + " - " + response[i].Persona.ciudad + " - " + response[i].Persona.estado;

                            mostrar += '<tr>';
                            mostrar += '<td>' + datos1 + '</td>';
                            mostrar += '<td>' + datos2 + '</td>';

                            mostrar += '<td>' + datos4 + '</td>';
                            mostrar += '<td>' + response[i].Persona.telefono + '</td>';
//                    mostrar+='<td>' + response[i].Persona.foto + '</td>';
                            mostrar += '<td> <button class="btn btn-warning btn-modificarC" data-bs-toggle="modal" data-bs-target="#formularioModal2" onclick="modificarCliente(' + i + ');"><i class="bi bi-pencil"></i></button>' + '</td>';
                            mostrar += '<td> <button class="btn btn-danger btn-md" onclick="eliminarCliente(' + i + ');"><i class="bi bi-trash"></i></button>' + '</td>';
                            mostrar += '</tr>';
                        }
                    }
                    document.getElementById("tblCliente").innerHTML = mostrar;


                });

    }
}

function selecionarCliente() {
    let checkbox = document.getElementById("chkestatus");
    if (checkbox.checked) {
        fetch("http://localhost:8080/sicefasucursal/api/cliente/seleccionar?val=" + 0)
                .then(response => response.json())
                .then(response => {
                    let mostrar = "";
                    clientes = response;
                    for (var i = 0; i < response.length; i++) {

                        let datos1 = response[i].fechaRegistro + "-" + response[i].email + "-" + response[i].Persona.genero;
                        let datos2 = response[i].Persona.nombre + " " + response[i].Persona.apellidoPaterno + " " + response[i].Persona.apellidoMaterno;
                        let datos3 = response[i].Persona.fechaNacimiento + " - " + response[i].Persona.rfc + " - " + response[i].Persona.curp;
                        let datos4 = response[i].Persona.domicilio + " - " + response[i].Persona.codigoPostal + " - " + response[i].Persona.ciudad + " - " + response[i].Persona.estado;

                        mostrar += '<tr>';
                        mostrar += '<td>' + datos1 + '</td>';
                        mostrar += '<td>' + datos2 + '</td>';

                        mostrar += '<td>' + datos4 + '</td>';
                        mostrar += '<td>' + response[i].Persona.telefono + '</td>';
//                    mostrar+='<td>' + response[i].Persona.foto + '</td>';
                        mostrar += '<td> <button class="btn btn-warning btn-modificarC" data-bs-toggle="modal" data-bs-target="#formularioModal2" onclick="modificarCliente(' + i + ');"><i class="bi bi-pencil"></i></button>' + '</td>';
                        mostrar += '<td> <button class="btn btn-success btn-md" onclick="activarCliente(' + i + ');"><i class="bi bi-check"></i></button>' + '</td>';
                        mostrar += '</tr>';
                    }

                    document.getElementById("tblCliente").innerHTML = mostrar;
                }
                );
    } else {
        fetch("http://localhost:8080/sicefasucursal/api/cliente/seleccionar?val=" + 1)
                .then(response => response.json())
                .then(response => {
                    let mostrar = "";
                    clientes = response;
                    for (var i = 0; i < response.length; i++) {
                        let datos1 = response[i].fechaRegistro + "-" + response[i].email + "-" + response[i].Persona.genero;
                        let datos2 = response[i].Persona.nombre + " " + response[i].Persona.apellidoPaterno + " " + response[i].Persona.apellidoMaterno;
                        let datos3 = response[i].Persona.fechaNacimiento + " - " + response[i].Persona.rfc + " - " + response[i].Persona.curp;
                        let datos4 = response[i].Persona.domicilio + " - " + response[i].Persona.codigoPostal + " - " + response[i].Persona.ciudad + " - " + response[i].Persona.estado;

                        mostrar += '<tr>';
                        mostrar += '<td>' + datos1 + '</td>';
                        mostrar += '<td>' + datos2 + '</td>';

                        mostrar += '<td>' + datos4 + '</td>';
                        mostrar += '<td>' + response[i].Persona.telefono + '</td>';
//                    mostrar+='<td>' + response[i].Persona.foto + '</td>';
                        mostrar += '<td> <button class="btn btn-warning btn-modificarC" data-bs-toggle="modal" data-bs-target="#formularioModal2" onclick="modificarCliente(' + i + ');"><i class="bi bi-pencil"></i></button>' + '</td>';
                        mostrar += '<td> <button class="btn btn-danger btn-md" onclick="eliminarCliente(' + i + ');"><i class="bi bi-trash"></i></button>' + '</td>';
                        mostrar += '</tr>';
                    }

                    document.getElementById("tblCliente").innerHTML = mostrar;
                }
                );
    }
}

function leerFoto()
{
    inputFile = document.getElementById("inputFileImagen");
    inputFile.onchange = function (evt) {
        cargarFotografia(inputFile);
    };
}



function cargarFotografia(objetoInputFile)
{
    //Revisamos que el usuario haya seleccionado un archivo:
    if (objetoInputFile.files && objetoInputFile.files[0])
    {
        let reader = new FileReader();
        //Agregamos un oyente al lector del archivo para que,
        //en cuanto el usuario cargue una imagen, esta se lea
        //y se convierta de forma automatica en una cadena de Base64:
        reader.onload = function (c)
        {
            let fotoB64 = c.target.result;
            document.getElementById("imgFoto").src = fotoB64;
            document.getElementById("txtaCodigoImagen").value = fotoB64;
        };
        //Leemos el archivo que selecciono el usuario y lo
        //convertimos en una cadena con la Base64:
        reader.readAsDataURL(objetoInputFile.files[0]);
    }
}

function limpiarCampos() {
    // Obtener referencias a los elementos del formulario
    var idPersona = document.getElementById('idPersona');
    var idCliente = document.getElementById('idCliente');
    var nombre = document.getElementById('nombre');
    var apellidoPaterno = document.getElementById('apellido_paterno');
    var apellidoMaterno = document.getElementById('apellido_materno');
    var genero = document.getElementById('genero');
    var estatus = document.getElementById('estatus');
    var fechaNacimiento = document.getElementById('fecha_nacimiento');
    var curp = document.getElementById('curp');
    var rfc = document.getElementById('rfc');
    var estado = document.getElementById('estado');
    var ciudad = document.getElementById('ciudad');
    var codigoPostal = document.getElementById('codigo_postal');
    var domicilio = document.getElementById('domicilio');
    var telefono = document.getElementById('telefono');
    var email = document.getElementById('email');
    var fechaRegistro = document.getElementById('fechaRegistro');

    // Limpiar el valor de cada campo
    idPersona.value = '';
    idCliente.value = '';
    nombre.value = '';
    apellidoPaterno.value = '';
    apellidoMaterno.value = '';
    genero.value = '';
    estatus.value = '';
    fechaNacimiento.value = '';
    curp.value = '';
    rfc.value = '';
    estado.value = '';
    ciudad.value = '';
    codigoPostal.value = '';
    domicilio.value = '';
    telefono.value = '';
    email.value = '';
    fechaRegistro.value = '';
}
function limpiarCheckbox() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
}
function recargarTabla() {
    // Supongamos que la tabla tiene el id "miTabla"
    $('#tblCliente').load(location.href + ' #tblCliente');
}

var m1 = false;
var m2 = false;
var m3 = false;
var m4 = false;
var m5 = false;
var m6 = false;
var m7 = false;
var m8 = false;
var m9 = false;
var m10 = false;
var m11 = false;
var m12 = false;
var m13 = false;
var m14 = false;
var m15 = false;
var m16 = false;

function validarCampos() {
    const nombre = document.getElementById('nombre').value;
    const apellido_paterno = document.getElementById('apellido_paterno').value;
    const apellido_materno = document.getElementById('apellido_materno').value;
    const genero = document.getElementById('genero').value;
    const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
    const rfc = document.getElementById('rfc').value;
    const curp = document.getElementById('curp').value;
    const domicilio = document.getElementById('domicilio').value;
    const codigo_postal = document.getElementById('codigo_postal').value;
    const ciudad = document.getElementById('ciudad').value;
    const estado = document.getElementById('estado').value;
    const telefono = document.getElementById('telefono').value;
    const txtaCodigoImagen = document.getElementById('txtaCodigoImagen').value;
    const email = document.getElementById('email').value;
    const estatus = document.getElementById('estatus').value;
    const fechaRegistro = document.getElementById('fechaRegistro').value;

    if (nombre === "") {
        alert("Ingrese un nombre");
        document.getElementById("nombre").focus();
        return false;
    } else {
        validarNombre(nombre);
    }

    if (apellido_paterno === "") {
        alert("Ingrese un apellido paterno");
        document.getElementById("apellido_paterno").focus();
        return false;
    } else {
        validarPaterno(apellido_paterno);
    }

    if (apellido_materno === "") {
        alert("Ingrese un apellido materno");
        document.getElementById("apellido_materno").focus();
        return false;
    } else {
        validarMaterno(apellido_materno);
    }

    if (genero === "") {
        alert("Ingrese un genero.");
        document.getElementById("genero").focus();
        return false;
    }    else{
        m4=true;
}
    
    if (estatus === "") {
        alert("Ingrese un estatus.");
        document.getElementById("estatus").focus();
        return false;
    } else{
        m5=true;
}

    if (fecha_nacimiento === "") {
        alert("Ingrese la fecha de nacimiento");
        document.getElementById("fecha_nacimiento").focus();
        return false;
    } else{
        m6=true;
}

    if (curp === "") {
        alert("Ingrese un curp");
        document.getElementById("curp").focus();
        return false;
    } else {
        validarCurp(curp);
    }

    if (rfc === "") {
        alert("Ingrese un rfc");
        document.getElementById("rfc").focus();
        return false;
    } else {
        validarRfc(rfc);
    }
    
    if (txtaCodigoImagen === "") {
        alert("Ingrese una imagen");
        document.getElementById("txtaCodigoImagen").focus();
        return false;
    }else{
        m9=true;
}

    if (estado === "") {
        alert("Ingrese un estado");
        document.getElementById("estado").focus();
        return false;
    }else{
        m10=true;
}
    
    if (ciudad === "") {
        alert("Ingrese una  ciudad");
        document.getElementById("ciudad").focus();
        return false;
    } else {
        validarCiudad(ciudad);
    }
    
       if (codigo_postal === "") {
        alert("Ingrese un codigo postal");
        document.getElementById("codigo_postal").focus();
        return false;
    } else {
        validarCp(codigo_postal);
    }
    
    if (domicilio === "") {
        alert("Ingrese un domicilio");
        document.getElementById("domicilio").focus();
        return false;
    } else {
        validarDomicilio(domicilio);
    }

    if (telefono === "") {
        alert("Ingrese un telefono");
        document.getElementById("telefono").focus();
        return false;
    } else {
        validarTel(telefono);
    }
    
    if (email === "") {
        alert("Ingrese un email adecuado.");
        document.getElementById("email").focus();
        return false;
    } else {
        validarCorreo(email);
    }
    if (fechaRegistro === "") {
        alert("Ingrese la fecha de Registro");
        document.getElementById("fechaRegistro").focus();
        return false;
        } else{
        m16=true;
}
    
    if (m1 == true && m2 == true && m3 == true && m4 == true && m5 == true && m6 == true && m7 == true && m8 == true && m9 == true && m10 == true && m11 == true && m12 == true && m13 == true && m14 == true&& m15 == true&& m16 == true) {
        obtenerDatosCliente();
        m1 = false;
        m2 = false;
        m3 = false;
        m4 = false;
        m5 = false;
        m6 = false;
        m7 = false;
        m8 = false;
        m9 = false;
        m10 = false;
        m11 = false;
        m12 = false;
        m13 = false;
        m14 = false;
        m15 = false;
        m16 = false;
    }
    
}

function validarNombre(nombre) {
    let nombreSinEspacios = nombre.toLowerCase();
   const regex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    if (!regex.test(nombreSinEspacios)) {
        alert("El nombre solo puede contener letras.");
        document.getElementById("nombre").focus();
        return false;
    }else
        m1=true;
}

function validarPaterno(apellido_paterno) {
    let paternoSinEspacios = apellido_paterno.toLowerCase();
    const regex = /^[A-Za-z]+$/;
    if (!regex.test(paternoSinEspacios)) {
        alert("El apellido paterno solo puede contener letras y sin esapacio.");
        document.getElementById("apellido_paterno").focus();
        return false;
    }else
        m2=true;
}

function validarMaterno(apellido_materno) {
    let maternoSinEspacios = apellido_materno.toLowerCase();
    const regex = /^[A-Za-z]+$/;
    if (!regex.test(maternoSinEspacios)) {
        alert("El apellido materno solo puede contener letras y sin espacio.");
        document.getElementById("apellido_materno").focus();
    }else
        m3=true;
}

function validarRfc(rfc) {
    const regex = /^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;
    if (!regex.test(rfc)) {
        alert("El RFC debe tener un formato válido. \nEjemplo: \nABCD123456AB1");
        document.getElementById("rfc").focus();
        return false;
    }else
        m7=true;
}

function validarCurp(curp) {
    const regex = /^[A-Z]{4}[0-9]{6}[HM][A-Z]{6}[0-9]{1}$/;
    if (!regex.test(curp)) {
        alert("El CURP debe tener un formato válido. \nEjemplo: \nASDC123456HASDFGH1");
        document.getElementById("curp").focus();
        return false;
    }else
        m8=true;
}

function validarDomicilio(domicilio) {
//    let dom = domicilio.replace(/\s/g, "_");
   const regex = /^[A-Za-z]+(?:\s{1}[A-Za-z]+)*\s{1}\d{3}$/;
//    if (!regex.test(dom)) {
        if (!regex.test(domicilio)) {
        alert("El domicilio debe tener un formato valido. \nEjemplo: \n Ejemplo 123");
        document.getElementById("domicilio").focus();
        return false;
     }else
        m13=true;
}

function validarCp(codigo_postal) {
    const regex = /^[0-9]{5}$/;
    if (!regex.test(codigo_postal)) {
        alert("El código postal debe tener 5 dígitos numéricos. \nEjemplo: \n12345");
        document.getElementById("codigo_postal").focus();
        return false;
   }else
        m12=true;
}

function validarCiudad(ciudad) {
    let ciudadSinEspacios = ciudad.toLowerCase();
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(ciudadSinEspacios)) {
        alert("La ciudad solo debe de estar escrita con letras \nEjemplo: \nEjemplo");
        document.getElementById("ciudad").focus();
        return false;
    }else
        m11=true;

}

function validarTel(telefono) {
    const regex = /^[0-9]{10}$/;
    if (!regex.test(telefono)) {
        alert("El teléfono debe tener 10 dígitos numéricos. \nEjemplo: \n1234567890");
        document.getElementById("telefono").focus();
        return false;
    }else
        m14=true;
}

//function validarImmg(txtaCodigoImagen) {
//   const regex = /^[A-Za-z0-9]+\.([A-Za-z]+)$/;
//
//    if (!regex.test(txtaCodigoImagen)) {
//        alert("La imagen debe de estar nombrada conn un formato correcto.");
//        return false;
//    }
//}

function validarCorreo(){
    const email = document.getElementById("email").value;
    const valemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(valemail === false){
        alert("Email incorrecto \nEjemplo: \nejemplo@ejemplo.com");
  }else
        m15=true;
}

document.getElementById("registrar").addEventListener("click", function (event) {
    event.preventDefault();
    validarCampos();
});

function validarCampos2() {
    const nombre = document.getElementById('nombre').value;
    const apellido_paterno = document.getElementById('apellido_paterno').value;
    const apellido_materno = document.getElementById('apellido_materno').value;
    const genero = document.getElementById('genero').value;
    const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
    const rfc = document.getElementById('rfc').value;
    const curp = document.getElementById('curp').value;
    const domicilio = document.getElementById('domicilio').value;
    const codigo_postal = document.getElementById('codigo_postal').value;
    const ciudad = document.getElementById('ciudad').value;
    const estado = document.getElementById('estado').value;
    const telefono = document.getElementById('telefono').value;
    const txtaCodigoImagen = document.getElementById('txtaCodigoImagen').value;
    const email = document.getElementById('email').value;
    const estatus = document.getElementById('estatus').value;
    const fechaRegistro = document.getElementById('fechaRegistro').value;

    if (nombre === "") {
        alert("Ingrese un nombre");
        document.getElementById("nombre").focus();
        return false;
    } else {
        validarNombre(nombre);
    }

    if (apellido_paterno === "") {
        alert("Ingrese un apellido paterno");
        document.getElementById("apellido_paterno").focus();
        return false;
    } else {
        validarPaterno(apellido_paterno);
    }

    if (apellido_materno === "") {
        alert("Ingrese un apellido materno");
        document.getElementById("apellido_materno").focus();
        return false;
    } else {
        validarMaterno(apellido_materno);
    }

    if (genero === "") {
        alert("Ingrese un genero.");
        document.getElementById("genero").focus();
        return false;
    }    else{
        m4=true;
}
    
    if (estatus === "") {
        alert("Ingrese un estatus.");
        document.getElementById("estatus").focus();
        return false;
    } else{
        m5=true;
}

    if (fecha_nacimiento === "") {
        alert("Ingrese la fecha de nacimiento");
        document.getElementById("fecha_nacimiento").focus();
        return false;
    } else{
        m6=true;
}

    if (curp === "") {
        alert("Ingrese un curp");
        document.getElementById("curp").focus();
        return false;
    } else {
        validarCurp(curp);
    }

    if (rfc === "") {
        alert("Ingrese un rfc");
        document.getElementById("rfc").focus();
        return false;
    } else {
        validarRfc(rfc);
    }
    
    if (txtaCodigoImagen === "") {
        alert("Ingrese una imagen");
        document.getElementById("txtaCodigoImagen").focus();
        return false;
    }else{
        m9=true;
}

    if (estado === "") {
        alert("Ingrese un estado");
        document.getElementById("estado").focus();
        return false;
    }else{
        m10=true;
}
    
    if (ciudad === "") {
        alert("Ingrese una  ciudad");
        document.getElementById("ciudad").focus();
        return false;
    } else {
        validarCiudad(ciudad);
    }
    
       if (codigo_postal === "") {
        alert("Ingrese un codigo postal");
        document.getElementById("codigo_postal").focus();
        return false;
    } else {
        validarCp(codigo_postal);
    }
    
    if (domicilio === "") {
        alert("Ingrese un domicilio");
        document.getElementById("domicilio").focus();
        return false;
    } else {
        validarDomicilio(domicilio);
    }

    if (telefono === "") {
        alert("Ingrese un telefono");
        document.getElementById("telefono").focus();
        return false;
    } else {
        validarTel(telefono);
    }
    
    if (email === "") {
        alert("Ingrese un email adecuado.");
        document.getElementById("email").focus();
        return false;
    } else {
        validarCorreo(email);
    }
    if (fechaRegistro === "") {
        alert("Ingrese la fecha de Registro");
        document.getElementById("fechaRegistro").focus();
        return false;
        } else{
        m16=true;
}
    
    if (m1 == true && m2 == true && m3 == true && m4 == true && m5 == true && m6 == true && m7 == true && m8 == true && m9 == true && m10 == true && m11 == true && m12 == true && m13 == true && m14 == true&& m15 == true&& m16 == true) {
        moddCliente();
        m1 = false;
        m2 = false;
        m3 = false;
        m4 = false;
        m5 = false;
        m6 = false;
        m7 = false;
        m8 = false;
        m9 = false;
        m10 = false;
        m11 = false;
        m12 = false;
        m13 = false;
        m14 = false;
        m15 = false;
        m16 = false;
    }
    
}
document.getElementById("modificar").addEventListener("click", function (event) {
    event.preventDefault();
    validarCampos2();
});