const { Pedido } = require('../models');


class PedidoDAO {
    constructor() { };
    // CRUD Aplicación

    async crearPedido(idcliente, total, fecha, idpago) {
        try {
            const pedido = await Pedido.create( idcliente, total, fecha, idpago );
            return pedido;
        }
        catch (err) {
            console.log('Error: ', err)
        }
    }
    async obtenerPedidos() {
        try {
            const pedidos = await Pedido.findAll();
            return pedidos;
        }
        catch (err) {
            console.log('', err)
        }
    }
    async obtenerPedidosPorId(id) {
        try {
            const pedidos = await Pedido.findByPk(id);
            return pedidos;
        }
        catch (err) {
            console.log('', err)
        }
    }

    async eliminarPedido(id) {
        try {
            const pedidoElminar = await Pedido.findByPk(id);
            if (!pedidoElminar) {
                throw new Error('Pedido no encontrado')
            }
            await pedidoElminar.destroy();
            return 'Pedido eliminado con exito!';
        }
        catch (err) {
            console.log('', err)
        }
    }

    async actualizarPedido(id, idcliente, total, fecha, idPago) {
        try {
            const pedidoActualizar = await Pedido.findByPk(id);
            if (!pedidoActualizar) {
                throw new Error('Pedido no encontrado')
            }
            await pedidoActualizar.update({ idcliente, total, fecha, idPago }, { where: { id } });
            return 'Pedido actualizado con exito!';
        }
        catch (err) {
            console.log('', err)
        }
    }
}

module.exports = new PedidoDAO();