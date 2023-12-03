const AdministradorDAO = require('../dataAccess/administradorDAO');
const { AppError } = require('../utils/appError');
const { verifyToken } = require('../middleware/auth');

class AdministradorController {
  static async crearAdministrador(req, res, next) {
    try {
      const { idusuario, nombre } = req.body;

      if (!idusuario || !nombre) {
        next(new AppError('Los campos idusuario y nombre son obligatorios', 500));
      }

      const administradorData = { idusuario, nombre };

      const administrador = await AdministradorDAO.crearAdministrador(administradorData);
      res.status(201).json(administrador);
    } catch (error) {
      console.log(error);
      next(new AppError('Error al crear el administrador', 500));
    }
  }

  static async obtenerAdministradorPorId(req, res, next) {
    verifyToken(req, res, next); // Verifica el token antes de continuar
    try {
      const id = req.params.id;
      const administrador = await AdministradorDAO.obtenerAdministradorPorId(id);
      if (!administrador) {
        next(new AppError('No se encontró el administrador'));
      }
      res.status(200).json(administrador);
    } catch (error) {
      console.log(error);
      next(new AppError('No se logró obtener el administrador', 500));
    }
  }

  static async obtenerAdministradores(req, res, next) {
    verifyToken(req, res, next); // Verifica el token antes de continuar
    try {
      const administradores = await AdministradorDAO.obtenerAdministradores();
      res.status(200).json(administradores);
    } catch (error) {
      console.log(error);
      next(new AppError('No se logró obtener los administradores', 500));
    }
  }

  static async actualizarAdministrador(req, res, next) {
    verifyToken(req, res, next); // Verifica el token antes de continuar
    try {
      const id = req.params.id;
      const { idusuario, nombre } = req.body;
      const administradorData = { idusuario, nombre };
      const administrador = await AdministradorDAO.actualizarAdministrador(id, administradorData);
      if (!administrador) {
        next(new AppError('No se encontró el administrador', 500));
      }
      res.status(200).json(administrador);
    } catch (error) {
      console.log(error);
      next(new AppError('Error al actualizar administrador', 500));
    }
  }

  static async eliminarAdministrador(req, res, next) {
    verifyToken(req, res, next); // Verifica el token antes de continuar
    try {
      const id = req.params.id;
      const administrador = await AdministradorDAO.eliminarAdministrador(id);
      if (!administrador) {
        next(new AppError('No se encontró el administrador', 500));
      }
      res.status(200).json({ message: 'Administrador eliminado correctamente' });
    } catch (error) {
      next(new AppError('Error al eliminar administrador', 500));
    }
  }
}

module.exports = AdministradorController;
