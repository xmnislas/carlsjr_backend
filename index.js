const { sequelize } = require("./models");
const AdministradorDAO = require('./dataAccess/administradorDAO');
const ClienteDAO = require('./dataAccess/clienteDAO');
const ProductoDAO = require("./dataAccess/productoDAO");
const PagoDAO = require("./dataAccess/pagoDAO");
const PedidoDAO = require("./dataAccess/pedidoDAO");
const PedidoProductoDAO = require("./dataAccess/pedidoProductosDAO");

async function main() {
    try {
        await sequelize.sync();

        const nuevoUsuario = await UsuarioDAO.crearUsuario('user2', 'dsfsf');
        console.log('Usuario creado:', nuevoUsuario);

        // const usuarios = await UsuarioDAO.obtenerUsuarios();
        // console.log('Usuarios: ', usuarios);

        // const usuario = await UsuarioDAO.obtenerUsuarioPorId('5');
        // console.log('Usuario por id: ', usuario);

        // const usuarioActualizar = await UsuarioDAO.actualizarUsuario('1', 'lup', 'contra');

        // const usuarioEliminar = await UsuarioDAO.eliminarUsuario('1');
        // console.log(usuarioEliminar);


        // const nuevoAdministrador = await AdministradorDAO.crearAdministrador('4', 'Karla');
        // console.log('Administrador creado:', nuevoAdministrador);

        // const administradores = await AdministradorDAO.obtenerAdministradores();
        // console.log('Administradores: ', administradores);

        // const administrador = await AdministradorDAO.obtenerAdministradorPorId('1');
        // console.log('Administrador por id: ', administrador);

        // const administradorActualizar = await AdministradorDAO.actualizarAdministrador('1', '4', 'Roberta');
        // console.log(administradorActualizar);

        // const administradorEliminar = await AdministradorDAO.eliminarAdministrador('1');
        // console.log(administradorEliminar);


        // const nuevoCliente = await ClienteDAO.crearCliente(5, 'Diana', '543221');
        // console.log('Cliente creado:', nuevoCliente);

        // const clientes = await ClienteDAO.obtenerClientes();
        // console.log('Clientes: ', clientes);

        // const cliente = await ClienteDAO.obtenerClientePorId('1');
        // console.log('Cliente por id: ', cliente);

        // const clienteActualizar = await ClienteDAO.actualizarCliente('1', '5', 'Renata', '656435');
        // console.log(clienteActualizar);

        // const clienteEliminar = await ClienteDAO.eliminarCliente('1');
        // console.log(clienteEliminar);

        

        // const nuevoProducto = await ProductoDAO.crearProducto('Famous Star', 'Hamburguesa clasica', 110, 'Hamburguesas');
        // console.log('Producto creado:', nuevoProducto);

        // const productos = await ProductoDAO.obtenerProductos();
        // console.log('Productos: ', productos);

        // const producto = await ProductoDAO.obtenerProductoPorId('1');
        // console.log('Producto por id: ', producto);

        // const productoActualizar = await ProductoDAO.actualizarProducto('1', 'Western Bacon', 'Hamburguesa tocino', 120, 'Hamburguesas');
        // console.log(productoActualizar);

        // const productoEliminar = await ProductoDAO.eliminarProducto('1');
        // console.log(productoEliminar);


        // const nuevoPago = await PagoDAO.crearPago(350, 'Efectivo');
        // console.log('Pago creado:', nuevoPago);

        // const pagos = await PagoDAO.obtenerPago();
        // console.log('Pagos: ', pagos);

        // const nuevoPedido = await PedidoDAO.crearPedido(1, 230, '09/10/23', 1);
        // console.log('Pedido: ', nuevoPedido);

        // const nuevoPedidoProducto = await PedidoProductoDAO.crearPedidoProducto(1, 3, 1, 'Ninguna', 110);
        // console.log('PedidoProducto: ', nuevoPedidoProducto);

        const productosPedido = await PedidoProductoDAO.obtenerPedidosProducto();
        console.log('ProductosPedido: ', productosPedido);

    } catch (error) {
        console.log("Error: ", error);
    } finally {
        await sequelize.close();
    }
}

main();