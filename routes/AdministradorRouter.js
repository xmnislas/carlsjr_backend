const express = require('express');
const router = express.Router();
const AdministradorController = require('../controllers/AdministradorController');

// Crear administrador (ruta protegida)
router.post('/', AdministradorController.crearAdministrador);

// Obtener administradores (ruta protegida)
router.get('/', AdministradorController.obtenerAdministradores);

// Obtener administrador por ID (ruta protegida)
router.get('/:id', AdministradorController.obtenerAdministradorPorId);

// Actualizar administrador por ID (ruta protegida)
router.put('/:id', AdministradorController.actualizarAdministrador);

// Eliminar administrador por ID (ruta protegida)
router.delete('/:id', AdministradorController.eliminarAdministrador);

module.exports = router;
