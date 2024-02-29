-- DROP VIEW IF EXISTS vista_cliente;
CREATE VIEW vista_cliente AS
SELECT
  c.idCliente AS idCliente,
  c.email AS email,
  c.fechaRegistro AS fechaRegistro,
  c.estatus AS estatus,
  p.idPersona AS idPersona,
  p.nombre AS nombre,
  p.apellidoPaterno AS apellidoPaterno,
  p.apellidoMaterno AS apellidoMaterno,
  p.genero AS genero,
  p.fechaNacimiento AS fechaNacimiento,
  p.rfc AS rfc,
  p.curp AS curp,
  p.domicilio AS domicilio,
  p.codigoPostal AS codigoPostal,
  p.ciudad AS ciudad,
  p.estado AS estado,
  p.telefono AS telefono,
  p.foto AS foto
FROM cliente c
INNER JOIN persona p ON c.idPersona = p.idPersona;

Create view vista_control_pedidos as 
select
c.idCompra,
c.fechaHoraPedido as fecha,
c.estatus,
s.nombre as nombreSucursal,
s.codigoPostal as codigoPostalSucursal,
s.ciudad AS ciudadSucursal,
s.estado as estadoSucursal,
concat(p.nombre,' ',p.apellidoPaterno,' ',p.apellidoMaterno) as nombreEmpleado,
pr.nombre as nombreProducto,
dc.precioCompra,
round(SUM(dc.cantidad*dc.precioCompra),2)as totalPedido
from compra c
inner join empleado e on c.idEmpleado=e.idEmpleado
inner join sucursal s on e.idSucursal=s.idSucursal
inner join detalleCompra dc on c.idCompra=dc.idCompra
inner join producto pr on dc.idProducto=pr.idProducto
inner join persona p on e.idPersona =p.idPersona
where 1 
group by c.idCompra, 
    c.fechaHoraPedido, 
    c.estatus, 
    s.nombre, 
    s.codigoPostal, 
    s.ciudad, 
    s.estado, 
    p.nombre, 
    p.apellidoPaterno, 
    p.apellidoMaterno, 
    pr.nombre, 
    dc.precioCompra;
    
    SELECT * FROM vista_control_pedidos;

CREATE VIEW vista_usuario_sucursal AS
SELECT u.idUsuario, u.nombreUsuario, u.contrasenia, u.rol, e.idSucursal
FROM usuario u
JOIN empleado e ON u.idUsuario = e.idUsuario;
SELECT * FROM sucursal;
SELECT * FROM vista_usuario_sucursal;

ALTER TABLE usuario 
ADD COLUMN lastToken VARCHAR(100);

CREATE VIEW vista_usuario_sucursal2 AS
SELECT u.idUsuario, u.nombreUsuario, u.contrasenia, u.rol, u.lastToken, e.idSucursal
FROM usuario u
INNER JOIN empleado e ON u.idUsuario = e.idUsuario;
select*from vista_usuario_sucursal2;