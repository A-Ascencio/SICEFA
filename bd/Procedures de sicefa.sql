/******* Proceedimiento Almacenado de Clientes ***********/

-- Procedimiento almacenado para insertar un nuevo Cliente.
DROP PROCEDURE IF EXISTS insertarCliente;
DELIMITER $$
CREATE PROCEDURE insertarCliente(
    /* Datos Personales */
    IN var_nombre          VARCHAR(64),    --  1
    IN var_apellidoPaterno VARCHAR(64),    --  2
    IN var_apellidoMaterno VARCHAR(64),    --  3
    IN var_genero          VARCHAR(2),     --  4
    IN var_fechaNacimiento VARCHAR(11),    --  5
    IN var_rfc             VARCHAR(14),    --  6
    IN var_curp            VARCHAR(19),    --  7
    IN var_domicilio       VARCHAR(129),   --  8
    IN var_codigoPostal    VARCHAR(11),    --  9
    IN var_ciudad          VARCHAR(46),    -- 10
    IN var_estado          VARCHAR(40),    -- 11
    IN var_telefono        VARCHAR(20),    -- 12
    IN var_foto            LONGTEXT,       -- 13
    IN var_email           VARCHAR(45),    -- 14
    IN var_fechaRegistro   VARCHAR(11),           -- 15
    IN var_estatus         INT,            -- 16

    /* Parametros de Salida */
    OUT var_idPersona      INT,             -- 17
    OUT var_idCliente	   INT              -- 18
)
BEGIN
    -- Comenzamos insertando los datos de la Persona:
    INSERT INTO persona (nombre, apellidoPaterno, apellidoMaterno, genero,
                         fechaNacimiento, rfc, curp, domicilio, codigoPostal,
                         ciudad, estado, telefono, foto)
                VALUES (var_nombre, var_apellidoPaterno, var_apellidoMaterno,
                        var_genero, var_fechaNacimiento,
                        var_rfc, var_curp, var_domicilio, var_codigoPostal,
                        var_ciudad, var_estado, var_telefono, var_foto);
   
    -- Obtenemos el ID de Persona que se generó:
    SET var_idPersona = LAST_INSERT_ID();
   
    -- Insertamos los datos del Cliente:
    INSERT INTO cliente (email, fechaRegistro, estatus, idPersona)
                VALUES (var_email, var_fechaRegistro, var_estatus, var_idPersona);
END
$$
DELIMITER ;

-- Procedimiento almacenado para modificar un Cliente.
DROP PROCEDURE IF EXISTS modificarCliente;
DELIMITER $$
CREATE PROCEDURE modificarCliente(
    /* Datos Personales */
    IN var_idCliente       INT,            -- 1
    IN var_nombre          VARCHAR(64),    -- 2
    IN var_apellidoPaterno VARCHAR(64),    -- 3
    IN var_apellidoMaterno VARCHAR(64),    -- 4
    IN var_genero          VARCHAR(15),    -- 5
    IN var_fechaNacimiento VARCHAR(11),    -- 6
    IN var_rfc             VARCHAR(14),    -- 7
    IN var_curp            VARCHAR(19),    -- 8
    IN var_domicilio       VARCHAR(129),   -- 9
    IN var_codigoPostal    VARCHAR(11),    -- 10
    IN var_ciudad          VARCHAR(46),    -- 11
    IN var_estado          VARCHAR(40),    -- 12
    IN var_telefono        VARCHAR(20),    -- 13
    IN var_foto            LONGTEXT,       -- 14

    /* Datos del Cliente */
    IN var_email           VARCHAR(45),    -- 15
    IN var_fechaRegistro   DATE,           -- 16
    IN var_estatus         INT,            -- 17
    IN var_idPersona       INT             -- 18
)
BEGIN
    -- Actualizamos los datos de la Persona:
    UPDATE persona
    SET nombre = var_nombre,
        apellidoPaterno = var_apellidoPaterno,
        apellidoMaterno = var_apellidoMaterno,
        genero = var_genero,
        fechaNacimiento = var_fechaNacimiento,
        rfc = var_rfc,
        curp = var_curp,
        domicilio = var_domicilio,
        codigoPostal = var_codigoPostal,
        ciudad = var_ciudad,
        estado = var_estado,
        telefono = var_telefono,
        foto = var_foto
    WHERE idPersona = (SELECT idPersona FROM cliente WHERE idCliente = var_idCliente);

    -- Actualizamos los datos del Cliente:
    UPDATE cliente
    SET email = var_email,
        fechaRegistro = var_fechaRegistro,
        estatus = var_estatus
    WHERE idCliente = var_idCliente;
END
$$
DELIMITER ;


DROP PROCEDURE IF EXISTS insertarSucursal;
DELIMITER $$
CREATE PROCEDURE insertarSucursal(
    /* Datos Sucursal */
    IN  var_nombre VARCHAR(49),    -- 1
    IN  var_titular VARCHAR(49),    -- 2
    IN  var_rfc VARCHAR(15),    -- 3
    IN  var_domicilio VARCHAR(129),    -- 4
    IN  var_colonia VARCHAR(65),    -- 5
    IN  var_codigoPostal VARCHAR(11),    -- 6
    IN  var_ciudad VARCHAR(65),    -- 7
    IN  var_estado VARCHAR(49),    -- 8
    IN  var_telefono VARCHAR(20),    -- 9
    IN  var_latitud VARCHAR(65),    -- 10
    IN  var_longitud VARCHAR(65),    -- 11

    /* Parametros de Salida */
    OUT var_idSucursal INT,    -- 12
    OUT var_idUsuario INT,    -- 13
    OUT var_nombreUsuario VARCHAR(33),    -- 14
    OUT var_contrasenia VARCHAR(33)    -- 15
)
BEGIN
    DECLARE idUsuarioMax INT;

    -- Comenzamos insertando los datos de la Sucursal:
    INSERT INTO sucursal(nombre, titular, rfc, domicilio, colonia, codigoPostal,
        ciudad, estado, telefono, latitud, longitud, estatus)
    VALUES(var_nombre, var_titular, var_rfc, var_domicilio, var_colonia, var_codigoPostal,
        var_ciudad, var_estado, var_telefono, var_latitud, var_longitud, 1);

    -- Recuperamos el ID de la Sucursal que se genero:
    SET var_idSucursal = LAST_INSERT_ID();

    -- Generamos el nombre del Usuario Administrador que por default tendra la Sucursal:
    SET idUsuarioMax = 1 + (SELECT MAX(idUsuario) FROM usuario);
    SET var_nombreUsuario = CONCAT('Admins', idUsuarioMax);
    SET var_contrasenia = var_nombreUsuario;

    -- Insertamos los datos del Usuario que tendra el Empleado:
    INSERT INTO usuario (nombreUsuario, contrasenia, rol)
    VALUES (var_nombreUsuario, var_contrasenia, 'ADMS');

    -- Recuperamos el ID de Usuario generado:
    SET var_idUsuario = LAST_INSERT_ID();
END
$$
DELIMITER ;



DELIMITER $$
CREATE PROCEDURE modificarSucursal(
    /* Datos a Modificar */
    IN var_idSucursal INT, -- 1
    IN var_nombre VARCHAR(49),    -- 2
    IN var_titular VARCHAR(49),    -- 3
    IN var_rfc VARCHAR(15),    -- 4
    IN var_domicilio VARCHAR(129),    -- 5
    IN var_colonia VARCHAR(65),    -- 6
    IN var_codigoPostal VARCHAR(11),    -- 7
    IN var_ciudad VARCHAR(65),    -- 8
    IN var_estado VARCHAR(49),    -- 9
    IN var_telefono VARCHAR(20),    -- 10
    IN var_latitud VARCHAR(65),    -- 11
    IN var_longitud VARCHAR(65)    -- 12
)
BEGIN
    -- Actualizamos los datos de la Sucursal:
    UPDATE sucursal
    SET
        nombre = var_nombre,
        titular = var_titular,
        rfc = var_rfc,
        domicilio = var_domicilio,
        colonia = var_colonia,
        codigoPostal = var_codigoPostal,
        ciudad = var_ciudad,
        estado = var_estado,
        telefono = var_telefono,
        latitud = var_latitud,
        longitud = var_longitud
        
    WHERE idSucursal = var_idSucursal;
END $$
DELIMITER ;


DELIMITER $$

CREATE PROCEDURE modificarEmpleado(
    /* Datos Personales */
    IN var_idEmpleado       INT,            -- 1
    IN var_nombre           VARCHAR(64),    -- 2
    IN var_apellidoPaterno  VARCHAR(64),    -- 3
    IN var_apellidoMaterno  VARCHAR(64),    -- 4
    IN var_genero           VARCHAR(15),    -- 5
    IN var_fechaNacimiento  VARCHAR(11),    -- 6
    IN var_rfc              VARCHAR(14),    -- 7
    IN var_curp             VARCHAR(19),    -- 8
    IN var_domicilio        VARCHAR(129),   -- 9
    IN var_cp               VARCHAR(11),    -- 10
    IN var_ciudad           VARCHAR(46),    -- 11
    IN var_estado           VARCHAR(40),    -- 12
    IN var_telefono         VARCHAR(20),    -- 13
    IN var_foto             LONGTEXT,       -- 14
    
    /* Datos del Usuario    */
    IN var_nombreUsuario    VARCHAR(45),    -- 15
    IN var_contrasenia      VARCHAR(45),    -- 16
    IN var_rol              VARCHAR(10),    -- 17
    
    /* Datos del Empleado */
    IN var_email            VARCHAR(65),    -- 18
    IN var_puesto           VARCHAR(25),    -- 19
    IN var_salarioBruto     FLOAT,          -- 20
    
    /* Datos de la Sucursal */
    IN var_idSucursal       INT             -- 21
)
BEGIN
    -- Actualizamos los datos de la Persona:
    UPDATE persona
    SET nombre = var_nombre,
        apellidoPaterno = var_apellidoPaterno,
        apellidoMaterno = var_apellidoMaterno,
        genero = var_genero,
        fechaNacimiento = var_fechaNacimiento,
        rfc = var_rfc,
        curp = var_curp,
        domicilio = var_domicilio,
        codigoPostal = var_cp,
        ciudad = var_ciudad,
        estado = var_estado,
        telefono = var_telefono,
        foto = var_foto
    WHERE idPersona = (SELECT idPersona FROM empleado WHERE idEmpleado = var_idEmpleado);
    
    -- Actualizamos los datos del Usuario:
    UPDATE usuario
    SET nombreUsuario = var_nombreUsuario,
        contrasenia = var_contrasenia,
        rol = var_rol
    WHERE idUsuario = (SELECT idUsuario FROM empleado WHERE idEmpleado = var_idEmpleado);
    
    -- Actualizamos los datos del Empleado:
    UPDATE empleado
    SET email = var_email,
        puesto = var_puesto,
        salarioBruto = var_salarioBruto,
        idSucursal = var_idSucursal
    WHERE idEmpleado = var_idEmpleado;
END
$$

DELIMITER ;


-- Procedimiento almacenado para insertar un nuevo Empleado.
DROP PROCEDURE IF EXISTS insertarEmpleado;
DELIMITER $$
CREATE PROCEDURE insertarEmpleado(/* Datos Personales */
                                    IN    var_nombre          VARCHAR(64),    --  1
                                    IN    var_apellidoPaterno VARCHAR(64),    --  2
                                    IN    var_apellidoMaterno VARCHAR(64),    --  3
                                    IN  var_genero          VARCHAR(2),     --  4
                                    IN  var_fechaNacimiento VARCHAR(11),    --  5
                                    IN  var_rfc             VARCHAR(14),    --  6
                                    IN  var_curp            VARCHAR(19),    --  7
                                    IN    var_domicilio       VARCHAR(129),   --  8
                                    IN  var_cp              VARCHAR(11),    --  9
                                    IN  var_ciudad          VARCHAR(46),    -- 10
                                    IN  var_estado          VARCHAR(40),    -- 11
                                    IN    var_telefono        VARCHAR(20),    -- 12
                                    IN    var_foto            LONGTEXT,       -- 13
                                   
                                  /* Datos del la Sucursal */
                                    IN  var_idSucursal      INT,            -- 14
                                   
                                  /* Datos del Usuario    */
                                    IN  var_nombreUsuario   VARCHAR(45),    -- 15
                                    IN  var_contrasenia     VARCHAR(45),    -- 16
                                    IN  var_rol             VARCHAR(10),    -- 17
                                  /* Datos del Empleado */
                                    IN  var_email           VARCHAR(65),    -- 18
                                    IN  var_puesto          VARCHAR(25),    -- 19
                                    IN  var_salarioBruto    FLOAT,          -- 20
                                 
                                  /* Parametros de Salida */
                                    OUT var_idPersona       INT,            -- 21
                                    OUT var_idUsuario       INT,            -- 22
                                    OUT var_idEmpleado      INT,            -- 23
                                    OUT var_codigoEmpleado  VARCHAR(9)      -- 24
                                 )
    BEGIN
        -- Comenzamos insertando los datos de la Persona:
        INSERT INTO persona (nombre, apellidoPaterno, apellidoMaterno, genero,
                             fechaNacimiento, rfc, curp, domicilio, codigoPostal,
                             ciudad, estado, telefono, foto)
                    VALUES( var_nombre, var_apellidoPaterno, var_apellidoMaterno,
                            var_genero,var_fechaNacimiento,
                            var_rfc, var_curp, var_domicilio, var_cp,
                            var_ciudad, var_estado, var_telefono, var_foto);
       
        -- Obtenemos el ID de Persona que se genero:
        SET var_idPersona = LAST_INSERT_ID();
       
        -- Generamos el Codigo del Empleado porque lo necesitamos
        -- para generar el usuario:
        CALL generarCodigoEmpleado(var_codigoEmpleado);
       
        -- Insertamos los datos del Usuario que tendra el Empleado:
        INSERT INTO usuario (nombreUsuario, contrasenia, rol)
                    VALUES (var_nombreUsuario, var_contrasenia, var_rol);
        -- Recuperamos el ID de Usuario generado:
        SET var_idUsuario = LAST_INSERT_ID();
       
        -- Insertamos los datos del Empleado:
        INSERT INTO empleado(email, codigo, fechaIngreso, puesto, salarioBruto, activo,
                             idPersona, idUsuario, idSucursal)
                    VALUES(var_email, var_codigoEmpleado, NOW(), var_puesto, var_salarioBruto,
                           1, var_idPersona, var_idUsuario, var_idSucursal);
        -- Recuperamos el ID de Empleado generado:
        SET var_idEmpleado = LAST_INSERT_ID();
    END
$$
DELIMITER ;


