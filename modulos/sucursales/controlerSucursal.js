/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
let sucursal = {};
let sucursales = [];
let indiceSucursalSeleccionado;
export function loadTable(estatus) {
    let cuerpo = "";
    sucursales.forEach(function (sucursal) {

        if (estatus == 0 && sucursal.estatus == 0) {

            let registro =
                    '<tr onclick="moduloSucursal.seleccionarSucursal(' + sucursales.indexOf(sucursal) + ');">' +
                    '<td>' + sucursal.id_sucursal + '</td>' +
                    '<td>' + sucursal.sucursal + '</td>' +
                    '<td>' + sucursal.dueño + '</td>' +
                    '<td>' + sucursal.rfcDueño + '</td>' +
                    '<td>' + sucursal.colonia + " " + sucursal.calle + " " + sucursal.numero + '</td>' +
                    '<td>' + sucursal.ciudad + '</td>' +
                    '<td>' + sucursal.estado + '</td>' +
                    '<td>' + sucursal.codigoPo + '</td>' +
                    '<td>' + sucursal.telefono + '</td>' +
                    '<td>' + sucursal.longitud + '</td>' +
                    '<td>' + sucursal.latitud + '</td>' +
                    '<td>' + sucursal.estatus + '</td>' +
                    '</tr>';
            cuerpo += registro;
        } else if (estatus == 1 && sucursal.estatus == 1) {
            let registro =
                    '<tr onclick="moduloSucursal.seleccionarSucursal(' + sucursales.indexOf(sucursal) + ');">' +
                    '<td>' + sucursal.id_sucursal + '</td>' +
                    '<td>' + sucursal.sucursal + '</td>' +
                    '<td>' + sucursal.dueño + '</td>' +
                    '<td>' + sucursal.rfcDueño + '</td>' +
                    '<td>' + sucursal.colonia + " " + sucursal.calle + " " + sucursal.numero + '</td>' +
                    '<td>' + sucursal.ciudad + '</td>' +
                    '<td>' + sucursal.estado + '</td>' +
                    '<td>' + sucursal.codigoPo + '</td>' +
                    '<td>' + sucursal.telefono + '</td>' +
                    '<td>' + sucursal.longitud + '</td>' +
                    '<td>' + sucursal.latitud + '</td>' +
                    '<td>' + sucursal.estatus + '</td>' +
                    '</tr>';
            cuerpo += registro;
        }
    });
    document.getElementById("tbSucursal").innerHTML = cuerpo;
}

fetch("modulos/sucursales/dataSucursal.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            sucursales = jsondata;
            console.log(sucursales);
            loadTable(1);
        }
        );
export function seleccionarSucursal(indice) {
    document.getElementById("txtnombre").value = sucursales[indice].sucursal;
    document.getElementById("txtnombre_dueño").value = sucursales[indice].dueño;
    document.getElementById("txtrfc_dueño").value = sucursales[indice].rfcDueño;
    document.getElementById("txtcolonia").value = sucursales[indice].colonia;
    document.getElementById("txtcalle").value = sucursales[indice].calle;
    document.getElementById("txtciudad").value = sucursales[indice].ciudad;
    document.getElementById("txtnumero").value = sucursales[indice].numero;
    document.getElementById("txtestado").value = sucursales[indice].estado;
    document.getElementById("txtcodigo_postal").value = sucursales[indice].codigoPo;
    document.getElementById("txttelefono").value = sucursales[indice].telefono;
    document.getElementById("txtlongitud").value = sucursales[indice].longitud;
    document.getElementById("txtlatitud").value = sucursales[indice].latitud;
    indiceSucursalSeleccionado = indice;
}

export function revisarSeleccion() {
    let checkbox = document.getElementById("chkStatus");
    if (checkbox.checked) {
        loadTable(0);
    } else {
        loadTable(1);
    }

}

export function deleteSucursal() {
    sucursales[indiceSucursalSeleccionado].estatus = 0;
    loadTable();
    loadTable(1);
}

export function validarEstatus(estatus) {
    if (estatus == 1) {
        loadTable(1);
    } else if (estatus == 0) {
        loadTable(0);
    }

}

export function addSucursal() {
    // Get values from form fields
    let nombreSucursal = document.getElementById("txtnombre").value;
    let dueño = document.getElementById("txtnombre_dueño").value;
    let rfcDueño = document.getElementById("txtrfc_dueño").value;
    let calle = document.getElementById("txtcalle").value;
    let numero = document.getElementById("txtnumero").value;
    let colonia = document.getElementById("txtcolonia").value;
    let ciudad = document.getElementById("txtciudad").value;
    let estado = document.getElementById("txtestado").value;
    let codigoPostal = document.getElementById("txtcodigo_postal").value;
    let telefono = document.getElementById("txttelefono").value;
    let longitud = document.getElementById("txtlongitud").value;
    let latitud = document.getElementById("txtlatitud").value;

    // Construct the sucursal object
    let sucursal = {
        id_sucursal: sucursales.length + 1,
        sucursal: nombreSucursal,
        dueño: dueño,
        rfcDueño: rfcDueño,
        calle: calle,
        numero: numero,
        colonia: colonia,
        ciudad: ciudad,
        estado: estado,
        codigoPo: codigoPostal,
        telefono: telefono,
        longitud: longitud,
        latitud: latitud,
        estatus: 1
    };

    // Push the new sucursal object into the sucursales array
    sucursales.push(sucursal);

    // Call the loadTable function to update the table
    loadTable(1);
}

export function modificarSucursal(){
    let nombreSucursal = document.getElementById("txtnombre").value;
    let dueño = document.getElementById("txtnombre_dueño").value;
    let rfcDueño = document.getElementById("txtrfc_dueño").value;
    let calle = document.getElementById("txtcalle").value;
    let numero = document.getElementById("txtnumero").value;
    let colonia = document.getElementById("txtcolonia").value;
    let ciudad = document.getElementById("txtciudad").value;
    let estado = document.getElementById("txtestado").value;
    let codigoPostal = document.getElementById("txtcodigo_postal").value;
    let telefono = document.getElementById("txttelefono").value;
    let longitud = document.getElementById("txtlongitud").value;
    let latitud = document.getElementById("txtlatitud").value;
    let id=sucursales[indiceSucursalSeleccionado].id_sucursal;

let sucursal = {
        id_sucursal:id ,
        sucursal: nombreSucursal,
        dueño: dueño,
        rfcDueño: rfcDueño,
        calle: calle,
        numero: numero,
        colonia: colonia,
        ciudad: ciudad,
        estado: estado,
        codigoPo: codigoPostal,
        telefono: telefono,
        longitud: longitud,
        latitud: latitud,
        estatus: 1
    };
    // Update user and employee information
    

    // Update the employee in your array
    sucursales[indiceSucursalSeleccionado] = sucursal;

    // Call the loadTable function to update the table
    loadTable(1);
}

//export function busca(estatus) {
//    let datoBusqueda = document.getElementById("txtdatabusqueda").value;
//    let cuerpo = "";
//    sucursales.forEach(function (sucursal) {
//        
//        let nombre = sucursal.sucursal.toLowerCase();
//        let dueño = sucursal.dueño.toLowerCase();
//        let rfc = sucursal.rfcDueño.toLowerCase();
//        let colonia = sucursal.colonia.toLowerCase();
//        let ciudad = sucursal.ciudad.toLowerCase();
//        let estado = sucursal.estado.toLowerCase();
//        let codigoPo = sucursal.codigoPo.toLowerCase();
//        let tel = sucursal.telefono.toLowerCase();
//        let long = sucursal.longitud.toLowerCase();
//        let lat = sucursal.latitud.toLowerCase();
//        if (nombre == datoBusqueda || dueño == datoBusqueda
//                || rfc == datoBusqueda || colonia == datoBusqueda
//                || ciudad == datoBusqueda || estado == datoBusqueda
//                || codigoPo == datoBusqueda || tel == datoBusqueda
//                || long == datoBusqueda || lat == datoBusqueda) {
//
//            if (estatus == 0 && sucursal.estatus == 0) {
//
//            let registro =
//                    '<tr onclick="moduloSucursal.seleccionarSucursal(' + sucursales.indexOf(sucursal) + ');">' +
//                    '<td>' + sucursal.id_sucursal + '</td>' +
//                    '<td>' + sucursal.sucursal + '</td>' +
//                    '<td>' + sucursal.dueño + '</td>' +
//                    '<td>' + sucursal.rfcDueño + '</td>' +
//                    '<td>' + sucursal.colonia + " " + sucursal.calle + " " + sucursal.numero + '</td>' +
//                    '<td>' + sucursal.ciudad + '</td>' +
//                    '<td>' + sucursal.estado + '</td>' +
//                    '<td>' + sucursal.codigoPo + '</td>' +
//                    '<td>' + sucursal.telefono + '</td>' +
//                    '<td>' + sucursal.longitud + '</td>' +
//                    '<td>' + sucursal.latitud + '</td>' +
//                    '<td>' + sucursal.estatus + '</td>' +
//                    '</tr>';
//            cuerpo += registro;
//        } else if (estatus == 1 && sucursal.estatus == 1) {
//            let registro =
//                    '<tr onclick="moduloSucursal.seleccionarSucursal(' + sucursales.indexOf(sucursal) + ');">' +
//                    '<td>' + sucursal.id_sucursal + '</td>' +
//                    '<td>' + sucursal.sucursal + '</td>' +
//                    '<td>' + sucursal.dueño + '</td>' +
//                    '<td>' + sucursal.rfcDueño + '</td>' +
//                    '<td>' + sucursal.colonia + " " + sucursal.calle + " " + sucursal.numero + '</td>' +
//                    '<td>' + sucursal.ciudad + '</td>' +
//                    '<td>' + sucursal.estado + '</td>' +
//                    '<td>' + sucursal.codigoPo + '</td>' +
//                    '<td>' + sucursal.telefono + '</td>' +
//                    '<td>' + sucursal.longitud + '</td>' +
//                    '<td>' + sucursal.latitud + '</td>' +
//                    '<td>' + sucursal.estatus + '</td>' +
//                    '</tr>';
//            cuerpo += registro;
//        }
//        }
//    });
//    document.getElementById("tbSucursal").innerHTML = cuerpo;
//
//
//}

export function buscar(){
    let InputText= document.getElementById("txtdatabusqueda").value.toString().toLowerCase();
    
    let tableBody = document.getElementById("tbSucursal");
    let tableRows = tableBody.getElementsByTagName("tr");
    for (let i = 0;i < tableRows.length; i++) {
        let textoConsulta = tableRows[i].cells[1].textContent.toString().toLowerCase()+
                tableRows[i].cells[2].textContent.toString().toLowerCase()+
                tableRows[i].cells[3].textContent.toString().toLowerCase()+
                tableRows[i].cells[4].textContent.toString().toLowerCase()+
                tableRows[i].cells[5].textContent.toString().toLowerCase()+
                tableRows[i].cells[6].textContent.toString().toLowerCase()+
                tableRows[i].cells[7].textContent.toString().toLowerCase()+
                tableRows[i].cells[8].textContent.toString().toLowerCase()+
                tableRows[i].cells[9].textContent.toString().toLowerCase()+
                tableRows[i].cells[10].textContent.toString().toLowerCase();
        if (textoConsulta.indexOf(InputText) === -1) {
            tableRows[i].style.visibility = "collapse";
        }
        else{
            tableRows[i].style.visibility = "";
        }
    }
    
}