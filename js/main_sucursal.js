/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
let moduloSucursal;
function cargarModuloSucursales() {
    fetch("modulos/sucursales/vistaSucursal.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;
                        import("../modulos/sucursales/controlerSucursal.js").then(
                                function (controller) {
                                    moduloSucursal = controller;
                                }
                        );
                    }

            );

}


