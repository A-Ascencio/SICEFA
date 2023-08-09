/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

let productos=[];
let producto={};
let indiceProductoSeleccionado;
fetch("modulos/productos/dataProducto.json")
        .then(
        response=>{
            return response.json();
        })
        .then(
                function (jsondata){
                    productos=jsondata;
                   loadTable(1);
                }
        );



export function loadTable(estatus){
            let cuerpo="";
    productos.forEach(function(producto){
        if(estatus==1 && producto.estatus==1){
        let registro=
                '<tr onclick="moduloProdctos2.seleccionarProducto('+productos.indexOf(producto)+');">'+
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
                '<td>'+"$"+producto.precio_unitario+'</td></tr>';
        cuerpo+=registro;
    }
        else if (estatus==0 && producto.estatus==0){
                   let registro=
                '<tr onclick="moduloProdctos2.seleccionarProducto('+productos.indexOf(producto)+');">'+
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
                '<td>'+"$"+producto.precio_unitario+'</td></tr>';
        cuerpo+=registro;
        }
    });
    document.getElementById("tblProductos").innerHTML=cuerpo;
}

export function addProducto(){
    
    let producto={};
    let 
            nombre,
            nombre_generico,
            forma_farmaceutica,
            unidad_medida,
            presentacion,
            principal_indicacion,
            contraindicaciones,
            concentracion,
            unidades_envase,
            precio_unitario,
            foto,
            ruta_foto;
    
    nombre=document.getElementById("nombre").value;
    nombre_generico=document.getElementById("nm_generico").value;
    forma_farmaceutica=document.getElementById("fm_farmaceutica").value;
    unidad_medida=document.getElementById("und_medida").value;
    presentacion=document.getElementById("presentacion").value;
    principal_indicacion=document.getElementById("prn_indicacion").value;
    contraindicaciones=document.getElementById("contraindicaciones").value;
    concentracion=document.getElementById("concentracion").value;
    unidades_envase=document.getElementById("und_envase").value;
    precio_unitario=document.getElementById("prc_unitario").value;
    foto=document.getElementById("foto").value;
    ruta_foto=document.getElementById("ruta_foto").value;
    
    
    producto.nombre=nombre;
    producto.nombre_generico=nombre_generico;
    producto.forma_farmaceutica=forma_farmaceutica;
    producto.unidad_medida=unidad_medida;
    producto.presentacion=presentacion;
    producto.principal_indicacion=principal_indicacion;
    producto.contraindicaciones=contraindicaciones;
    producto.concentracion=concentracion;
    producto.unidades_envase=unidades_envase;
    producto.precio_unitario=precio_unitario;
    producto.foto=foto;
    producto.ruta_foto=ruta_foto;
    
    producto.estatus=1;
    productos.push(producto);
    loadTable(1);
}

export function seleccionarProducto(indice){
    document.getElementById("nombre").value=productos[indice].nombre;
    document.getElementById("nm_generico").value=productos[indice].nombre_generico;
    document.getElementById("fm_farmaceutica").value=productos[indice].forma_farmaceutica;
    document.getElementById("und_medida").value=productos[indice].unidad_medida;
    document.getElementById("presentacion").value=productos[indice].presentacion;
    document.getElementById("prn_indicacion").value=productos[indice].principal_indicacion;
    document.getElementById("contraindicaciones").value=productos[indice].contraindicaciones;
    document.getElementById("concentracion").value=productos[indice].concentracion;
    document.getElementById("und_envase").value=productos[indice].unidades_envase;
    document.getElementById("prc_unitario").value=productos[indice].precio_unitario;
    document.getElementById("foto").value=productos[indice].foto;
    document.getElementById("ruta_foto").value=productos[indice].ruta_foto;
    
    indiceProductoSeleccionado=indice;
}

export function validarEstatus(){
    let checkbox = document.getElementById("clickestatus");
    if (checkbox.checked) {
        loadTable(1);
    }
    else{
        loadTable(0);
    }

}

export function deleteProducto(){
   productos[indiceProductoSeleccionado].estatus=0;
    loadTable(1);
    
}

export function modificarProducto(){
    let producto={};
    let 
            nombre,
            nombre_generico,
            forma_farmaceutica,
            unidad_medida,
            presentacion,
            principal_indicacion,
            contraindicaciones,
            concentracion,
            unidades_envase,
            precio_unitario,
            foto,
            ruta_foto;
    
    nombre=document.getElementById("nombre").value;
    nombre_generico=document.getElementById("nm_generico").value;
    forma_farmaceutica=document.getElementById("fm_farmaceutica").value;
    unidad_medida=document.getElementById("und_medida").value;
    presentacion=document.getElementById("presentacion").value;
    principal_indicacion=document.getElementById("prn_indicacion").value;
    contraindicaciones=document.getElementById("contraindicaciones").value;
    concentracion=document.getElementById("concentracion").value;
    unidades_envase=document.getElementById("und_envase").value;
    precio_unitario=document.getElementById("prc_unitario").value;
    foto=document.getElementById("foto").value;
    ruta_foto=document.getElementById("ruta_foto").value;
    
    
    producto.nombre=nombre;
    producto.nombre_generico=nombre_generico;
    producto.forma_farmaceutica=forma_farmaceutica;
    producto.unidad_medida=unidad_medida;
    producto.presentacion=presentacion;
    producto.principal_indicacion=principal_indicacion;
    producto.contraindicaciones=contraindicaciones;
    producto.concentracion=concentracion;
    producto.unidades_envase=unidades_envase;
    producto.precio_unitario=precio_unitario;
    producto.foto=foto;
    producto.ruta_foto=ruta_foto;
    producto.estatus=1;
    productos[indiceProductoSeleccionado]=producto;
    loadTable(1);
    
    
    
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