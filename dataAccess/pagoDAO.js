const { Pago } = require('../models/');

class PagoDAO {
    constructor() { };

    async crearPago(subtotal, metodopago) {
        try {
            const pagoNuevo = await Pago.create(subtotal, metodopago);
            return pagoNuevo;
        }
        catch (err) {
            throw err;
        }
    }

    async obtenerPago() {
        try {
            const pago = await Pago.findAll();
            return pago;
        }
        catch (err) {
            throw err;
        }
    }

    async obtenerPagoPorId(id) {
        try {
            const pago = await Pago.findByPk(id);
            if (!pago) {
                throw new Error('Pago no encontrado');
            }
            return pago;
        }
        catch (err) {
            throw err;
        }
    }

    async eliminarPago(id) {
        try {
            const pagoEliminar = await Pago.findByPk(id);
            if (!pagoEliminar) {
                throw new Error('Pago no encontrado');
            }
            await pagoEliminar.destroy();
            return 'Pago eliminado con éxito';
        }
        catch (err) {
            throw err;
        }
    }

    async actualizarPago(id, subtotal, metodopago) {
        try {
            const pagoActualizar = await Pago.findByPk(id);
            if (!pagoActualizar) {
                throw new Error('Pago no encontrado');
            }
            await pagoActualizar.update({ id, subtotal, metodopago}, { where: { id } });
            return 'Pago actualizado con éxito';
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = new PagoDAO();