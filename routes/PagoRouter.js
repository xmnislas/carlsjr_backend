const express = require('express');
const router = express.Router();
const PagoController = require('../controllers/PagoController');

// Crear pago (ruta protegida)
router.post('/', PagoController.crearPago);

// Obtener pagos (ruta pública)
router.get('/', PagoController.obtenerPagos);

// Obtener pago por ID (ruta protegida)
router.get('/:id', PagoController.obtenerPagoPorId);

// Actualizar pago por ID (ruta protegida)
router.put('/:id', PagoController.actualizarPago);

// Eliminar pago por ID (ruta protegida)
router.delete('/:id', PagoController.eliminarPago);

module.exports = router;
