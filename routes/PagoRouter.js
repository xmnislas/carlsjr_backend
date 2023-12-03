const express = require('express');
const router = express.Router();
const PagoController = require('../controllers/PagoController');
const authMiddleware = require('../middleware/auth'); // Importa tu middleware de autenticación

// Crear pago (ruta protegida)
router.post('/', authMiddleware, PagoController.crearPago);

// Obtener pagos (ruta pública)
router.get('/', PagoController.obtenerPagos);

// Obtener pago por ID (ruta protegida)
router.get('/:id', authMiddleware, PagoController.obtenerPagoPorId);

// Actualizar pago por ID (ruta protegida)
router.put('/:id', authMiddleware, PagoController.actualizarPago);

// Eliminar pago por ID (ruta protegida)
router.delete('/:id', authMiddleware, PagoController.eliminarPago);

module.exports = router;
