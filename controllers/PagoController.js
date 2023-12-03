const PagoDAO = require('../dataAccess/pagoDAO');
const {appError, AppError} = require('../utils/appError');

class PagoController{
    static async crearPago(req, res, next){
        try{
            const {subtotal, metodopago} = req.body;

            if(!subtotal|| !metodopago){
                next(new AppError('Los campos subtotal y metodopago son obligatorios', 500));
            }

            const pagoData = {subtotal, metodopago};

            const pago = await PagoDAO.crearPago(pagoData);
            res.status(201).json(pago);

        }catch(error){
            console.log(error);
            next (new AppError('Error al crear el pago', 500));
        }
    }

    static async obtenerPagoPorId(req, res, next){
        try {
            const id = req.params.id;

            const pago = await PagoDAO.obtenerPagoPorId(id);

            if(!pago){
                next(new AppError('No se encontró el pago'));
            }

            res.status(200).json(pago);
        } catch (error) {
            console.log(error);
            next(new AppError('No se logro obtener el pago', 500));
        }
    }

    static async obtenerPagos(req, res, next){
        try {
            const limit = req.params.limit || 10;

            const pagos = await PagoDAO.obtenerPago(limit);

            res.status(200).json(pagos);
        } catch (error) {
            console.log(error);
            next(new AppError('No se logro obtener los pagos', 500));
        }
    }

    static async actualizarPago(req, res, next){
        try {
            const id = req.params.id;
            const pagoData = req.body;

            const pago = await PagoDAO.actualizarPago(id, pagoData);

            if(!pago){
                next(new AppError('No se encontró el pago', 500));
            }

            res.status(200).json(pago);
        } catch (error) {
            console.log(error);
            next(new AppError('Error al actualizar pago', 500));
        }
    }

    static async eliminarPago(req, res, next){
        try {
            const id = req.params.id;

            const pago = await PagoDAO.eliminarPago(id);
            
            if(!pago){
                next(new AppError('No se encontró el pago', 500));
            }

            res.status(200).json({message: 'Pago eliminado correctamente'});
        } catch (error) {
            next(new AppError('Error al eliminar pago', 500));
        }
    }
}

module.exports = PagoController;