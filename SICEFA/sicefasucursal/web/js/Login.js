function Ingresar() {
    let usuario = document.getElementById("usuario").value;
    let contrasenia = document.getElementById("contrasena").value;

    let params = {u: usuario, c: contrasenia};
    let ruta = "http://localhost:8080/sicefasucursal/api/acesso/login?";

    fetch(ruta,
            {
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
                body: new URLSearchParams(params)
            })
            .then(response => response.json())
            .then(response => {
                if (response.rol === 'ADMC') {
                    Swal.fire("Bienvenido administrador, \n\
            Ingreso correcta", response.result, "success");
                    console.log("Entra");
                    // Redirigir a la página de productos para administrador central
                    window.location.href = '../../../sicefacentral/html/principalCentral.html';
                } else if (response.rol === 'EMPS') {
                    Swal.fire("Ingreso adecuado", response.result, "success");
                    Swal.fire("Bienvenido administrador, \n\
            Ingreso correcta", response.result, "success");
                    console.log("Entra");
                    // Redirigir a la página de productos para administrador central
                    window.location.href = 'princ.html';
                } else if (response.error === 'Error') {
                    Swal.fire("Permiso dengado", response.error, "error");
                }

            });
}
var m1 = false;
var m2 = false;

function validarCampos() {
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    if (usuario === "") {
        alert("Todos los campos son obligatorios.");
        document.getElementById("usuario").focus();
        return false;
    } else {
        m1 = true;
    }
    if (contrasena === "") {
        alert("El campo contraseña es obligatorio.");
        document.getElementById("contrasena").focus();
        return false;
    } else {
        m2 = true;
    }
    if (m1 == true && m2 == true) {
        Ingresar();
        m1 = false;
        m2 = false;
    }

}

document.getElementById("iniciarSesion").addEventListener("click", function (event) {
    event.preventDefault();
    validarCampos();
});