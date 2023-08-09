/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
let moduloProdctos;
function cargarModuloProdctos(){
fetch("modulos/productos/vistaProducto.html")
        .then(
                    function (response){
                        return response.text();
                    }
        )
        .then(
                    function (html){
                        //se puede cambiar lo de html
                        document.getElementById("contenedorPrincipal").innerHTML=html;
                        import ("../modulos/productos/controladorProducto.js").then(
                                function (controller) {
                                    moduloProdctos=controller;
                                }
                                );
                    }
        );
}

let moduloProdctos2;
function cargarModuloProdctos2(){
fetch("modulos/productos/vistaProducto_1.html")
        .then(
                    function (response){
                        return response.text();
                    }
        )
        .then(
                    function (html){
                        //se puede cambiar lo de html
                        document.getElementById("contenedorPrincipal").innerHTML=html;
                        import ("../modulos/productos/controladorProducto_1.js").then(
                                function (controller) {
                                    moduloProdctos2=controller;
                                }
                                );
                    }
        );
}

