

 document.getElementById("login").addEventListener("submit", function(event) {
            event.preventDefault();

            // llamar variables
            const username = document.getElementById("usuario").value;
            const password = document.getElementById("contrasena").value;
            
            // json
            fetch("modulos/loginCentral/loginCentral.json")
                .then(response => response.json())
                .then(data => {
                    const users = data.user;
                    const userD = users.find(user => user.username === username && user.password === password && user.tipo==="administrador");
                    
                    if (userD) {
                        window.location.href ='index_admin_central.html';
                    }
                    else {
                        alert("Usuario y/o contraseña incorrecta.");
                    }
                });
        });