/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
let empleado = {};
let empleados = [];
let indiceEmpleadoSeleccionado;
export function loadTable(estatus) {
    let cuerpo = "";
    empleados.forEach(function (empleado) {
        if (estatus == 0 && empleado.persona.estatus == 0) {

            let registro =
                    '<tr onclick="moduloEmpleado.seleccionarEmpleado(' + empleados.indexOf(empleado) + ');">' +
                    '<td>' + empleado.empleado.codigoEmpleado + '</td>' +
                    '<td>' + empleado.empleado.salarioBruto + '</td>' +
                    '<td>' + empleado.empleado.fechaIngreso + '</td>' +
                    '<td>' + empleado.empleado.puesto + '</td>' +
                    '<td>' + empleado.usuario.contraseña + '</td>' +
                    '<td>' + empleado.usuario.tipoUsuario + '</td>' +
                    '<td>' + empleado.usuario.nombreUsuario + '</td>' +
                    '<td>' + empleado.persona.codigoPostal + '</td>' +
                    '<td>' + empleado.persona.curp + '</td>' +
                    '<td>' + empleado.persona.rfc + '</td>' +
                    '<td>' + empleado.persona.calle + " " + empleado.persona.colonia + " " + empleado.persona.numero + '</td>' +
                    '<td>' + '<img src=' + empleado.persona.foto + ' width="100" height="100">' + '</td>' +
                    '<td>' + empleado.persona.ciudad + '</td>' +
                    '<td>' + empleado.persona.estado + '</td>' +
                    '<td>' + empleado.persona.nombre + '</td>' +
                    '<td>' + empleado.persona.apellidoPaterno + '</td>' +
                    '<td>' + empleado.persona.apellidoMaterno + '</td>' +
                    '<td>' + empleado.persona.fechaNacimiento + '</td>' +
                    '<td>' + empleado.persona.telefono + '</td>' +
                    '<td>' + empleado.persona.email + '</td>' +
                    '<td>' + empleado.persona.genero + '</td>' +
                    '<td>' + empleado.persona.estatus + '</td>' +
                    '</tr>';
            cuerpo += registro;
        } else if (estatus == 1 && empleado.persona.estatus == 1) {
            let registro =
                    '<tr onclick="moduloEmpleado.seleccionarEmpleado(' + empleados.indexOf(empleado) + ');">' +
                    '<td>' + empleado.empleado.codigoEmpleado + '</td>' +
                    '<td>' + empleado.empleado.salarioBruto + '</td>' +
                    '<td>' + empleado.empleado.fechaIngreso + '</td>' +
                    '<td>' + empleado.empleado.puesto + '</td>' +
                    '<td>' + empleado.usuario.contraseña + '</td>' +
                    '<td>' + empleado.usuario.tipoUsuario + '</td>' +
                    '<td>' + empleado.usuario.nombreUsuario + '</td>' +
                    '<td>' + empleado.persona.codigoPostal + '</td>' +
                    '<td>' + empleado.persona.curp + '</td>' +
                    '<td>' + empleado.persona.rfc + '</td>' +
                    '<td>' + empleado.persona.calle + " " + empleado.persona.colonia + " " + empleado.persona.numero + '</td>' +
                    '<td>' + '<img src=' + empleado.persona.foto + ' width="100" height="100">' + '</td>' +
                    '<td>' + empleado.persona.ciudad + '</td>' +
                    '<td>' + empleado.persona.estado + '</td>' +
                    '<td>' + empleado.persona.nombre + '</td>' +
                    '<td>' + empleado.persona.apellidoPaterno + '</td>' +
                    '<td>' + empleado.persona.apellidoMaterno + '</td>' +
                    '<td>' + empleado.persona.fechaNacimiento + '</td>' +
                    '<td>' + empleado.persona.telefono + '</td>' +
                    '<td>' + empleado.persona.email + '</td>' +
                    '<td>' + empleado.persona.genero + '</td>' +
                    '</tr>';
            cuerpo += registro;
        }
    });
    document.getElementById("tbEmpleado").innerHTML = cuerpo;
}

fetch("modulos/empleados/dataEmpleado.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            empleados = jsondata;
            console.log(empleados);
            loadTable(1);
        }
        );


export function seleccionarEmpleado(indice) {
    document.getElementById("txtnombre").value = empleados[indice].persona.nombre;
    document.getElementById("txtapellido_materno").value = empleados[indice].persona.apellidoMaterno;
    document.getElementById("txtapellido_paterno").value = empleados[indice].persona.apellidoPaterno;
    document.getElementById("txtgenero").value = empleados[indice].persona.genero;
    document.getElementById("txtfecha_nacimiento").value = empleados[indice].persona.fechaNacimiento;
    document.getElementById("txtrfc").value = empleados[indice].persona.rfc;
    document.getElementById("txtcurp").value = empleados[indice].persona.curp;
    document.getElementById("txtcalle").value = empleados[indice].persona.calle;
    document.getElementById("txtcolonia").value = empleados[indice].persona.colonia;
    document.getElementById("txtno").value = empleados[indice].persona.numero;
    document.getElementById("txtcodigo_postal").value = empleados[indice].persona.codigoPostal;
    document.getElementById("txttelefono").value = empleados[indice].persona.telefono;
    document.getElementById("txtpuesto").value = empleados[indice].empleado.puesto;
    document.getElementById("txtemail").value = empleados[indice].persona.email;
    document.getElementById("txtestado").value = empleados[indice].persona.estado;
    document.getElementById("txtsalario").value = empleados[indice].empleado.salarioBruto;
    document.getElementById("txtciudad").value = empleados[indice].persona.ciudad;

    indiceEmpleadoSeleccionado = indice;

}

export function revisarSeleccion() {
    let checkbox = document.getElementById("chkStatus");
    if (checkbox.checked) {
        loadTable(0);
    } else {
        loadTable(1);
    }
    

}

export function deleteEmpleado() {
    empleados[indiceEmpleadoSeleccionado].persona.estatus = 0;
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

export function addEmpleado() {
    // Get values from form fields
    let salarioBruto =document.getElementById("txtsalario").value;
    let puesto = document.getElementById("txtpuesto").value;
    let codigoPostal = document.getElementById("txtcodigo_postal").value;
    let curp = document.getElementById("txtcurp").value;
    let rfc = document.getElementById("txtrfc").value;
    let calle = document.getElementById("txtcalle").value;
    let colonia = document.getElementById("txtcolonia").value;
    let numero = document.getElementById("txtno").value;
    let ciudad = document.getElementById("txtciudad").value;
    let estado = document.getElementById("txtestado").value;
    let nombre = document.getElementById("txtnombre").value;
    let apellidoMaterno = document.getElementById("txtapellido_materno").value;
    let apellidoPaterno = document.getElementById("txtapellido_paterno").value;
    let fechaNacimiento = document.getElementById("txtfecha_nacimiento").value;
    let telefono = document.getElementById("txttelefono").value;
    let email = document.getElementById("txtemail").value;
    let genero = document.getElementById("txtgenero").value;
    let tipoUsuario = "EMPS";
    let foto;

    // Calculate codigoEmpleado based on the logic you provided
    if(genero=="F"){
        foto="https://mccbrokerage.com/wp-content/uploads/Generic-Headshot-for-Website.png";
    }
    else if(genero="M"){
        foto="https://th.bing.com/th/id/OIP.rC2HdBb55el0DwZ713T9HgHaHa?pid=ImgDet&rs=1";
                
    }
    let fechar, annio, mes, dia, fechaIngreso;
    
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


    fechaIngreso = annio + "-" + mes + "-" + dia;
    let codigoEmpleado = nombre.charAt(0) + apellidoPaterno.charAt(0) + apellidoMaterno.charAt(0)+ annio + mes + dia;

    // Construct the employee object in alignment with the JSON structure
    let empleado = {
        empleado: {
            salarioBruto: salarioBruto,
            fechaIngreso: fechaIngreso,
            puesto: puesto,
            codigoEmpleado: codigoEmpleado
        },
        usuario: {
            contraseña: codigoEmpleado,
            tipoUsuario: tipoUsuario,
            nombreUsuario: codigoEmpleado
        },
        persona: {
            codigoPostal: codigoPostal,
            curp: curp,
            rfc: rfc,
            calle: calle,
            colonia: colonia,
            numero: numero,
            ciudad: ciudad,
            estado: estado,
            nombre: nombre,
            apellidoMaterno: apellidoMaterno,
            apellidoPaterno: apellidoPaterno,
            fechaNacimiento: fechaNacimiento,
            telefono: telefono,
            email: email,
            genero: genero,
            estatus: 1,
            foto:foto 
        }
    };

    // Push the new employee object into the empleados array
    empleados.push(empleado);

    // Call the loadTable function to update the table
    loadTable(1);
}


export function modificarEmpleado(){
    let codigoEmpleado, salarioBruto, puesto, codigoPostal, curp, rfc, calle, colonia, numero, ciudad, estado, nombre, apellidoMaterno, apellidoPaterno, fechaNacimiento, telefono, email, genero;
 
    // Get values from form fields
    salarioBruto = parseFloat(document.getElementById("txtsalario").value);
    puesto = document.getElementById("txtpuesto").value;
    codigoPostal = document.getElementById("txtcodigo_postal").value;
    curp = document.getElementById("txtcurp").value;
    rfc = document.getElementById("txtrfc").value;
    calle = document.getElementById("txtcalle").value;
    colonia = document.getElementById("txtcolonia").value;
    numero = document.getElementById("txtno").value;
    ciudad = document.getElementById("txtciudad").value;
    estado = document.getElementById("txtestado").value;
    nombre = document.getElementById("txtnombre").value;
    apellidoMaterno = document.getElementById("txtapellido_materno").value;
    apellidoPaterno = document.getElementById("txtapellido_paterno").value;
    fechaNacimiento = document.getElementById("txtfecha_nacimiento").value;
    telefono = document.getElementById("txttelefono").value;
    email = document.getElementById("txtemail").value;
    genero = document.getElementById("txtgenero").value;

    // Calculate codigoEmpleado based on your logic
    let foto;

    
    if(genero=="F"){
        foto="https://mccbrokerage.com/wp-content/uploads/Generic-Headshot-for-Website.png";
    }
    else if(genero="M"){
        foto="https://th.bing.com/th/id/OIP.rC2HdBb55el0DwZ713T9HgHaHa?pid=ImgDet&rs=1";
                
    }
    let fechar = empleados[indiceEmpleadoSeleccionado].empleado.fechaIngreso;
    let ap = apellidoMaterno.charAt(0);
    let app = apellidoPaterno.charAt(0);
    let nom = nombre.charAt(0);
    let annio = fechar.substring(0, 4);
    let mes = fechar.substring(5, 7);
    let dia = fechar.substring(8, 10);
    codigoEmpleado = nom + app + ap + annio + mes + dia;

    // Update user and employee information
    let empleado = {
        empleado: {
            salarioBruto: salarioBruto,
            fechaIngreso: fechar,
            puesto: puesto,
            codigoEmpleado: codigoEmpleado
        },
        usuario: {
            contraseña: codigoEmpleado,
            tipoUsuario: "EMPS",
            nombreUsuario: codigoEmpleado
        },
        persona: {
            codigoPostal: codigoPostal,
            curp: curp,
            rfc: rfc,
            calle: calle,
            colonia: colonia,
            numero: numero,
            ciudad: ciudad,
            estado: estado,
            nombre: nombre,
            apellidoMaterno: apellidoMaterno,
            apellidoPaterno: apellidoPaterno,
            fechaNacimiento: fechaNacimiento,
            telefono: telefono,
            email: email,
            genero: genero,
            estatus: 1,
            foto: foto // You can set the photo here
        }
    };

    // Update the employee in your array
    empleados[indiceEmpleadoSeleccionado] = empleado;

    // Call the loadTable function to update the table
    loadTable(1);
}


//export function buscarEmpleado(estatus) {
//    let datoBusqueda = document.getElementById("txtdatabusqueda").value;
//    let cuerpo = "";
//    empleados.forEach(function (empleado) {
//        let genero = empleado.persona.genero;
//        let nombre=empleado.persona.nombre.toLowerCase();
//        let apellidop=empleado.persona.apellidoPaterno.toLowerCase();
//        let apellidom = empleado.persona.apellidoMaterno.toLowerCase();
//        let codigoEmpleado=empleado.empleado.codigoEmpleado.toLowerCase();
//        let puesto=empleado.empleado.puesto.toLowerCase();
//        let fechaIngreso=empleado.empleado.fechaIngreso.toLowerCase();
//        let contraseña=empleado.usuario.contraseña.toLowerCase();
//        let tipoUsuario=empleado.usuario.tipoUsuario.toLowerCase();
//        let nombreUsuario=empleado.usuario.nombreUsuario.toLowerCase();
//        let codigoPostal = empleado.persona.codigoPostal;
//        let rfc = empleado.persona.rfc;
//        let calle = empleado.persona.calle;
//        let curp = empleado.persona.curp;
//        let colonia = empleado.persona.colonia;
//        let numero = empleado.persona.numero;
//        let ciudad = empleado.persona.ciudad;
//        let estado = empleado.persona.estado;
//        let telefono = empleado.persona.telefono;
//        let email = empleado.persona.email;
//        
//
//        
//        
//        if (nombre == datoBusqueda || apellidom==datoBusqueda || apellidop==datoBusqueda || 
//                genero==datoBusqueda || codigoEmpleado==datoBusqueda ||
//                puesto==datoBusqueda ||fechaIngreso==datoBusqueda ||contraseña==datoBusqueda ||
//                tipoUsuario==datoBusqueda ||nombreUsuario==datoBusqueda ||
//                codigoPostal==datoBusqueda||rfc==datoBusqueda||calle==datoBusqueda 
//                ||curp==datoBusqueda||colonia==datoBusqueda||numero==datoBusqueda||
//                ciudad==datoBusqueda||estado==datoBusqueda||telefono==datoBusqueda ) {
//            
//            if (estatus == 1 && empleado.persona.estatus == 1) {
//                let registro =
//                        '<tr onclick="moduloEmpleado.seleccionarEmpleado(' + empleados.indexOf(empleado) + ');">' +
//                    '<td>' + empleado.empleado.codigoEmpleado + '</td>' +
//                    '<td>' + empleado.empleado.salarioBruto + '</td>' +
//                    '<td>' + empleado.empleado.fechaIngreso + '</td>' +
//                    '<td>' + empleado.empleado.puesto + '</td>' +
//                    '<td>' + empleado.usuario.contraseña + '</td>' +
//                    '<td>' + empleado.usuario.tipoUsuario + '</td>' +
//                    '<td>' + empleado.usuario.nombreUsuario + '</td>' +
//                    '<td>' + empleado.persona.codigoPostal + '</td>' +
//                    '<td>' + empleado.persona.curp + '</td>' +
//                    '<td>' + empleado.persona.rfc + '</td>' +
//                    '<td>' + empleado.persona.calle + " " + empleado.persona.colonia + " " + empleado.persona.numero + '</td>' +
//                    '<td>' + '<img src=' + empleado.persona.foto + ' width="100" height="100">' + '</td>' +
//                    '<td>' + empleado.persona.ciudad + '</td>' +
//                    '<td>' + empleado.persona.estado + '</td>' +
//                    '<td>' + empleado.persona.nombre + '</td>' +
//                    '<td>' + empleado.persona.apellidoPaterno + '</td>' +
//                    '<td>' + empleado.persona.apellidoMaterno + '</td>' +
//                    '<td>' + empleado.persona.fechaNacimiento + '</td>' +
//                    '<td>' + empleado.persona.telefono + '</td>' +
//                    '<td>' + empleado.persona.email + '</td>' +
//                    '<td>' + empleado.persona.genero + '</td>' +
//                    '<td>' + empleado.persona.estatus + '</td>' +
//                    '</tr>';
//                cuerpo += registro;
//            } else if (estatus == 0 && empleado.persona.estatus == 0) {
//                let registro =
//                        '<tr onclick="moduloEmpleado.seleccionarEmpleado(' + empleados.indexOf(empleado) + ');">' +
//                    '<td>' + empleado.empleado.codigoEmpleado + '</td>' +
//                    '<td>' + empleado.empleado.salarioBruto + '</td>' +
//                    '<td>' + empleado.empleado.fechaIngreso + '</td>' +
//                    '<td>' + empleado.empleado.puesto + '</td>' +
//                    '<td>' + empleado.usuario.contraseña + '</td>' +
//                    '<td>' + empleado.usuario.tipoUsuario + '</td>' +
//                    '<td>' + empleado.usuario.nombreUsuario + '</td>' +
//                    '<td>' + empleado.persona.codigoPostal + '</td>' +
//                    '<td>' + empleado.persona.curp + '</td>' +
//                    '<td>' + empleado.persona.rfc + '</td>' +
//                    '<td>' + empleado.persona.calle + " " + empleado.persona.colonia + " " + empleado.persona.numero + '</td>' +
//                    '<td>' + '<img src=' + empleado.persona.foto + ' width="100" height="100">' + '</td>' +
//                    '<td>' + empleado.persona.ciudad + '</td>' +
//                    '<td>' + empleado.persona.estado + '</td>' +
//                    '<td>' + empleado.persona.nombre + '</td>' +
//                    '<td>' + empleado.persona.apellidoPaterno + '</td>' +
//                    '<td>' + empleado.persona.apellidoMaterno + '</td>' +
//                    '<td>' + empleado.persona.fechaNacimiento + '</td>' +
//                    '<td>' + empleado.persona.telefono + '</td>' +
//                    '<td>' + empleado.persona.email + '</td>' +
//                    '<td>' + empleado.persona.genero + '</td>' +
//                    '<td>' + empleado.persona.estatus + '</td>' +
//                    '</tr>';
//                cuerpo += registro;
//            }
//        }
//    });
//    document.getElementById("tbEmpleado").innerHTML = cuerpo;
//
//
//}


export function buscarEmpleado(){
    let InputText= document.getElementById("txtdatabusqueda").value.toString().toLowerCase();
    
    let tableBody = document.getElementById("tbEmpleado");
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
                tableRows[i].cells[13].textContent.toString().toLowerCase()+
                tableRows[i].cells[14].textContent.toString().toLowerCase()+
                tableRows[i].cells[15].textContent.toString().toLowerCase()+
                tableRows[i].cells[16].textContent.toString().toLowerCase()+
                tableRows[i].cells[17].textContent.toString().toLowerCase()+
                tableRows[i].cells[18].textContent.toString().toLowerCase()+
                tableRows[i].cells[19].textContent.toString().toLowerCase()+
                tableRows[i].cells[20].textContent.toString().toLowerCase();
        if (textoConsulta.indexOf(InputText) === -1) {
            tableRows[i].style.visibility = "collapse";
        }
        else{
            tableRows[i].style.visibility = "";
        }
    }
    
}