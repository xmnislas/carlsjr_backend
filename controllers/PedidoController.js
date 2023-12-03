const PedidoDAO = require('../dataAccess/pedidoDAO');
const {AppError} = require('../utils/appError');

class PedidoController{
    static async crearPedido(req, res, next){
        try{
            const {idcliente, total, fecha, idpago} = req.body;

            if(!idcliente || !total || !fecha || !idpago){
                next(new AppError('Los campos idcliente, total, fecha, idpago son obligatorios', 500));
            }

            const pedidoData = {idcliente, total, fecha, idpago};

            const pedido = await PedidoDAO.crearPedido(pedidoData);
            res.status(201).json(pedido);

        }catch(error){
            console.log(error);
            next (new AppError('Error al crear el pedido', 500));
        }
    }

    static async obtenerPedidoPorId(req, res, next){
        try {
            const id = req.params.id;

            const pedido = await PedidoDAO.obtenerPedidosPorId(id);

            if(!pedido){
                next(new AppError('No se encontró el pedido'));
            }

            res.status(200).json(pedido);
        } catch (error) {
            console.log(error);
            next(new AppError('No se logró obtener el pedido', 500));
        }
    }

    static async obtenerPedidos(req, res, next){
        try {
            const limit = req.params.limit || 10;

            const pedidos = await PedidoDAO.obtenerPedidos(limit);

            res.status(200).json(pedidos);
        } catch (error) {
            console.log(error);
            next(new AppError('No se logro obtener los pedidos', 500));
        }
    }

    static async actualizarPedido(req, res, next){
        try {
            const id = req.params.id;
            const pedidoData = req.body;

            const pedido = await PedidoDAO.actualizarPedido(id, pedidoData);

            if(!pedido){
                next(new AppError('No se encontró el pedido', 500));
            }

            res.status(200).json(pago);
        } catch (error) {
            console.log(error);
            next(new AppError('Error al actualizar pedido', 500));
        }
    }

    static async eliminarPedido(req, res, next){
        try {
            const id = req.params.id;

            const pedido = await PedidoDAO.eliminarPedido(id);
            
            if(!pedido){
                next(new AppError('No se encontró el pedido', 500));
            }

            res.status(200).json({message: 'Pedido eliminado correctamente'});
        } catch (error) {
            console.log(error);
            next(new AppError('Error al eliminar pedido', 500));
        }
    }
}

module.exports = PedidoController;