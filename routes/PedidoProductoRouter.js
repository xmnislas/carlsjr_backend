const express = require('express');
const router = express.Router();
const PedidoProductoController = require('../controllers/PedidoProductoController');

router.post('/', PedidoProductoController.crearPedidoProducto);
router.get('/', PedidoProductoController.obtenerPedidoProductos);
router.get('/:id', PedidoProductoController.obtenerPedidoProductoPorId);
router.put('/:id', PedidoProductoController.actualizarPedidoProducto);
router.delete('/:id', PedidoProductoController.eliminarPedidoProducto);

module.exports = router;