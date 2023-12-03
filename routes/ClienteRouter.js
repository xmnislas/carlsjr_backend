const express = require("express")
const router = express.Router()
const clienteController = require('../controllers/ClienteController.js')

//obtener usuarios
router.get('/', clienteController.getClientes);
router.get('/:id', clienteController.getClientePorId);

//agregar usuarios
router.post('/', clienteController.addCliente);

router.put('/:id', clienteController.updateCliente);
//obtener usuarios
router.delete('/:id', clienteController.deleteCliente);


module.exports = router;
