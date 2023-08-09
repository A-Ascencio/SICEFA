

 document.getElementById("login").addEventListener("submit", function(event) {
            event.preventDefault();

            // llamar variables
            const username = document.getElementById("usuario").value;
            const password = document.getElementById("contrasena").value;
            
            
            // json
            fetch("modulos/loginSucursal/loginSucursal.json")
                .then(response => response.json())
                .then(data => {
                    const users = data.user;
                    const userD = users.find(user => user.username == username && user.password == password && user.tipo=="administrador");
                    const userU = users.find(user => user.username == username && user.password == password && user.tipo=="empleado");
                    
                    if (userD) {
                        window.location.href ='index_admin_sucursal.html';
                    }
                    else if(userU){
                         
                          window.location.href ='index_empleado_sucursal.html';
                    }
                    else {
                        alert("Usuario y/o contraseña incorrecta.");
                    }
                });
        });