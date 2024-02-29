
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
     } else {
        validarImg(txtaCodigoImagen);
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
    const regex1 = /^[A-Z]{4}[0-9]{6}[HM][A-Z]{6}[0-9]{1}$/;
    const regex2 = /^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9]{2}$/;

    if (!regex1.test(curp) && !regex2.test(curp)) {
        alert("El CURP debe tener un formato válido. \nEjemplos: \nASDC123456HASDFGH1\n \nASDF123456HASDFG12");
        document.getElementById("curp").focus();
        return false;
    } else {
        m8 = true;
    }
}

function validarImg(txtaCodigoImagen) {
     const regex = /^data:image\/(jpeg|jpg|png);base64,/i; 
    if (!regex.test(txtaCodigoImagen)) {
        alert("La imagen debe tener un formato válido: .JPG, .JPEG o .PNG");
        document.getElementById("txtaCodigoImagen").focus();
        return false;
    } else {
        m9 = true;
        return true;
    }
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
     } else {
        validarImg(txtaCodigoImagen);
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

