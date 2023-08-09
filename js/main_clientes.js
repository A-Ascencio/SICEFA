/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
let moduloCliente;
function cargarModuloClientes() {
    fetch("modulos/clientes/vistaCliente.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;
                        import("../modulos/clientes/controlerCliente.js").then(
                                function (controller) {
                                    moduloCliente = controller;
                                }
                        );
                    }

            );

}


