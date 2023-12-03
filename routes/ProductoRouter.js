const express = require("express");
const router = express.Router();
const productoController = require('../controllers/ProductoController');

// Obtener productos (ruta pública)
router.get('/', productoController.getProductos);

// Obtener producto por ID (ruta protegida)
router.get('/:id', productoController.getProductoPorId);

// Agregar productos (ruta pública)
router.post('/', productoController.addProduct);

// Actualizar producto por ID (ruta protegida)
router.put('/:id', productoController.updateProduct);

// Eliminar producto por ID (ruta protegida)
router.delete('/:id', productoController.deleteProduct);

module.exports = router;
