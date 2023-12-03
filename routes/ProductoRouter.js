const express = require("express");
const router = express.Router();
const productoController = require('../controllers/ProductoController');
const authMiddleware = require('../middleware/auth'); // Importa tu middleware de autenticación

// Obtener productos (ruta pública)
router.get('/', productoController.getProductos);

// Obtener producto por ID (ruta protegida)
router.get('/:id', authMiddleware, productoController.getProductoPorId);

// Agregar productos (ruta pública)
router.post('/', productoController.addProduct);

// Actualizar producto por ID (ruta protegida)
router.put('/:id', authMiddleware, productoController.updateProduct);

// Eliminar producto por ID (ruta protegida)
router.delete('/:id', authMiddleware, productoController.deleteProduct);

module.exports = router;
