/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

let productos=[];
let producto={};
fetch("modulos/productos/dataProducto.json")
        .then(
        response=>{
            return response.json();
        })
        .then(
                function (jsondata){
                    productos=jsondata;
                   loadTable();
                }
        );

export function loadTable(){
    let cuerpo="";
    productos.forEach(function(producto){
        let registro=
                '<tr>'+
                '<td>'+'<img src="' + producto.foto  + '" width="100" height="100">'+'</td>'+
                '<td>'+producto.nombre+'</td>'+
                '<td>'+producto.nombre_generico+'</td>'+
                '<td>'+producto.forma_farmaceutica+'</td>'+
                '<td>'+producto.unidad_medida+'</td>'+
                '<td>'+producto.presentacion+'</td>'+
                '<td>'+producto.principal_indicacion+'</td>'+
                '<td>'+producto.contraindicaciones+'</td>'+
                '<td>'+producto.concentracion+'</td>'+
                '<td>'+producto.unidades_envase+'</td>'+
                '<td>'+"$"+producto.precio_unitario+'</td>'+
                '<td>'+producto.inventario.cantidad+'</td> </tr>';
        cuerpo+=registro;
    });
    document.getElementById("tblProductos").innerHTML=cuerpo;
    
    
}

export function buscarProductos(){
    let InputText= document.getElementById("buscar").value.toString().toLowerCase();
    
    let tableBody = document.getElementById("tblProductos");
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
                tableRows[i].cells[10].textContent.toString().toLowerCase();
        if (textoConsulta.indexOf(InputText) === -1) {
            tableRows[i].style.visibility = "collapse";
        }
        else{
            tableRows[i].style.visibility = "";
        }
    }
    
}