const { PedidoProducto } = require('../models/');


class PedidoDAO {
    constructor() { };
    // CRUD Aplicación

    async crearPedidoProducto(idpedido, idproducto, cantidad, instrucciones, importe) {
        try {
            const pedidoProducto = await PedidoProducto.create( idpedido, idproducto, cantidad, instrucciones, importe );
            return pedidoProducto;
        }
        catch (err) {
            console.log('Error: ', err)
        }
    }

    async obtenerPedidosProducto() {
        try {
            const pedidosProductos = await PedidoProducto.findAll();
            return pedidosProductos;
        }
        catch (err) {
            console.log('', err)
        }
    }
    async obtenerPedidosProductoPorId(id) {
        try {
            const pedidoProducto = await PedidoProducto.findByPk(id);
            return pedidoProducto;
        }
        catch (err) {
            console.log('', err)
        }
    }

    async eliminarPedidoProducto(id) {
        try {
            const pedidoProductoElminar = await PedidoProducto.findByPk(id);
            if (!pedidoProductoElminar) {
                throw new Error('Producto Pedido no encontrado')
            }
            await pedidoElminar.destroy();
            return 'Producto Pedido eliminado con exito!';
        }
        catch (err) {
            console.log('', err)
        }
    }

    async actualizarProductoProducto(id, idPedido, idProducto, cantidad, instrucciones, importe) {
        try {
            const pedidoProductoActualizar = await PedidoProducto.findByPk(id);
            if (!pedidoProductoActualizar) {
                throw new Error('Producto Pedido no encontrado')
            }
            await pedidoActualizar.update({ idPedido, idProducto, cantidad, instrucciones, importe }, { where: { id } });
            return 'Producto Pedido actualizado con exito!';
        }
        catch (err) {
            console.log('', err)
        }
    }
}

module.exports = new PedidoDAO();