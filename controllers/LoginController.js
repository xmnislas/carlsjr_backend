const { appError, AppError } = require("../utils/appError");
const usuarioController = require("../controllers/usuariosController");

class LoginController {
  static async iniciarSesion(req, res, next) {
    try {
      const { usuario, contraseña } = req.body;

      if (!usuario || !contraseña) {
        throw new AppError('Usuario y contraseña son obligatorios', 400);
      }

      // Buscar el usuario en la base de datos por nombre de usuario y contraseña
      const usuarioAutenticado = await Usuario.findOne({
        where: {
          usuario: usuario,
          contraseña: contraseña,
        },
      });

      if (!usuarioAutenticado) {
        throw new AppError('Credenciales inválidas', 401);
      }

      res.status(200).send("Welcome 🙌 ");
    } catch (error) {
      console.log(error);
      next(new AppError('Error al iniciar sesión', 500));
    }
  }
}

module.exports = LoginController;
