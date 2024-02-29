let empleados;

function obtenerDatosEmpleado() {
    let idU = document.getElementById("idUsuario").value;
    let nombreU = document.getElementById("NombreUsuario").value;
    let contras = document.getElementById("contrasenia").value;
    let rol = document.getElementById("rol").value;
    let usuario = {idUsuario: parseInt(idU), nombreUsuario: nombreU, contrasenia: contras, rol: rol};

    //agregar lo de persona

    let idP = document.getElementById("idPersona").value;
    let nombre = document.getElementById("nombres").value;
    let aP = document.getElementById("apellido_paterno").value;
    let aM = document.getElementById("apellido_materno").value;
    let g = document.getElementById("genero").value;
    let fn = document.getElementById("fecha_nacimiento").value;
    let rfc = document.getElementById("rfc").value;
    let curp = document.getElementById("curp").value;
    let dom = document.getElementById("direccion").value;
    let cp = document.getElementById("codigo_postal").value;
    let ciudad = document.getElementById("ciudad").value;
    let edo = document.getElementById("estado").value;
    let tel = document.getElementById("telefono").value;
    let foto = document.getElementById("txtaCodigoImagen").value;

    //Enviar la funcion img a texto
    let persona = {idPersona: parseInt(idP), nombre: nombre, apellidoPaterno: aP, apellidoMaterno: aM, genero: g, fechaNacimiento: fn, rfc: rfc, curp: curp, domicilio: dom,
        codigoPostal: cp, ciudad: ciudad, estado: edo, telefono: tel, foto: foto};


    let idSuc = document.getElementById("IdSucursal").value;
    let sucursal = {idSucursal: parseInt(idSuc)};

    let idE = document.getElementById("idEmpleado").value;
    let CodE = document.getElementById("CodigoEmpleado").value;
    let fI = document.getElementById("fecha_ingreso").value;
    let puesto = document.getElementById("puesto").value;
    let sB = parseFloat(document.getElementById("salario_bruto_mensual").value);
    let activo = document.getElementById("estatus").value;
    let e = document.getElementById("email").value;

    let empleado = {idEmpleado: parseInt(idE), codigo: CodE, fechaIngreso: fI, puesto: puesto, salarioBruto: sB, email: e, activo: parseInt(activo), Persona: persona, Usuario: usuario, Sucursal: sucursal};//,Sucursal:sucursal

    let params = {e: JSON.stringify(empleado)};

    let ruta = "http://localhost:8080/sicefasucursal/api/empleado/insert?";
    fetch(ruta,
            {method: "POST",
                headers: {'Content-Type':
                            'application/x-www-form-urlencoded;charset=UTF-8'},
                body: new URLSearchParams(params)
            })
            .then(response => response.json())
            .then(response => {
                if (response.result) {
                    Swal.fire("Insercion correctaa", response.result, "success");
                }
                if (response.error) {
                    Swal.fire("Problemas para insertar", response.error, "error");
                }


            });
    limpiarCampos();

}

function cargarCatEmpleado() {
    fetch("http://localhost:8080/sicefasucursal/api/empleado/getAll")
            .then(response => response.json()
            )
            .then(response => {
                let mostrar = "";
                empleados = response;


                for (var i = 0; i < response.length; i++) {
                    let datos1 = response[i].fechaIngreso + "-" + response[i].puesto + "-" + response[i].salarioBruto + "-" + response[i].email;
                    let datos2 = response[i].Persona.nombre + " " + response[i].Persona.apellidoPaterno + " " + response[i].Persona.apellidoMaterno;
                    let datos3 = response[i].Persona.fechaNacimiento + " - " + response[i].Persona.rfc + " - " + response[i].Persona.curp;
                    let datos4 = response[i].Persona.domicilio + " - " + response[i].Persona.codigoPostal + " - " + response[i].Persona.ciudad + " - " + response[i].Persona.estado;
                    let datos5 = response[i].Usuario.nombreUsuario + " - " + response[i].Usuario.rol;
                    let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                    mostrar += '<tr>';
                    mostrar += '<td>' + response[i].codigo + '</td>';
                    mostrar += '<td>' + datos1 + '</td>';
                    mostrar += '<td>' + datos2 + '</td>';
                    mostrar += '<td>' + response[i].Persona.telefono + '</td>';
                    mostrar += '<td>' + datos5 + '</td>';
                    mostrar += '<td>' + datos6 + '</td>';
                    mostrar += '<td> <button class="btn btn-warning btn-modificar" data-bs-toggle="modal" data-bs-target="#formularioModal" onclick="modificarEmpleado(' + i + ');"><i class="bi bi-pencil"></i></button>' + '</td>';
                    mostrar += '<td> <button class="btn btn-danger btn-md" onclick="eliminarEmpleado(' + i + ');"><i class="bi bi-trash"></i></button>' + '</td>';
                    mostrar += '<td> <button class="btn btn-success btn-md" onclick="activarEmpleado(' + i + ');"><i class="bi bi-check"></i></button>' + '</td>';
                    mostrar += '</tr>';
                }


                document.getElementById("tblEmpleado").innerHTML = mostrar;

                cargarSucursales();

            });

}

function modificarEmpleado(i) {

    document.getElementById("idPersona").value = empleados[i].Persona.idPersona;
    document.getElementById("nombres").value = empleados[i].Persona.nombre;
    document.getElementById("apellido_paterno").value = empleados[i].Persona.apellidoPaterno;
    document.getElementById("apellido_materno").value = empleados[i].Persona.apellidoMaterno;
    document.getElementById("genero").value = empleados[i].Persona.genero;
    document.getElementById("fecha_nacimiento").value = empleados[i].Persona.fechaNacimiento;
    document.getElementById("rfc").value = empleados[i].Persona.rfc;
    document.getElementById("curp").value = empleados[i].Persona.curp;
    document.getElementById("direccion").value = empleados[i].Persona.domicilio;
    document.getElementById("codigo_postal").value = empleados[i].Persona.codigoPostal;
    document.getElementById("ciudad").value = empleados[i].Persona.ciudad;
    document.getElementById("estado").value = empleados[i].Persona.estado;
    document.getElementById("telefono").value = empleados[i].Persona.telefono;


    document.getElementById("idEmpleado").value = empleados[i].idEmpleado;
    document.getElementById("CodigoEmpleado").value = empleados[i].codigo;
    document.getElementById("fecha_ingreso").value = empleados[i].fechaIngreso;
    document.getElementById("puesto").value = empleados[i].puesto;
    document.getElementById("salario_bruto_mensual").value = empleados[i].salarioBruto;
    document.getElementById("email").value = empleados[i].email;
    document.getElementById("estatus").value = empleados[i].activo;

    document.getElementById("IdSucursal").value = empleados[i].Sucursal.idSucursal;


    document.getElementById("idUsuario").value = empleados[i].Usuario.idUsuario;
    document.getElementById("contrasenia").value = empleados[i].Usuario.contrasenia;
    document.getElementById("NombreUsuario").value = empleados[i].Usuario.nombreUsuario;
    document.getElementById("rol").value = empleados[i].Usuario.rol;
    document.getElementById("txtaCodigoImagen").value = empleados[i].Persona.foto;




}

function eliminarEmpleado(i) {
    let idEmpleado = empleados[i].idEmpleado;
    fetch("http://localhost:8080/sicefasucursal/api/empleado/delete?idE=" + idEmpleado)
            .then(response => response.json())
            .then(response => {
                Swal.fire(response.result, "Empleado eliminado", "success");
            }
            );


}

function activarEmpleado(i) {
    let idEmpleado = empleados[i].idEmpleado;
    fetch("http://localhost:8080/sicefasucursal/api/empleado/activar?idE=" + idEmpleado)
            .then(response => response.json())
            .then(response => {
                Swal.fire(response.result, "Empleado activado", "success");
            }
            );
}

function  moddEmpleado() {
    let idU = document.getElementById("idUsuario").value;
    let nombreU = document.getElementById("NombreUsuario").value;
    let contras = document.getElementById("contrasenia").value;
    let rol = document.getElementById("rol").value;
    let usuario = {idUsuario: parseInt(idU), nombreUsuario: nombreU, contrasenia: contras, rol: rol};

    //agregar lo de persona

    let idP = document.getElementById("idPersona").value;
    let nombre = document.getElementById("nombres").value;
    let aP = document.getElementById("apellido_paterno").value;
    let aM = document.getElementById("apellido_materno").value;
    let g = document.getElementById("genero").value;
    let fn = document.getElementById("fecha_nacimiento").value;
    let rfc = document.getElementById("rfc").value;
    let curp = document.getElementById("curp").value;
    let dom = document.getElementById("direccion").value;
    let cp = document.getElementById("codigo_postal").value;
    let ciudad = document.getElementById("ciudad").value;
    let edo = document.getElementById("estado").value;
    let tel = document.getElementById("telefono").value;
    let foto = document.getElementById("txtaCodigoImagen").value;

    //Enviar la funcion img a texto
    let persona = {idPersona: parseInt(idP), nombre: nombre, apellidoPaterno: aP, apellidoMaterno: aM, genero: g, fechaNacimiento: fn, rfc: rfc, curp: curp, domicilio: dom,
        codigoPostal: cp, ciudad: ciudad, estado: edo, telefono: tel, foto: foto};


    let idSuc = document.getElementById("IdSucursal").value;
    let sucursal = {idSucursal: parseInt(idSuc)};

    let idE = document.getElementById("idEmpleado").value;
    let CodE = document.getElementById("CodigoEmpleado").value;
    let fI = document.getElementById("fecha_ingreso").value;
    let puesto = document.getElementById("puesto").value;
    let sB = parseFloat(document.getElementById("salario_bruto_mensual").value);
    let activo = document.getElementById("estatus").value;
    let e = document.getElementById("email").value;

    let empleado = {idEmpleado: parseInt(idE), codigo: CodE, fechaIngreso: fI, puesto: puesto, salarioBruto: sB, email: e, activo: parseInt(activo), Persona: persona, Usuario: usuario, Sucursal: sucursal};//,Sucursal:sucursal

    let params = {e: JSON.stringify(empleado)};

    let ruta = "http://localhost:8080/sicefasucursal/api/empleado/update?";
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
                cargarCatalogoEmpleados();

            });
    limpiarCampos();
}


//desde aqui modifique
function buscarEmpleado() {
    let busqueda = document.getElementById("campoBusqueda").value;

    if (busqueda === "") {
        return;
    }

    fetch(`http://localhost:8080/sicefasucursal/api/empleado/buscar?valor=${busqueda}`)
            .then(response => response.json()
            )
            .then(response => {

                document.getElementById("tblEmpleado").innerHTML = "";
                let mostrar = "";
                empleados = response;
                for (var i = 0; i < response.length; i++) {
                    let datos1 = response[i].fechaIngreso + "-" + response[i].puesto + "-" + response[i].salarioBruto + "-" + response[i].email;
                    let datos2 = response[i].Persona.nombre + " " + response[i].Persona.apellidoPaterno + " " + response[i].Persona.apellidoMaterno;
                    let datos3 = response[i].Persona.fechaNacimiento + " - " + response[i].Persona.rfc + " - " + response[i].Persona.curp;
                    let datos4 = response[i].Persona.domicilio + " - " + response[i].Persona.codigoPostal + " - " + response[i].Persona.ciudad + " - " + response[i].Persona.estado;
                    let datos5 = response[i].Usuario.nombreUsuario + " - " + response[i].Usuario.rol;
                    let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                    mostrar += '<tr>';
                    mostrar += '<td>' + response[i].codigo + '</td>';
                    mostrar += '<td>' + datos1 + '</td>';
                    mostrar += '<td>' + datos2 + '</td>';

                    mostrar += '<td>' + response[i].Persona.telefono + '</td>';
                    mostrar += '<td>' + datos5 + '</td>';
                    mostrar += '<td>' + datos6 + '</td>';
                    mostrar += '<td> <button class="btn btn-warning btn-modificar" data-bs-toggle="modal" data-bs-target="#formularioModal" onclick="modificarEmpleado(' + i + ');"><i class="bi bi-pencil"></i></button>' + '</td>';
                    mostrar += '<td> <button class="btn btn-danger btn-md" onclick="eliminarEmpleado(' + i + ');"><i class="bi bi-trash"></button>' + '</td>';
                    mostrar += '<td> <button class="btn btn-success btn-md" onclick="activarEmpleado(' + i + ');"><i class="bi bi-check"></i></button>' + '</td>';
                    mostrar += '</tr>';
                }

                document.getElementById("tblEmpleado").innerHTML = mostrar;
                limpiarCampos();


            });
}

function selecionarEmpleado() {
    let checkbox = document.getElementById("chkestatus");
    if (checkbox.checked) {
        fetch("http://localhost:8080/sicefasucursal/api/empleado/seleccionar?val=" + 1)
                .then(response => response.json())
                .then(response => {
                    let mostrar = "";
                    empleados = response;
                    for (var i = 0; i < response.length; i++) {
                        let datos1 = response[i].fechaIngreso + "-" + response[i].puesto + "-" + response[i].salarioBruto + "-" + response[i].email;
                        let datos2 = response[i].Persona.nombre + " " + response[i].Persona.apellidoPaterno + " " + response[i].Persona.apellidoMaterno;
                        let datos3 = response[i].Persona.fechaNacimiento + " - " + response[i].Persona.rfc + " - " + response[i].Persona.curp;
                        let datos4 = response[i].Persona.domicilio + " - " + response[i].Persona.codigoPostal + " - " + response[i].Persona.ciudad + " - " + response[i].Persona.estado;
                        let datos5 = response[i].Usuario.nombreUsuario + " - " + response[i].Usuario.rol;
                        let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                        mostrar += '<tr>';
                        mostrar += '<td>' + response[i].codigo + '</td>';
                        mostrar += '<td>' + datos1 + '</td>';
                        mostrar += '<td>' + datos2 + '</td>';

                        mostrar += '<td>' + response[i].Persona.telefono + '</td>';
                        mostrar += '<td>' + datos5 + '</td>';
                        mostrar += '<td>' + datos6 + '</td>';
                        mostrar += '<td> <button class="btn btn-warning btn-modificar" data-bs-toggle="modal" data-bs-target="#formularioModal" onclick="modificarEmpleado(' + i + ');"><i class="bi bi-pencil"></i></button>' + '</td>';
                        mostrar += '<td> <button class="btn btn-danger btn-md" onclick="eliminarEmpleado(' + i + ');"><i class="bi bi-trash"></button>' + '</td>';
                        mostrar += '<td> <button class="btn btn-success btn-md" onclick="activarEmpleado(' + i + ');"><i class="bi bi-check"></i></button>' + '</td>';
                        mostrar += '</tr>';
                    }

                    document.getElementById("tblEmpleado").innerHTML = mostrar;
                    limpiarCampos();
                }
                );
    } else {
        fetch("http://localhost:8080/sicefasucursal/api/empleado/seleccionar?val=" + 0)
                .then(response => response.json())
                .then(response => {
                    let mostrar = "";
                    empleados = response;
                    for (var i = 0; i < response.length; i++) {
                        let datos1 = response[i].fechaIngreso + "-" + response[i].puesto + "-" + response[i].salarioBruto + "-" + response[i].email;
                        let datos2 = response[i].Persona.nombre + " " + response[i].Persona.apellidoPaterno + " " + response[i].Persona.apellidoMaterno;
                        let datos3 = response[i].Persona.fechaNacimiento + " - " + response[i].Persona.rfc + " - " + response[i].Persona.curp;
                        let datos4 = response[i].Persona.domicilio + " - " + response[i].Persona.codigoPostal + " - " + response[i].Persona.ciudad + " - " + response[i].Persona.estado;
                        let datos5 = response[i].Usuario.nombreUsuario + " - " + response[i].Usuario.rol;
                        let datos6 = response[i].Sucursal.nombre + " - " + response[i].Sucursal.titular + " - " + response[i].Sucursal.domicilio + " - " + response[i].Sucursal.colonia + " - " + response[i].Sucursal.telefono;
                        mostrar += '<tr>';
                        mostrar += '<td>' + response[i].codigo + '</td>';
                        mostrar += '<td>' + datos1 + '</td>';
                        mostrar += '<td>' + datos2 + '</td>';

                        mostrar += '<td>' + response[i].Persona.telefono + '</td>';
                        mostrar += '<td>' + datos5 + '</td>';
                        mostrar += '<td>' + datos6 + '</td>';
                        mostrar += '<td> <button class="btn btn-warning btn-modificar" data-bs-toggle="modal" data-bs-target="#formularioModal" onclick="modificarEmpleado(' + i + ');"><i class="bi bi-pencil"></i></button>' + '</td>';
                        mostrar += '<td> <button class="btn btn-danger btn-md" onclick="eliminarEmpleado(' + i + ');"><i class="bi bi-trash"></button>' + '</td>';
                        mostrar += '<td> <button class="btn btn-success btn-md" onclick="activarEmpleado(' + i + ');"><i class="bi bi-check"></i></button>' + '</td>';
                        mostrar += '</tr>';
                    }

                    document.getElementById("tblEmpleado").innerHTML = mostrar;
                    limpiarCampos();
                }
                );
    }
}

function cargarSucursales() {
    fetch("http://localhost:8080/sicefasucursal/api/empleado/getAllSucursal")
            .then(response => response.json())
            .then(response => {
                let sucursales = response;
                let datosSuc = "";
                for (var i = 0; i < sucursales.length; i++) {
                    datosSuc += "<option value='" + sucursales[i].idSucursal + "'>";
                    datosSuc += sucursales[i].nombre;
                    datosSuc += "</option>";
                }
                document.getElementById("IdSucursal").innerHTML = datosSuc;
            });

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
        reader.onload = function (e)
        {
            let fotoB64 = e.target.result;
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
    var idEmpleado = document.getElementById('idEmpleado');
    var idUsuario = document.getElementById('idUsuario');
    var CodigoEmpleado = document.getElementById('CodigoEmpleado');
    var nombres = document.getElementById('nombres');
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
    var direccion = document.getElementById('direccion');
    var telefono = document.getElementById('telefono');
    var email = document.getElementById('email');
    var fechaIngreso = document.getElementById('fecha_ingreso');
    var puesto = document.getElementById('puesto');
    var salarioBrutoMensual = document.getElementById('salario_bruto_mensual');
    var IdSucursal = document.getElementById('IdSucursal');
    var contrasenia = document.getElementById('contrasenia');
    var rol = document.getElementById('rol');
    var nombreUsuario = document.getElementById('NombreUsuario');

    // Limpiar el valor de cada campo
    idPersona.value = '';
    idEmpleado.value = '';
    idUsuario.value = '';
    CodigoEmpleado.value = '';
    nombres.value = '';
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
    direccion.value = '';
    telefono.value = '';
    email.value = '';
    fechaIngreso.value = '';
    puesto.value = '';
    salarioBrutoMensual.value = '';
    IdSucursal.value = '';
    contrasenia.value = '';
    rol.value = '';
    nombreUsuario.value = '';
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
var m17 = false;
var m18 = false;
var m19 = false;
var m20 = false;
var m21= false;

function validarContraseña() {
    const clave = document.getElementById("contrasenia").value;
    const ochocaracteres = /.{8,}/.test(clave);
    const sinEspacios = /^\S*$/.test(clave); // Verificar si la contraseña no contiene espacios en blanco
    const contieneMayuscula = /[A-Z]/.test(clave); // Verificar si la contraseña contiene al menos una letra mayúscula
    const sinCaracteresEspeciales = /^[a-zA-Z0-9]+$/.test(clave); // Verificar si la contraseña no contiene caracteres especiales
    if (!ochocaracteres) {
        alert("La contraseña debe tener al menos 8 caracteres.");
    } else if (!sinEspacios) {
        alert("La contraseña no puede contener espacios en blanco.");
    } else if (!contieneMayuscula) {
        alert("La contraseña debe contener al menos una letra mayúscula.");
    } else if (!sinCaracteresEspeciales) {
        alert("La contraseña no puede contener caracteres especiales.");
    } else {
        m1 = true;
    }
}
function validarNombre() {
    const nombre = document.getElementById("nombres").value;
    const sinEspaciosInicio = /^\S.*$/.test(nombre); // Verificar si el nombre no contiene espacios en blanco al inicio
    const soloMinusculas = /^[a-z\s]*$/.test(nombre); // Verificar si el nombre solo contiene letras minúsculas y espacios
    const sinMasDeUnEspacio = /^(?!(?:.*\s){2})/.test(nombre); // Verificar si el nombre no contiene más de un espacio seguido

    if (!sinEspaciosInicio) {
        alert("El nombre no puede comenzar con espacios en blanco.");
    } else if (!soloMinusculas) {
        alert("El nombre solo puede contener letras minúsculas.");
    } else if (!sinMasDeUnEspacio) {
        alert("No se permiten más de un espacio en blanco seguido.");
    } else {
        m2 = true;
    }
}

function validarApellidoP() {
    const nombre = document.getElementById("apellido_paterno").value;
    const sinEspacios = /^\S*$/.test(nombre);
    const soloMinusculas = /^[a-z]+$/.test(nombre); // Verificar si el nombre solo contiene letras minúsculas
    const sinCaracteresEspeciales = /^[a-zA-Z0-9]+$/.test(nombre); // Verificar si el nombre no contiene caracteres especiales

    if (!sinEspacios) {
        alert("El apellido paterno no puede contener espacios en blanco.");
    } else if (!soloMinusculas) {
        alert("El apellido paterno solo puede contener letras minúsculas.");
    } else if (!sinCaracteresEspeciales) {
        alert("El apellido paterno no puede contener caracteres especiales.");
    } else {
        m3 = true;

    }
}
function validarApellidoM() {
    const nombre = document.getElementById("apellido_materno").value;
    const sinEspacios = /^\S*$/.test(nombre);
    const soloMinusculas = /^[a-z]+$/.test(nombre); // Verificar si el nombre solo contiene letras minúsculas
    const sinCaracteresEspeciales = /^[a-zA-Z0-9]+$/.test(nombre); // Verificar si el nombre no contiene caracteres especiales

    if (!sinEspacios) {
        alert("El apellido materno no puede contener espacios en blanco.");
    } else if (!soloMinusculas) {
        alert("El apellido materno solo puede contener letras minúsculas.");
    } else if (!sinCaracteresEspeciales) {
        alert("El apellido Materno no puede contener caracteres especiales.");
    } else {
        m4 = true;
    }
}
function validarCurp() {
    const curp = document.getElementById("curp").value;
    const sinEspacios = /^\S*$/.test(curp); // Verificar si la CURP no contiene espacios en blanco
    const soloMayusculas = /^[A-Z0-9]+$/.test(curp); // Verificar si la CURP solo contiene letras mayúsculas y números

    if (!sinEspacios) {
        alert("La CURP no puede contener espacios en blanco.");
    } else if (!soloMayusculas) {
        alert("La CURP solo puede contener letras mayúsculas y números.");
    } else {
        m8 = true;
    }
}
function validarRFC() {
    const curp = document.getElementById("rfc").value;
    const sinEspacios = /^\S*$/.test(curp); // Verificar si la CURP no contiene espacios en blanco
    const soloMayusculas = /^[A-Z0-9]+$/.test(curp); // Verificar si la CURP solo contiene letras mayúsculas y números

    if (!sinEspacios) {
        alert("La RFC no puede contener espacios en blanco.");
    } else if (!soloMayusculas) {
        alert("La RFC solo puede contener letras mayúsculas y números.");
    } else {
        m9 = true;
    }
}
function validarCiudad() {
    const nombre = document.getElementById("ciudad").value;
    const sinEspaciosInicio = /^\S.*$/.test(nombre); // Verificar si el nombre no contiene espacios en blanco al inicio
    const soloMinusculas = /^[a-z\s]*$/.test(nombre); // Verificar si el nombre solo contiene letras minúsculas y espacios
    const sinMasDeUnEspacio = /^(?!(?:.*\s){2})/.test(nombre); // Verificar si el nombre no contiene más de un espacio seguido

    if (!sinEspaciosInicio) {
        alert("El campo ciudad no puede comenzar con espacios en blanco.");
    } else if (!soloMinusculas) {
        alert("El campo ciudad solo puede contener letras minúsculas.");
    } else if (!sinMasDeUnEspacio) {
        alert("El campo ciudad no puede contener caracteres especiales.");
    } else {
        m11 = true;
    }
}
function validarCP() {
    const rfc = document.getElementById("codigo_postal").value;
    const sinEspacios = /^\S*$/.test(rfc); // Verificar si la RFC no contiene espacios en blanco
    const soloNumeros = /^\d{5}$/.test(rfc); // Verificar si la RFC solo contiene 5 números
    const sinCaracteresEspeciales = /^[0-9]+$/.test(rfc); // Verificar si la RFC solo contiene números

    if (!sinEspacios) {
        alert("El codigo postal no puede contener espacios en blanco.");
    } else if (!sinCaracteresEspeciales) {
        alert("El codigo postal solo puede contener números.");
    } else if (!soloNumeros) {
        alert("El codigo postal debe contener exactamente 5 números.");
    } else {
        m12 = true; // No sé qué representa m9, así que he mantenido esta línea según tu código
    }
}
function validarDireccion() {
    const direccion = document.getElementById("direccion").value;
    const sinEspaciosInicio = /^\S.*$/.test(direccion); // Verificar si la dirección no contiene espacios en blanco al inicio
    const soloMinusculasNumerosEspacios = /^[A-Za-z0-9]+(?:\s[A-Za-z0-9]+)*$/.test(direccion); // Verificar si la dirección solo contiene letras minúsculas, números y espacios, y no hay más de un espacio seguido

    if (!sinEspaciosInicio) {
        alert("La dirección no puede comenzar con espacios en blanco.");
    } else if (!soloMinusculasNumerosEspacios) {
        alert("La dirección solo puede contener letras minúsculas, números y espacios, y no puede contener más de un espacio seguido.");
    } else {
        m13 = true; // No estoy seguro de qué representa m13, así que he mantenido esta línea según tu código
    }
}


function validarTelefono() {
    const telefono = document.getElementById("telefono").value;
    const sinEspacios = /^\S*$/.test(telefono); // Verificar si el telefono no contiene espacios en blanco
    const soloNumeros = /^\d{10}$/.test(telefono); // Verificar si el telefono si contiene 10 números
    const sinCaracteresEspeciales = /^[0-9]+$/.test(telefono); // Verificar el telefono solo contiene números

    if (!sinEspacios) {
        alert("El teléfono no puede contener espacios en blanco.");
    } else if (!sinCaracteresEspeciales) {
        alert("El teléfono solo puede contener numeros");
    } else if (!soloNumeros) {
        alert("El teléfono debe contener exactamente 10 números.");
    } else {
        m14 = true;
    }
}
function validarCorreo() {
    const correo = document.getElementById("email").value;
    const estructuraCorreoValida = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo); // Verificar si el correo tiene una estructura válida
    const sinEspacios = /^\S*$/.test(correo);
    const caracteresPermitidos = /^[a-z0-9.@]*$/.test(correo); // Permitir letras minúsculas, números, puntos y arrobas en el correo

    if (!sinEspacios) {
        alert("El correo no puede contener espacios en blanco.");
    }
    else if (!caracteresPermitidos) {
        alert("El correo solo puede contener letras minúsculas, números, puntos y arrobas.");
    }
    else if (!estructuraCorreoValida) {
        alert("Por favor, introduce un correo electrónico válido con el formato nombre@dominio.com.");
    } else {
        m15 = true; // No estoy seguro de qué representa m15, así que he mantenido esta línea según tu código
    }
}

function validarNombreUsuario() {
    const nombre = document.getElementById("nombres").value;
    const sinEspaciosInicio = /^\S.*$/.test(nombre); // Verificar si el nombre no contiene espacios en blanco al inicio
    const soloMinusculas = /^[a-z\s]*$/.test(nombre); // Verificar si el nombre solo contiene letras minúsculas y espacios
    const sinMasDeUnEspacio = /^(?!(?:.*\s){2})/.test(nombre); // Verificar si el nombre no contiene más de un espacio seguido

    if (!sinEspaciosInicio) {
        alert("El nombre de usuario no puede comenzar con espacios en blanco.");
    } else if (!soloMinusculas) {
        alert("El nombre de usuario solo puede contener letras minúsculas.");
    } else if (!sinMasDeUnEspacio) {
        alert("No se permiten más de un espacio en blanco seguido.");
    } else {
        m20 = true;
    }
}

function validarSalario() {
    const salario = document.getElementById("salario_bruto_mensual").value;
    const sinEspacios = /^\S*$/.test(salario); // Verificar si el salario no contiene espacios en blanco
    const soloNumerosYPuntos = /^[0-9.]*$/.test(salario); // Verificar si el salario solo contiene números y puntos

    if (!sinEspacios) {
        alert("El salario no puede contener espacios en blanco.");
    } else if (!soloNumerosYPuntos) {
        alert("El salario solo puede contener números y puntos.");
    } else {
        m21=true;
    }
}






function ValidarCampos() {
    const idUsuario = document.getElementById("idUsuario").value;
    const NombreUsuario = document.getElementById("NombreUsuario").value;
    const contrasenia = document.getElementById("contrasenia").value;
    const rol = document.getElementById("rol").value;
    const idPersona = document.getElementById("idPersona").value;
    const nombres = document.getElementById("nombres").value;
    const apellido_paterno = document.getElementById("apellido_paterno").value;
    const apellido_materno = document.getElementById("apellido_materno").value;
    const genero = document.getElementById("genero").value;
    const fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    const rfc = document.getElementById("rfc").value;
    const curp = document.getElementById("curp").value;
    const direccion = document.getElementById("direccion").value;
    const codigo_postal = document.getElementById("codigo_postal").value;
    const ciudad = document.getElementById("ciudad").value;
    const estado = document.getElementById("estado").value;
    const telefono = document.getElementById("telefono").value;
    const txtaCodigoImagen = document.getElementById("txtaCodigoImagen").value;
    const IdSucursal = document.getElementById("IdSucursal").value;
    const idEmpleado = document.getElementById("idEmpleado").value;
    const CodigoEmpleado = document.getElementById("CodigoEmpleado").value;
    const fecha_ingreso = document.getElementById("fecha_ingreso").value;
    const puesto = document.getElementById("puesto").value;
    const salario_bruto_mensual = parseFloat(document.getElementById("salario_bruto_mensual").value);
    const estatus = document.getElementById("estatus").value;
    const email = document.getElementById("email").value;


    if (contrasenia === "") {
        alert("Falta la contraseña");
        document.getElementById("contrasenia").focus();
        return false;
    } else {
        validarContraseña(contrasenia);
    }

    if (nombres === "") {
        alert("Falta el nombre");
        document.getElementById("nombres").focus();
        return false;
    } else {
        validarNombre(nombres);

    }

    if (apellido_paterno === "") {
        alert("Falta el apellido paterno");
        document.getElementById("apellido_paterno").focus();
        return false;
    } else {
        validarApellidoP(apellido_paterno);

    }

    if (apellido_materno === "") {
        alert("Falta el apellido materno");
        document.getElementById("apellido_materno").focus();
        return false;
    } else {
        validarApellidoM(apellido_materno);

    }

    if (genero === "") {
        alert("Falta el género");
        document.getElementById("genero").focus();
        return false;
    } else {
        m5 = true;
    }

    if (estatus === "") {
        alert("Falta el estatus");
        document.getElementById("estatus").focus();
        return false;
    } else {
        m6 = true;
    }

    if (fecha_nacimiento === "") {
        alert("Falta la fecha de nacimiento");
        document.getElementById("fecha_nacimiento").focus();
        return false;
    } else {
        m7 = true;
    }

    if (curp === "") {
        alert("Falta el CURP");
        document.getElementById("curp").focus();
        return false;
    } else {
        validarCurp(curp);
    }

    if (rfc === "") {
        alert("Falta el RFC");
        document.getElementById("rfc").focus();
        return false;
    } else {
        validarRFC(rfc);
    }

    if (estado === "") {
        alert("Falta el estado");
        document.getElementById("estado").focus();
        return false;
    } else {
        m10 = true;
    }

    if (ciudad === "") {
        alert("Falta la ciudad");
        document.getElementById("ciudad").focus();
        return false;
    } else {
        validarCiudad(ciudad);
    }

    if (codigo_postal === "") {
        alert("Falta el código postal");
        document.getElementById("codigo_postal").focus();
        return false;
    } else {
        validarCP(codigo_postal);
    }

    if (direccion === "") {
        alert("Falta la dirección");
        document.getElementById("direccion").focus();
        return false;
    } else {
        validarDireccion(direccion);
    }

    if (telefono === "") {
        alert("Falta el teléfono");
        document.getElementById("telefono").focus();
        return false;
    } else {
        validarTelefono(telefono);
    }

    if (email === "") {
        alert("Falta el correo electrónico");
        document.getElementById("email").focus();
        return false;
    } else {
        validarCorreo(email);
    }

    if (fecha_ingreso === "") {
        alert("Falta la fecha de ingreso");
        document.getElementById("fecha_ingreso").focus();
        return false;
    }else{
        m16=true;
    }
    
    if (puesto === "") {
        alert("Falta el puesto");
        document.getElementById("puesto").focus();
        return false;
    }else{
        m17=true;
    }
    
    if (salario_bruto_mensual === "") {
        alert("Falta el salario bruto mensual o no es un número válido");
        document.getElementById("salario_bruto_mensual").focus();
        return false;
    }else{
        validarSalario(salario_bruto_mensual);
    }
    
    if (IdSucursal === "") {
        alert("Falta seleccionar la sucursal");
        document.getElementById("IdSucursal").focus();
        return false;
    }else{
        m18=true;
    }
    
    if (rol === "") {
        alert("Falta el rol");
        document.getElementById("rol").focus();
        return false;
    }else{
        m19=true;
    }
    
    if (NombreUsuario === "") {
        alert("Falta el nombre de usuario");
        document.getElementById("NombreUsuario").focus();
        return false;
    }else{
        validarNombreUsuario(NombreUsuario);
        
    }
    if (m1 == true && m2 == true && m3 == true && m4 == true && m5 == true && m6 == true && m7 == true && m8 == true && m9 == true && m10 == true && m11 == true && m12 == true && m13 == true && m14 == true&& m15 == true&& m16 == true&& m17 == true&& m18 == true&& m19 == true&& m20 == true&& m21 == true) {
        moddEmpleado();
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
        m17 = false;
        m18 = false;
        m19 = false;
        m20 = false;
        m21= false;
    }

}
document.getElementById("modd").addEventListener("click", function (event) {
    ValidarCampos();
}
);


    