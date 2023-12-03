const express = require('express');
const router = express.Router();
const AdministradorController = require('../controllers/AdministradorController');
const { generateToken } = require('../utils/generateToken'); // Importa la función para generar el token

// Ruta de inicio de sesión
router.post('/login', (req, res) => {
  // Verifica las credenciales del administrador
  const administrador = AdministradorController.verificarCredenciales(req.body);

  if (administrador) {
    // Las credenciales son válidas, genera un token JWT
    const token = generateToken(administrador.id); // Reemplaza con la lógica de obtención del ID del administrador

    // Redirige al usuario a la página de inicio o devuelve el token en una respuesta
    // Aquí, se redirige al usuario a la página de inicio, pero puedes adaptarlo a tus necesidades
    res.redirect('/index.html');
  } else {
    // Las credenciales no son válidas, muestra un mensaje de error
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
});

module.exports = router;
