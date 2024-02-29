
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

function validarCampos() {
    const nombre = document.getElementById('nombre').value;
    const nombreGenerico = document.getElementById('nombreGenerico').value;
    const formaFarmaceutica = document.getElementById('formaFarmaceutica').value;
    const unidadMedida = document.getElementById('unidadMedida').value;
    const presentacion = document.getElementById('presentacion').value;
    const principalIndicacion = document.getElementById('principalIndicacion').value;
    const contraindicaciones = document.getElementById('contraindicaciones').value;
    const concentracion = document.getElementById('concentracion').value;
    const unidadesEnvase = document.getElementById('unidadesEnvase').value;
    const precioCompra = document.getElementById('precioCompra').value;
    const precioVenta = document.getElementById('precioVenta').value;
    const txtaCodigoImagen = document.getElementById('txtaCodigoImagen').value;
    const txtRutaFoto = document.getElementById('txtRutaFoto').value;
    const codigoBarras = document.getElementById('codigoBarras').value;
    const txtIdProducto = document.getElementById('txtIdProducto').value;

    if (nombre === "") {
        alert("Ingrese un nombre");
        document.getElementById("nombre").focus();
        return false;
    } else {
        validarNombre(nombre);
    }

    if (nombreGenerico === "") {
        alert("Ingrese un nombre generico");
        document.getElementById("nombreGenerico").focus();
        return false;
    } else {
        validarnombreGenerico(nombreGenerico);
    }

    if (formaFarmaceutica === "") {
        alert("Ingrese una Forma Farmaceutica");
        document.getElementById("formaFarmaceutica").focus();
        return false;
    } else {
        validarformaFarmaceutica(formaFarmaceutica);
    }

    if (unidadMedida === "") {
        alert("Ingrese una Unidad Medida.");
        document.getElementById("unidadMedida").focus();
        return false;
    } else {
        validarunidadMedida(unidadMedida);
    }
    
    if (presentacion === "") {
        alert("Ingrese una presentacion.");
        document.getElementById("presentacion").focus();
        return false;
    }else{
        m5=true;
    return true;}

    if (principalIndicacion === "") {
        alert("Ingrese la Principal Indicacion");
        document.getElementById("principalIndicacion").focus();
        return false;
    }else{
        m6=true;
    return true;}

    if (contraindicaciones === "") {
        alert("Ingrese la/s contraindicaciones");
        document.getElementById("contraindicaciones").focus();
        return false;
    }else{
        m7=true;
    return true;}

    if (concentracion === "") {
        alert("Ingrese una concentracion");
        document.getElementById("concentracion").focus();
        return false;
    } else {
        validarconcentracion(concentracion);
    }

    if (unidadesEnvase === 0) {
        alert("Ingrese las Unidades de Envase");
        document.getElementById("unidadesEnvase").focus();
        return false;
    }else {
        validarunidadesEnvase(unidadesEnvase);
    }
    
    if (precioCompra === 0) {
        alert("Ingrese un Precio de Compra");
        document.getElementById("precioCompra").focus();
        return false;
    } else {
        validarprecioCompra(precioCompra);
    }
    
       if (precioVenta === 0) {
        alert("Ingrese un Precio de Venta");
        document.getElementById("precioVenta").focus();
        return false;
    } else {
        validarprecioVenta(precioVenta);
    }
        if (txtaCodigoImagen === "") {
        alert("Ingrese una imagen");
        document.getElementById("txtaCodigoImagen").focus();
        return false;
    }else{
        mvalidarImg(txtaCodigoImagen);
    }
    
    if (txtRutaFoto === "") {
        alert("Ingrese una Ruta de la foto");
        document.getElementById("txtRutaFoto").focus();
        return false;
    }else{
        m13=true;
    return true;}
    
    if (codigoBarras === "") {
        alert("Ingrese un Codigo de Barras");
        document.getElementById("codigoBarras").focus();
        return false;
    } else {
        validarcodigoBarras(codigoBarras);
    }
    
        if (m1 == true && m2 == true && m3 == true && m4 == true && m5 == true && m6 == true && m7 == true && m8 == true && m9 == true && m10 == true && m11 == true && m12 == true && m13 == true && m14 == true&& m15 == true&& m16 == true) {
        InsertarProducto();
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
    }else{
        m1=true;
    return true;}
}

function validarnombreGenerico(nombreGenerico) {
    const regex = /^[A-Za-z\s]+$/;

    if (!regex.test(nombreGenerico)) {
        alert("El campo Nombre Generico solo puede contener letras y espacios.");
        return false;
    }else{
        m2=true;
    return true;}
}

function validarformaFarmaceutica(formaFarmaceutica) {
    const regex = /^[A-Za-z\s]+$/;

    if (!regex.test(formaFarmaceutica)) {
        alert("El campo Forma Farmaceutica solo puede contener letras y espacios.");
        return false;
    }else{
        m3=true;
    return true;}
}

function validarunidadMedida(unidadMedida) {
    const regex = /^[A-Za-z\s]+$/;

    if (!regex.test(unidadMedida)) {
        alert("El campo Unidad de medida solo puede contener letras y espacios.");
        return false;
    }

    else{
        m4=true;
    return true;}
}

function validarconcentracion(concentracion) {
    const regex = /^[A-Za-z0-9]+$/;

    if (!regex.test(concentracion)) {
        alert("El campo concentracion solo puede contener letras y números.");
        return false;
    }

    else{
        m8=true;
    return true;}
}


function validarprecioCompra(precioCompra) {
    const regex = /^[0-9]+$/;

    if (!regex.test(precioCompra)) {
        alert("El campo Precio de compra solo puede contener números.");
        return false;
    }else{
        m10=true;
    return true;}
}

function validarunidadesEnvase(unidadesEnvase) {
    const regex = /^[0-9]+$/;

    if (!regex.test(unidadesEnvase)) {
        alert("El campo Unidades de envase solo puede contener números.");
        return false;
    }else{
        m9=true;
    return true;
    }

}

function validarprecioVenta(precioVenta) {
    const regex = /^[0-9]+$/;

    if (!regex.test(precioVenta)) {
        alert("El campo precio Venta solo puede contener números.");
        return false;
    }
    else{
        m11=true;
    return true;
    }
}

function validarImg(txtaCodigoImagen) {
     const regex = /^data:image\/(jpeg|jpg|png);base64,/i; 
    if (!regex.test(txtaCodigoImagen)) {
        alert("La imagen debe tener un formato válido: .JPG, .JPEG o .PNG");
        document.getElementById("txtaCodigoImagen").focus();
        return false;
    } else {
        m12 = true;
        return true;
    }
}

function validarcodigoBarras(codigoBarras) {
    const regex = /^[0-9]{13}$/;

    if (!regex.test(codigoBarras)) {
        alert("El campo Codigo de barras debe contener exactamente 13 números.");
        return false;
    }

    else{
        m14=true;
    return true;}
}

    document.getElementById("guardar").addEventListener("click", function (event) {
    event.preventDefault();
    validarCampos();
});

function validarCampos2() {
    const nombre = document.getElementById('nombre').value;
    const nombreGenerico = document.getElementById('nombreGenerico').value;
    const formaFarmaceutica = document.getElementById('formaFarmaceutica').value;
    const unidadMedida = document.getElementById('unidadMedida').value;
    const presentacion = document.getElementById('presentacion').value;
    const principalIndicacion = document.getElementById('principalIndicacion').value;
    const contraindicaciones = document.getElementById('contraindicaciones').value;
    const concentracion = document.getElementById('concentracion').value;
    const unidadesEnvase = document.getElementById('unidadesEnvase').value;
    const precioCompra = document.getElementById('precioCompra').value;
    const precioVenta = document.getElementById('precioVenta').value;
    const txtaCodigoImagen = document.getElementById('txtaCodigoImagen').value;
    const txtRutaFoto = document.getElementById('txtRutaFoto').value;
    const codigoBarras = document.getElementById('codigoBarras').value;
    const txtIdProducto = document.getElementById('txtIdProducto').value;

    if (nombre === "") {
        alert("Ingrese un nombre");
        document.getElementById("nombre").focus();
        return false;
    } else {
        validarNombre(nombre);
    }

    if (nombreGenerico === "") {
        alert("Ingrese un nombre generico");
        document.getElementById("nombreGenerico").focus();
        return false;
    } else {
        validarnombreGenerico(nombreGenerico);
    }

    if (formaFarmaceutica === "") {
        alert("Ingrese una Forma Farmaceutica");
        document.getElementById("formaFarmaceutica").focus();
        return false;
    } else {
        validarformaFarmaceutica(formaFarmaceutica);
    }

    if (unidadMedida === "") {
        alert("Ingrese una Unidad Medida.");
        document.getElementById("unidadMedida").focus();
        return false;
    } else {
        validarunidadMedida(unidadMedida);
    }
    
    if (presentacion === "") {
        alert("Ingrese una presentacion.");
        document.getElementById("presentacion").focus();
        return false;
    }else{
        m5=true;
    return true;}

    if (principalIndicacion === "") {
        alert("Ingrese la Principal Indicacion");
        document.getElementById("principalIndicacion").focus();
        return false;
    }else{
        m6=true;
    return true;}

    if (contraindicaciones === "") {
        alert("Ingrese la/s contraindicaciones");
        document.getElementById("contraindicaciones").focus();
        return false;
    }else{
        m7=true;
    return true;}

    if (concentracion === "") {
        alert("Ingrese una concentracion");
        document.getElementById("concentracion").focus();
        return false;
    } else {
        validarconcentracion(concentracion);
    }

    if (unidadesEnvase === 0) {
        alert("Ingrese las Unidades de Envase");
        document.getElementById("unidadesEnvase").focus();
        return false;
    }else {
        validarunidadesEnvase(unidadesEnvase);
    }
    
    if (precioCompra === 0) {
        alert("Ingrese un Precio de Compra");
        document.getElementById("precioCompra").focus();
        return false;
    } else {
        validarprecioCompra(precioCompra);
    }
    
       if (precioVenta === 0) {
        alert("Ingrese un Precio de Venta");
        document.getElementById("precioVenta").focus();
        return false;
    } else {
        validarprecioVenta(precioVenta);
    }
        if (txtaCodigoImagen === "") {
        alert("Ingrese una imagen");
        document.getElementById("txtaCodigoImagen").focus();
        return false;
    }else{
        validarImg(txtaCodigoImagen);}
    
    if (txtRutaFoto === "") {
        alert("Ingrese una Ruta de la foto");
        document.getElementById("txtRutaFoto").focus();
        return false;
    }else{
        m13=true;
    return true;}
    
    if (codigoBarras === "") {
        alert("Ingrese un Codigo de Barras");
        document.getElementById("codigoBarras").focus();
        return false;
    } else {
        validarcodigoBarras(codigoBarras);
    }
    
        if (m1 == true && m2 == true && m3 == true && m4 == true && m5 == true && m6 == true && m7 == true && m8 == true && m9 == true && m10 == true && m11 == true && m12 == true && m13 == true && m14 == true&& m15 == true&& m16 == true) {
        guardarCambiosProducto();
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
    
    document.getElementById("modd").addEventListener("click", function (event) {
    event.preventDefault();
    validarCampos2();
});