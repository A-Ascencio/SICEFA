
var m1 = false;
var m2 = false;

function validarCampos() {
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    
     if (usuario === "") {
        alert("Todos los campos son obligatorios.");
        document.getElementById("usuario").focus();
        return false;
  } else{
        m1=true;
}
    if (contrasena === "") {
        alert("El campo contraseña es obligatorio.");
        document.getElementById("contrasena").focus();
        return false;
   } else{
        m2=true;
}
        if (m1 == true && m2 == true){
        Ingresar();
        m1 = false;
        m2 = false;
    }
    
}

document.getElementById("iniciarSesion").addEventListener("click",function (event){
        event.preventDefault();
        validarCampos();
    });
    
