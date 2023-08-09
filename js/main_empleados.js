/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
let moduloempleado;
function cargarModuloEmpleados() {
    fetch("modulos/empleados/vistaEmpleado.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;
                        import("../modulos/empleados/controlerEmpleado.js").then(
                                function (controller) {
                                    moduloEmpleado = controller;
                                }
                        );
                    }

            );

}


