/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
let cliente = {};
let clientes = [];
let indiceClienteSeleccionado;

fetch("modulos/clientes/dataCliente.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            clientes = jsondata;
            console.log(clientes);
            loadTable(1);
        }
        );

export function loadTable(estatus) {
    let cuerpo = "";
    clientes.forEach(function (cliente) {
        if (estatus == 1 && cliente.estatus == 1) {
            let registro =
                    '<tr onclick="moduloCliente.seleccionar(' + clientes.indexOf(cliente) + ');" >' +
                    '<td>' + cliente.persona.nombre + '</td>' +
                    '<td>' + cliente.persona.apellidoPaterno + '</td>' +
                    '<td>' + cliente.persona.apellidoMaterno + '</td>' +
                    '<td>' + cliente.persona.genero + '</td>' +
                    '<td>' + cliente.persona.fechaNacimiento + '</td>' +
                    '<td>' + cliente.persona.rfc + '</td>' +
                    '<td>' + cliente.persona.curp + '</td>' +
                    '<td>' + '<img src=' + cliente.persona.fotos + ' width="100" height="100">' + '</td>' +
                    '<td>' + cliente.persona.domicilio + '</td>' +
                    '<td>' + cliente.persona.codigoPostal + '</td>' +
                    '<td>' + cliente.persona.ciudad + '</td>' +
                    '<td>' + cliente.persona.estado + '</td>' +
                    '<td>' + cliente.persona.telefono + '</td>' +
                    '<td>' + cliente.fechaRegistro + '</td>' +
                    '<td>' + cliente.persona.email + '</td>' +
                    '</tr>';
            cuerpo += registro;
        } else if (estatus == 0 && cliente.estatus == 0) {
            let registro =
                    '<tr onclick="moduloCliente.seleccionar(' + clientes.indexOf(cliente) + ');" >' +
                    '<td>' + cliente.persona.nombre + '</td>' +
                    '<td>' + cliente.persona.apellidoPaterno + '</td>' +
                    '<td>' + cliente.persona.apellidoMaterno + '</td>' +
                    '<td>' + cliente.persona.genero + '</td>' +
                    '<td>' + cliente.persona.fechaNacimiento + '</td>' +
                    '<td>' + cliente.persona.rfc + '</td>' +
                    '<td>' + cliente.persona.curp + '</td>' +
                    '<td>' + '<img src=' + cliente.persona.fotos + ' width="100" height="100">' + '</td>' +
                    '<td>' + cliente.persona.domicilio + '</td>' +
                    '<td>' + cliente.persona.codigoPostal + '</td>' +
                    '<td>' + cliente.persona.ciudad + '</td>' +
                    '<td>' + cliente.persona.estado + '</td>' +
                    '<td>' + cliente.persona.telefono + '</td>' +
                    '<td>' + cliente.fechaRegistro + '</td>' +
                    '<td>' + cliente.persona.email + '</td>' +
                    '</tr>';
            cuerpo += registro;
        }
    });
    document.getElementById("tbCliente").innerHTML = cuerpo;
}
export function seleccionar(indice) {
    document.getElementById("nombre").value = clientes[indice].persona.nombre;
    document.getElementById("apellido_materno").value = clientes[indice].persona.apellidoMaterno;
    document.getElementById("apellido_paterno").value = clientes[indice].persona.apellidoPaterno;
    document.getElementById("genero").value = clientes[indice].persona.genero;
    document.getElementById("fecha_nacimiento").value = clientes[indice].persona.fechaNacimiento;
    document.getElementById("rfc").value = clientes[indice].persona.rfc;
    document.getElementById("curp").value = clientes[indice].persona.curp;
    document.getElementById("domicilio").value = clientes[indice].persona.domicilio;
    document.getElementById("codigo_postal").value = clientes[indice].persona.codigoPostal;
    document.getElementById("telefono").value = clientes[indice].persona.telefono;
    document.getElementById("email").value = clientes[indice].persona.email;
    document.getElementById("estado").value = clientes[indice].persona.estado;
    document.getElementById("ciudad").value = clientes[indice].persona.ciudad;

    iniceClienteSeleccionado = indice; 
}


export function revisarSeleccion() {
    let checkbox = document.getElementById('checkestatus');
    if (checkbox.checked)
        loadTable(0);
    else
        loadTable(1);
}

export function deleteCliente() {
    clientes[indiceClienteSeleccionado].estatus = 0;
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

export function modificarCliente() {
        let foto;
    let nombre, apellidoma, apellidopa, genero, fechanaci, rfc,
            curp, domicilio, codigopostal, tel, email, estado, ciudad, cliente = {}, persona = {};
    let fechar;
    
    nombre = document.getElementById("nombre").value;
    apellidopa = document.getElementById("apellido_paterno").value;
    apellidoma = document.getElementById("apellido_materno").value;
    genero = document.getElementById("genero").value;
    fechanaci = document.getElementById("fecha_nacimiento").value;
    rfc = document.getElementById("rfc").value;
    curp = document.getElementById("curp").value;
    domicilio = document.getElementById("domicilio").value;
    codigopostal = document.getElementById("codigo_postal").value;
    ciudad = document.getElementById("ciudad").value;
    estado = document.getElementById("estado").value;
    tel = document.getElementById("telefono").value;
    email = document.getElementById("email").value;
    fechar = clientes[indiceClienteSeleccionado].fecha_registro;

    persona.nombre = nombre;
    persona.apellidoPaterno = apellidopa;
    persona.apellidoMaterno = apellidoma;
    persona.genero = genero;
    persona.fechaNacimiento = fechanaci;
    persona.rfc = rfc;
    persona.curp = curp;
    
    if(genero=="Femenino"){
        foto="https://mccbrokerage.com/wp-content/uploads/Generic-Headshot-for-Website.png";
    }else if(genero="Masculino"){
        foto= "https://th.bing.com/th/id/OIP.rC2HdBb55el0DwZ713T9HgHaHa?pid=ImgDet&rs=1";
    }
    
    persona.fotos=foto;
    persona.domicilio = domicilio;
    persona.codigoPostal = codigopostal;
    persona.ciudad = ciudad;
    persona.estado = estado;
    persona.telefono = tel;
    persona.email = email;
    cliente.persona = persona;
    cliente.fechaRegistro = fechar;
    cliente.estatus = 1;

    clientes[indiceClienteSeleccionado] = cliente;
    loadTable(1);
}

export function addCliente() {

    let fechar, dia, mes, annio;
    let cliente = {};
    let persona = {};
    let nombre, apellidopa, apellidoma, genero, fechanac, rfc, curp, domicilio,
            codigopostal, email, ciudad, estado, telefono, fecha_registro;
     let foto;
    if(genero =="Femenino"){
        foto="https://mccbrokerage.com/wp-content/uploads/Generic-Headshot-for-Website.png";
    }else if(genero="Masculino"){
        foto= "https://th.bing.com/th/id/OIP.rC2HdBb55el0DwZ713T9HgHaHa?pid=ImgDet&rs=1";
    }

    nombre = document.getElementById("nombre").value;
    apellidoma = document.getElementById("apellido_materno").value;
    apellidopa = document.getElementById("apellido_paterno").value;
    genero = document.getElementById("genero").value;
    fechanac = document.getElementById("fecha_nacimiento").value;
    rfc = document.getElementById("rfc").value;
    curp = document.getElementById("curp").value;
    domicilio = document.getElementById("domicilio").value;
    codigopostal = document.getElementById("codigo_postal").value;
    ciudad = document.getElementById("ciudad").value;
    estado = document.getElementById("estado").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("email").value;

    persona.nombre = nombre;
    persona.apellidoPaterno = apellidopa;
    persona.apellidoMaterno = apellidoma;
    persona.genero = genero;
    persona.fechaNacimiento = fechanac;
    persona.rfc = rfc;
    persona.curp = curp;
    persona.fotos=foto;
    persona.domicilio = domicilio;
    persona.codigoPostal = codigopostal;
    persona.ciudad = ciudad;
    persona.estado = estado;
    persona.telefono = telefono;
    persona.email = email;
    cliente.persona = persona;

    fechar = new Date();
    annio = fechar.getFullYear();

    if ((fechar.getMonth() + 1) < 10)
        mes = "0" + (fechar.getMonth() + 1);
    else
        mes = "" + (fechar.getMonth() + 1);

    if ((fechar.getDate()) < 10)
        dia = "0" + (fechar.getDate());
    else
        dia = "" + (fechar.getDate());


    fecha_registro = annio + "-" + mes + "-" + dia;

    cliente.fechaRegistro = fecha_registro;
    cliente.estatus = 1;

    clientes.push(cliente);
    loadTable(1);
}

export function buscar(){
    let InputText= document.getElementById("txtbuscar").value.toString().toLowerCase();
    
    let tableBody = document.getElementById("tbCliente");
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
                tableRows[i].cells[10].textContent.toString().toLowerCase()+
                tableRows[i].cells[11].textContent.toString().toLowerCase()+
                tableRows[i].cells[12].textContent.toString().toLowerCase()+
                tableRows[i].cells[13].textContent.toString().toLowerCase();
        if (textoConsulta.indexOf(InputText) === -1) {
            tableRows[i].style.visibility = "collapse";
        }
        else{
            tableRows[i].style.visibility = "";
        }
    }
    
}