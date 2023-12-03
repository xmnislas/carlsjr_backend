// middleware/auth.js

const jwt = require('jsonwebtoken');
function authMiddleware(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. Falta token.' });
  }
  try {
    const decoded = jwt.verify(token, 'secretKey'); // "SecretKey" se debe remplazar por una clave de nosotros pero mientras esa
    req.user = decoded;
    next();
  } catch (ex) {
    return res.status(400).json({ message: 'Token no válido.' });
  }
}

module.exports = authMiddleware;
