const express = require('express');
const router = express.Router();
const PedidoController = require('../controllers/PedidoController');

// Crear pedido (ruta protegida)
router.post('/', PedidoController.crearPedido);

// Obtener pedidos (ruta pública)
router.get('/', PedidoController.obtenerPedidos);

// Obtener pedido por ID (ruta protegida)
router.get('/:id', PedidoController.obtenerPedidoPorId);

// Actualizar pedido por ID (ruta protegida)
router.put('/:id', PedidoController.actualizarPedido);

// Eliminar pedido por ID (ruta protegida)
router.delete('/:id', PedidoController.eliminarPedido);

module.exports = router;
