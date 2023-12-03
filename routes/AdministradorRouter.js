const express = require('express');
const router = express.Router();
const AdministradorController = require('../controllers/AdministradorController');
const authMiddleware = require('../middleware/auth'); // Importa tu middleware de autenticación

// Crear administrador (ruta protegida)
router.post('/', authMiddleware, AdministradorController.crearAdministrador);

// Obtener administradores (ruta protegida)
router.get('/', authMiddleware, AdministradorController.obtenerAdministradores);

// Obtener administrador por ID (ruta protegida)
router.get('/:id', authMiddleware, AdministradorController.obtenerAdministradorPorId);

// Actualizar administrador por ID (ruta protegida)
router.put('/:id', authMiddleware, AdministradorController.actualizarAdministrador);

// Eliminar administrador por ID (ruta protegida)
router.delete('/:id', authMiddleware, AdministradorController.eliminarAdministrador);

module.exports = router;
