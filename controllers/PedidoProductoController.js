const PedidoProductoDAO = require('../dataAccess/pedidoProductosDAO');
const {AppError} = require('../utils/appError');

class PedidoProductoController{
    static async crearPedidoProducto(req, res, next){
        try{
            const {idpedido, idproducto, cantidad, instrucciones, importe} = req.body;

            if(!idpedido || !idproducto || !cantidad || !instrucciones || !importe){
                next(new AppError('Los campos son obligatorios', 500));
            }

            const pedidoProductoData = {idpedido, idproducto, cantidad, instrucciones, importe};

            const pedidoProducto = await PedidoProductoDAO.crearPedidoProducto(pedidoProductoData);
            res.status(201).json(pedidoProducto);

        }catch(error){
            console.log(error);
            next (new AppError('Error al crear el pedidoProducto', 500));
        }
    }

    static async obtenerPedidoProductoPorId(req, res, next){
        try {
            const id = req.params.id;

            const pedidoProducto = await PedidoProductoDAO.obtenerPedidosProductoPorId(id);

            if(!pedidoProducto){
                next(new AppError('No se encontró el pedidoProducto'));
            }

            res.status(200).json(pedidoProducto);
        } catch (error) {
            console.log(error);
            next(new AppError('No se logró obtener el pedidoProducto', 500));
        }
    }

    static async obtenerPedidoProductos(req, res, next){
        try {
            const limit = req.params.limit || 10;

            const pedidosProductos = await PedidoProductoDAO.obtenerPedidosProducto(limit);

            res.status(200).json(pedidosProductos);
        } catch (error) {
            console.log(error);
            next(new AppError('No se logro obtener los pedidosProductos', 500));
        }
    }

    static async actualizarPedidoProducto(req, res, next){
        try {
            const id = req.params.id;
            const pedidoProductoData = req.body;

            const pedidoProducto = await PedidoProductoDAO.actualizarProductoProducto(id, pedidoProductoData);

            if(!pedidoProducto){
                next(new AppError('No se encontró el pedidoProducto', 500));
            }

            res.status(200).json(pago);
        } catch (error) {
            console.log(error);
            next(new AppError('Error al actualizar pedidoProducto', 500));
        }
    }

    static async eliminarPedidoProducto(req, res, next){
        try {
            const id = req.params.id;

            const pedidoProducto = await PedidoProductoDAO.eliminarPedidoProducto(id);
            
            if(!pedidoProducto){
                next(new AppError('No se encontró el pedidoProducto', 500));
            }

            res.status(200).json({message: 'PedidoProducto eliminado correctamente'});
        } catch (error) {
            console.log(error);
            next(new AppError('Error al eliminar pedidoProducto', 500));
        }
    }
}

module.exports = PedidoProductoController;