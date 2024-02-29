
/* global H */

let sucursales;
var ui;
function cargarSucursales() {
    fetch("http://localhost:8080/sicefacentral/api/sucursal/getAll")
            .then(response => response.json()).then(response => {
        let mostrar = "";
        sucursales = response;
        for (let i = 0; i < response.length; i++) {
            if (response[i].estatus == 1) {
                let datos1 = response[i].nombre;
                let datos2 = response[i].titular;
                let datos3 = response[i].rfc;
                let datos4 = response[i].domicilio;
                let datos5 = response[i].colonia;
                let datos6 = response[i].codigoPostal;
                let datos7 = response[i].ciudad;
                let datos8 = response[i].estado;
                let datos9 = response[i].telefono;
                let datos10 = response[i].latitud;
                let datos11 = response[i].longitud;
                let datos12 = response[i].estatus;
                mostrar += "<tr>";
                mostrar += "<td> " + datos1 + " </td> ";

                mostrar += "<td> " + datos4 + " </td> ";
                mostrar += "<td> " + datos5 + " </td> ";
                mostrar += "<td> " + datos7 + " </td>";
                mostrar += "<td> " + datos8 + " </td>";
                mostrar += "<td> " + datos6 + " </td> ";
                mostrar += "<td> " + datos9 + " </td>";

                mostrar += '<td> <button class="btn btn-warning btn-modificarC" data-bs-toggle="modal" data-bs-target="#formularioModal2" onclick="seleccionarSucursal(' + i + ');"> <i class="bi bi-pencil"></i></button>' + '</td>';
                mostrar += '<td> <button class="btn btn-danger btn-md" onclick="eliminarSucursal(' + i + ');"><i class="bi bi-trash"></i></button>' + '</td>';
                mostrar += "</tr>";
            }
        }
        document.getElementById("tblSucursal").innerHTML = mostrar;
    });

}

function seleccionarSucursal(i) {
    document.getElementById("nombreSucursal").value = sucursales[i].nombre;
    document.getElementById("nombreTitular").value = sucursales[i].titular;
    document.getElementById("rfc").value = sucursales[i].rfc;
    document.getElementById("domicilio").value = sucursales[i].domicilio;
    document.getElementById("colonia").value = sucursales[i].colonia;
    document.getElementById("codigoPostal").value = sucursales[i].codigoPostal;
    document.getElementById("ciudad").value = sucursales[i].ciudad;
    document.getElementById("telefono").value = sucursales[i].telefono;
    document.getElementById("latitud").value = sucursales[i].latitud;
    document.getElementById("longitud").value = sucursales[i].longitud;
    document.getElementById("estado").value = sucursales[i].estado;
    document.getElementById("estatus").value = sucursales[i].estatus;
    document.getElementById("idSucursal").value = sucursales[i].idSucursal;
//    let seleccionEstado = document.getElementById("estado");
//    let estadoSucursal = sucursales[i].estado; // Obtener el estado del empleado en el índice i
//
//    for (let j = 0; j < seleccionEstado.options.length; j++) {
//        if (seleccionEstado.options[j].value === estadoSucursal) {
//            seleccionEstado.options[j].selected = true;
//        }
//    }

//    document.getElementById("estatus").value = sucursales[i].estatus;
//    let seleccionEstatus = document.getElementById("estatus");
//    let estatusSucursal = sucursales[i].estatus;
//    for (let j = 0; j < seleccionEstatus.options.length; j++) {
//        if (seleccionEstatus.options[j].value === estatusSucursal) {
//            seleccionEstatus.options[j].selected = true;
//        }
//    }
    document.getElementById("idSucursal").value = sucursales[i].idSucursal;
}

function eliminarSucursal(i) {
    let idSucursal = sucursales[i].idSucursal;
    fetch(`http://localhost:8080/sicefacentral/api/sucursal/deleteSuc?idS=${idSucursal}`)
            .then(response => response.json())
            .then(response => {
                Swal.fire(response.result, "Sucursal Eliminada", "success");
                cargarSucursales(); // Carga nuevamente las sucursales después de eliminar
            });

}

function activarSucursal(i) {
    let idSucursal = sucursales[i].idSucursal;
    fetch(`http://localhost:8080/sicefacentral/api/sucursal/activeSuc?idSuc=${idSucursal}`)
            .then(response => response.json())
            .then(response => {
                Swal.fire(response.result, "Sucursal Activada", "success");
                cargarSucursales(); // Carga nuevamente las sucursales después de activar
            });

}

function insertarSucursal() {
    let ns = document.getElementById("nombreSucursal").value;
    let nt = document.getElementById("nombreTitular").value;
    let rfc = document.getElementById("rfc").value;
    let dmc = document.getElementById("domicilio").value;
    let col = document.getElementById("colonia").value;
    let estado = document.getElementById("estado").value;
    let codP = document.getElementById("codigoPostal").value;
    let ciu = document.getElementById("ciudad").value;
    let tel = document.getElementById("telefono").value;
    let lat = document.getElementById("latitud").value;
    let long = document.getElementById("longitud").value;
    let estatus = document.getElementById("estatus").value;
    let idSuc = parseInt(document.getElementById("idSucursal").value);

    let sucursal = {
        nombre: ns, titular: nt, rfc: rfc,
        domicilio: dmc, colonia: col, codigoPostal: codP,
        ciudad: ciu, estado: estado, telefono: tel, latitud: lat, longitud: long, estatus: estatus,
        idSucursal: idSuc};

    let params = {s: JSON.stringify(sucursal)};

    let ruta = "http://localhost:8080/sicefacentral/api/sucursal/insertarSucursal?";
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
                    Swal.fire("Problemas al insertar", response.error, "ERROR");

                }
                cargarSucursales();
            });
    limpiarCamposSucursales();


}

function modificarSucursal() {
    let ns = document.getElementById("nombreSucursal").value;
    let nt = document.getElementById("nombreTitular").value;
    let rfc = document.getElementById("rfc").value;
    let dmc = document.getElementById("domicilio").value;
    let col = document.getElementById("colonia").value;
    let estado = document.getElementById("estado").value;
    let codP = document.getElementById("codigoPostal").value;
    let ciu = document.getElementById("ciudad").value;
    let tel = document.getElementById("telefono").value;
    let lat = document.getElementById("latitud").value;
    let long = document.getElementById("longitud").value;
    let estatus = document.getElementById("estatus").value;
    let idSuc = parseInt(document.getElementById("idSucursal").value);

    let sucursal = {
        nombre: ns, titular: nt, rfc: rfc,
        domicilio: dmc, colonia: col, codigoPostal: codP,
        ciudad: ciu, estado: estado, telefono: tel, latitud: lat, longitud: long, estatus: estatus,
        idSucursal: idSuc};

    let params = {suc: JSON.stringify(sucursal)};

    let ruta = "http://localhost:8080/sicefacentral/api/sucursal/update?";
    fetch(ruta,
            {method: "POST",
                headers: {'Content-Type':
                            'application/x-www-form-urlencoded;charset=UTF-8'},
                body: new URLSearchParams(params)
            })
            .then(response => response.json())
            .then(response => {
                if (response.result) {
                    Swal.fire("Modificacion correcta", response.result, "success");
                }
                if (response.error) {
                    Swal.fire("Problemas al modificar", response.error, "ERROR");

                }
                cargarSucursales();
            });
    limpiarCamposSucursales();


}

function buscarSucursales() {
    // Obtén el valor de búsqueda desde el campo de entrada
    let input = document.getElementById("busqueda").value.toLowerCase();

    // Filtra los empleados en base al valor de búsqueda
    let sucursalesFiltradas = sucursales.filter(sucursal => {

        let datosSucursal = `${sucursal.nombre} ${sucursal.titular} ${sucursal.rfc} ${sucursal.domicilio} ${sucursal.colonia}${sucursal.codigoPostal}`.toLowerCase();
        return datosSucursal.includes(input);
    });
    mostrarSucursales(sucursalesFiltradas);
}


function mostrarSucursales(sucursales) {
    let checkbox = document.getElementById("checkstatus");

    var mostrar = "";
    if (checkbox.checked) {
        fetch("http://localhost:8080/sicefacentral/api/sucursal/getAll")
                .then(response => response.json()).then(response => {
            let mostrar = "";
            sucursales = response;
            for (let i = 0; i < response.length; i++) {
                if (response[i].estatus == 0) {
                    let datos1 = response[i].nombre;
                    let datos2 = response[i].titular;
                    let datos3 = response[i].rfc;
                    let datos4 = response[i].domicilio;
                    let datos5 = response[i].colonia;
                    let datos6 = response[i].codigoPostal;
                    let datos7 = response[i].ciudad;
                    let datos8 = response[i].estado;
                    let datos9 = response[i].telefono;
                    let datos10 = response[i].latitud;
                    let datos11 = response[i].longitud;
                    let datos12 = response[i].estatus;
                    mostrar += "<tr>";
                    mostrar += "<td> " + datos1 + " </td> ";

                    mostrar += "<td> " + datos4 + " </td> ";
                    mostrar += "<td> " + datos5 + " </td> ";
                    mostrar += "<td> " + datos7 + " </td>";
                    mostrar += "<td> " + datos8 + " </td>";
                    mostrar += "<td> " + datos6 + " </td> ";
                    mostrar += "<td> " + datos9 + " </td>";

                    mostrar += '<td> <button class="btn btn-warning btn-modificarC" data-bs-toggle="modal" data-bs-target="#formularioModal2" onclick="seleccionarSucursal(' + i + ');"> <i class="bi bi-pencil"></i></button>' + '</td>';
                    mostrar += '<td> <button class="btn btn-success btn-md" onclick="activarSucursal(' + i + ');"><i class="bi bi-check"></i></button>' + '</td>';
                    mostrar += "</tr>";
                }
            }
            document.getElementById("tblSucursal").innerHTML = mostrar;
        });
    } else {
        fetch("http://localhost:8080/sicefacentral/api/sucursal/getAll")
                .then(response => response.json()).then(response => {
            let mostrar = "";
            sucursales = response;
            for (let i = 0; i < response.length; i++) {
                if (response[i].estatus == 1) {
                    let datos1 = response[i].nombre;
                    let datos2 = response[i].titular;
                    let datos3 = response[i].rfc;
                    let datos4 = response[i].domicilio;
                    let datos5 = response[i].colonia;
                    let datos6 = response[i].codigoPostal;
                    let datos7 = response[i].ciudad;
                    let datos8 = response[i].estado;
                    let datos9 = response[i].telefono;
                    let datos10 = response[i].latitud;
                    let datos11 = response[i].longitud;
                    let datos12 = response[i].estatus;
                    mostrar += "<tr>";
                    mostrar += "<td> " + datos1 + " </td> ";

                    mostrar += "<td> " + datos4 + " </td> ";
                    mostrar += "<td> " + datos5 + " </td> ";
                    mostrar += "<td> " + datos7 + " </td>";
                    mostrar += "<td> " + datos8 + " </td>";
                    mostrar += "<td> " + datos6 + " </td> ";
                    mostrar += "<td> " + datos9 + " </td>";

                    mostrar += '<td> <button class="btn btn-warning btn-modificarC" data-bs-toggle="modal" data-bs-target="#formularioModal2" onclick="seleccionarSucursal(' + i + ');"> <i class="bi bi-pencil"></i></button>' + '</td>';
                    mostrar += '<td> <button class="btn btn-danger btn-md" onclick="eliminarSucursal(' + i + ');"><i class="bi bi-trash"></i></button>' + '</td>';
                    mostrar += "</tr>";
                }
            }
            document.getElementById("tblSucursal").innerHTML = mostrar;
        });

    }

}


function agregarMarcasAGrupo(group, coordinate, html) {
    var marker = new H.map.Marker(coordinate);
    // add custom data to the marker
    marker.setData(html);
    group.addObject(marker);
}

function agregarBurbujas(map) {
    var group = new H.map.Group();

    map.addObject(group);

    // add 'tap' event listener, that opens info bubble, to the group
    group.addEventListener('tap', function (evt) {
        // event target is the marker itself, group is a parent event target
        // for all objects that it contains
        var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
            // read custom data
            content: evt.target.getData()
        });
        // show info bubble
        ui.addBubble(bubble);
    }, false);

    agregarMarcasAGrupo(group, {lat: 21.0994063, lng: -101.635549320748},
            '<div><a target="_blank">Sucursal Centro Max</a></div>' +
            '<div>Leon, GTO<br /> C.P: 37530</div>');

    agregarMarcasAGrupo(group, {lat: 21.12394441, lng: -101.68101896},
            '<div><a target="_blank">Sucursal Centro</a></div>' +
            '<div>Leon, GTO<br />C.P: 37000</div>');

    agregarMarcasAGrupo(group, {lat: 21.1580824, lng: -101.695276},
            '<div><a target="_blank">Sucursal Plaza Mayor</a></div>' +
            '<div>Leon, GTO<br />C.P: 37150</div>');
}


function cargarMapasSuc() {
    var platform = new H.service.Platform({
        apikey: 'HERE-60379425-f3e1-423b-901c-e71fa064bf27'
    });
    var defaultLayers = platform.createDefaultLayers();

// initialize a map - this map is centered over Europe
    var map = new H.Map(document.getElementById("mapa3"),
            defaultLayers.vector.normal.map, {
                center: {lat: 21.12394441, lng: -101.68101896},
                zoom: 12,
                pixelRatio: window.devicePixelRatio || 1
            });

// add a resize listener to make sure that the map occupies the whole container
    window.addEventListener('resize', () => map.getViewPort().resize());

// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// create default UI with layers provided by the platform
    ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
    agregarBurbujas(map);
}
var ui;

function cargarMapa() {
    //Paso 1: Hay que inicializar la comunicaciÃ³n con el API, mediante el objeto platform
    // Cada quien coloca su propia APIKEY 
    var platform = new H.service.Platform({
        apikey: 'HERE-60379425-f3e1-423b-901c-e71fa064bf27'
    });
    var defaultLayers = platform.createDefaultLayers();

    //Paso 2: Se inicializa y crea el objeto map; el cual centras, en este caso sobre CDMX
    // y tiene un zoom de lo amplio que se quiera la vista del mapa
    var map = new H.Map(document.getElementById('mapa2'),
            defaultLayers.vector.normal.map, {
                center: {lat: 21.1619, lng: -101.7116},
                zoom: 4,
                pixelRatio: window.devicePixelRatio || 1
            });
    // Se agrega un escucha para permitir el cambio de tamaÃ±o del mapa
    window.addEventListener('resize', () => map.getViewPort().resize());

    //Paso 3: Se hace el mapa interactivo
    // Se habilitan los evento en el mapa >MapEvents 
    // El objeto Behavior implementa las interacciones por defecto (incluso los eventos en dispositivos moviles)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Crea un objeto de UI; 
    // Esta funciÃ³n crea la interfaz de usuario predeterminada 
    // que incluye el control de zoom, el control de configuraciÃ³n del mapa
    ui = H.ui.UI.createDefault(map, defaultLayers);
    //Se llama a la funciÃ³n que aÃ±adirÃ¡ los marcadores al mapa
    agregarMarcadores(map);
}

function agregarMarcadores(map) {

    //COORDENADAS DE LA BASE DE DATOS
    var lat1 = -101.63576551761696;
    var lng1 = 21.10029837040645;
    var lat2 = -101.695192068670256;
    var lng2 = 21.16089348255371;
    var lat3 = -101.68587197528794;
    var lng3 = 21.114872159256645;
    var lat5 = 24.567890;
    var lng5 = -105.678901;
    var lat6 = 24.567890;
    var lng6 = -105.678901;

//    const coordenadas1 = {lat:21.116667,lng:-101.683334};
//    var marcador = new H.map.Marker(coordenadas1);
//    mapa.addObject(marcador);

    //Se crea el objeto del marcador, con los datos de las ubicaciones
    var marcador1 = new H.map.Marker({lat: lat1, lng: lng1});
    //Se aÃ±ade el marcador al mapa
    map.addObject(marcador1);

    var marcador2 = new H.map.Marker({lat: lat2, lng: lng2});
    map.addObject(marcador2);

    var marcador3 = new H.map.Marker({lat: lat3, lng: lng3});
    map.addObject(marcador3);

    var marcador5 = new H.map.Marker({lat: lat5, lng: lng5});
    map.addObject(marcador5);

    var marcador6 = new H.map.Marker({lat: lat6, lng: lng6});
    map.addObject(marcador6);
}

function limpiarCamposSucursales() {
    // Obtener referencias a los elementos del formulario
    var estatus = document.getElementById('estatus');
    var idSucursal = document.getElementById('idSucursal');
    var nombreSucursal = document.getElementById('nombreSucursal');
    var nombreTitular = document.getElementById('nombreTitular');
    var rfc = document.getElementById('rfc');
    var domicilio = document.getElementById('domicilio');
    var colonia = document.getElementById('colonia');
    var ciudadForm = document.getElementById('ciudad'); // Rename to avoid conflict with the variable below
    var estado = document.getElementById('estado');
    var codigoPostal = document.getElementById('codigoPostal');
    var latitud = document.getElementById('latitud');
    var longitud = document.getElementById('longitud');
    var telefono = document.getElementById('telefono');

    // Limpiar el valor de cada campo
    estatus.value = '';
    idSucursal.value = '';
    nombreSucursal.value = '';
    nombreTitular.value = '';
    rfc.value = '';
    domicilio.value = '';
    colonia.value = '';
    ciudadForm.value = ''; // Use a different variable to avoid conflict with the one above
    estado.value = '';
    codigoPostal.value = '';
    latitud.value = '';
    longitud.value = '';
    telefono.value = '';
}

var m1 = false;
var m2 = false;
var m6 = false;
var m7 = false;
var m9 = false;
var m10 = false;
var m11 = false;
var m12 = false;
var m13 = false;
var m14 = false;
var m20 = false;
var m21= false;

function validarNombre() {
    const nombre = document.getElementById("nombreSucursal").value;
    const sinEspaciosInicio = /^\S.*$/.test(nombre); // Verificar si el nombre no contiene espacios en blanco al inicio
    const soloMinusculas = /^[a-z\s]*$/.test(nombre); // Verificar si el nombre solo contiene letras minúsculas y espacios
    const sinMasDeUnEspacio = /^(?!(?:.*\s){2})/.test(nombre); // Verificar si el nombre no contiene más de un espacio seguido

    if (!sinEspaciosInicio) {
        alert("El nombre no puede comenzar con espacios en blanco.");
    } else if (!soloMinusculas) {
        alert("El nombre solo puede contener letras minúsculas.");
    } else if (!sinMasDeUnEspacio) {
        alert("El nombre no permite más de un espacio en blanco seguido.");
    } else {
        m2 = true;
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
function validarEstado() {
    const nombre = document.getElementById("estado").value;
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
        m10= true;
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
    const rfc = document.getElementById("codigoPostal").value;
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
    const direccion = document.getElementById("domicilio").value;
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
function validarColonia() {
    const direccion = document.getElementById("colonia").value;
    const sinEspaciosInicio = /^\S.*$/.test(direccion); // Verificar si la dirección no contiene espacios en blanco al inicio
    const soloMinusculasNumerosEspacios = /^[A-Za-z0-9]+(?:\s[A-Za-z0-9]+)*$/.test(direccion); // Verificar si la dirección solo contiene letras minúsculas, números y espacios, y no hay más de un espacio seguido

    if (!sinEspaciosInicio) {
        alert("La colonia no puede comenzar con espacios en blanco.");
    } else if (!soloMinusculasNumerosEspacios) {
        alert("La colonia solo puede contener letras minúsculas, números y espacios, y no puede contener más de un espacio seguido.");
    } else {
        m7 = true; // No estoy seguro de qué representa m13, así que he mantenido esta línea según tu código
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
function validarNombreUsuario() {
    const nombre = document.getElementById("nombreTitular").value;
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
    const salario = document.getElementById("latitud").value;
    const sinEspacios = /^\S*$/.test(salario); // Verificar si el salario no contiene espacios en blanco
    const soloNumerosYPuntos = /^[0-9.]*$/.test(salario); // Verificar si el salario solo contiene números y puntos

    if (!sinEspacios) {
        alert("Latitud no permite espacios en blanco");
    } else if (!soloNumerosYPuntos) {
        alert("La latitud solo puede cotener números y puntos.");
    } else {
        m21=true;
    }
}
function validarSalarios() {
    const salario = document.getElementById("longitud").value;
    const sinEspacios = /^\S*$/.test(salario); // Verificar si el salario no contiene espacios en blanco
    const soloNumerosYPuntos = /^[0-9.]*$/.test(salario); // Verificar si el salario solo contiene números y puntos

    if (!sinEspacios) {
        alert(" Longitud no permite espacios en blanco.");
    } else if (!soloNumerosYPuntos) {
        alert("La latitud solo puede cotener números y puntos.");
    } else {
        m1=true;
    }
}
function validarId() {
    const id = document.getElementById("estatus").value;
    const sinEspacios = /^\S*$/.test(id); // Verificar si la identificación no contiene espacios en blanco
    const soloNumeros = /^[0-9]*$/.test(id); // Verificar si la identificación solo contiene números

    if (!sinEspacios) {
        alert("El estatus no puede contener espacios en blanco.");
    } else if (!soloNumeros) {
        alert("El estatusn solo puede contener números.");
    } else {
        // Verificar si la identificación es válida (1 para activo, 0 para inactivo)
        if (id !== "1" && id !== "0") {
            alert("El estatus debe ser 1 para activo o 0 para inactivo.");
        } else {
            m6=true;
        }
    }
}



function ValidarCampos() {
    const idSucursal = document.getElementById("idSucursal").value;
    const nombreSucursal = document.getElementById("nombreSucursal").value;
    const nombreTitular = document.getElementById("nombreTitular").value;
    const rfc = document.getElementById("rfc").value;
    const domicilio = document.getElementById("domicilio").value;
    const codigoPostal = document.getElementById("codigoPostal").value;
    const ciudad = document.getElementById("ciudad").value;
    const colonia = document.getElementById("colonia").value;
    const estado = document.getElementById("estado").value;
    const telefono = document.getElementById("telefono").value;
    const estatus = document.getElementById("estatus").value;
    const latitud = parseFloat(document.getElementById("latitud").value);
    const longitud = parseFloat(document.getElementById("longitud").value);



   

    if (nombreSucursal === "") {
        alert("Falta el nombre de la Sucursal");
        document.getElementById("nombreSucursal").focus();
        return false;
    } else {
        validarNombre(nombreSucursal);

    }
    
    if (estatus === "") {
        alert("Falta el estatus");
        document.getElementById("estatus").focus();
        return false;
    } else {
        validarId(estatus);
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
        validarEstado(estado);
    }

    if (ciudad === "") {
        alert("Falta la ciudad");
        document.getElementById("ciudad").focus();
        return false;
    } else {
        validarCiudad(ciudad);
    }

    if (codigoPostal === "") {
        alert("Falta el código postal");
        document.getElementById("codigoPostal").focus();
        return false;
    } else {
        validarCP(codigoPostal);
    }

    if (domicilio === "") {
        alert("Falta la dirección");
        document.getElementById("direccion").focus();
        return false;
    } else {
        validarDireccion(domicilio);
    }
    if (colonia === "") {
        alert("Falta la colonia");
        document.getElementById("colonia").focus();
        return false;
    } else {
        validarColonia(colonia);
    }

    if (telefono === "") {
        alert("Falta el teléfono");
        document.getElementById("telefono").focus();
        return false;
    } else {
        validarTelefono(telefono);
    }
    
    if (latitud === "") {
        alert("Falta ingresar la latitud");
        document.getElementById("latitud").focus();
        return false;
    } else {
        validarSalario(latitud);
    }
    if (longitud === "") {
        alert("Falta ingresar la longitud");
        document.getElementById("longitud").focus();
        return false;
    } else {
        validarSalarios(longitud);
    }

    if (nombreTitular === "") {
        alert("Falta el nombre del titular");
        document.getElementById("nombreTitular").focus();
        return false;
    } else {
        validarNombreUsuario(nombreTitular);

    }
    if (m1 == true && m2 == true && m6 == true && m7 == true&& m9 == true && m10 == true && m11 == true && m12 == true && m13 == true && m14 == true && m20 == true && m21 == true) {
        modificarSucursal();
        m1 = false;
        m2 = false;
        m6 = false;
        m7 = false;
        m9 = false;
        m10 = false;
        m11 = false;
        m12 = false;
        m13 = false;
        m14 = false;
        m20 = false;
        m21 = false;
    }

}
document.getElementById("modd").addEventListener("click", function (event) {
    ValidarCampos();
}
);








