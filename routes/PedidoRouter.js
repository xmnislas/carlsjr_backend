const express = require('express');
const router = express.Router();
const PedidoController = require('../controllers/PedidoController');
const authMiddleware = require('../middleware/auth'); // Importa tu middleware de autenticación

// Crear pedido (ruta protegida)
router.post('/', authMiddleware, PedidoController.crearPedido);

// Obtener pedidos (ruta pública)
router.get('/', PedidoController.obtenerPedidos);

// Obtener pedido por ID (ruta protegida)
router.get('/:id', authMiddleware, PedidoController.obtenerPedidoPorId);

// Actualizar pedido por ID (ruta protegida)
router.put('/:id', authMiddleware, PedidoController.actualizarPedido);

// Eliminar pedido por ID (ruta protegida)
router.delete('/:id', authMiddleware, PedidoController.eliminarPedido);

module.exports = router;
