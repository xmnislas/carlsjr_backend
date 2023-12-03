const express = require("express");
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Obtener usuarios
router.get('/', usuariosController.getUsuarios);
router.get('/:id', usuariosController.getUsuarioPorId);

// Agregar usuarios
router.post('/', usuariosController.addUsuario);

router.put('/:id', usuariosController.updateUser);
// Obtener usuarios
router.delete('/:id', usuariosController.deleteUser);

module.exports = router;
