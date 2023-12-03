const { Administrador } = require('../models/');

class AdministradorDAO {
    constructor() { };

    async crearAdministrador(idusuario, nombre) {
        try {
            const administradorNuevo = await Administrador.create(idusuario, nombre);
            return administradorNuevo;
        }
        catch (err) {
            throw err;
        }
    }

    async obtenerAdministradores() {
        try {
            const administradores = await Administrador.findAll();
            return administradores;
        }
        catch (err) {
            throw err;
        }
    }

    async obtenerAdministradorPorId(id) {
        try {
            const administrador = await Administrador.findByPk(id);
            if (!administrador) {
                throw new Error('Administrador no encontrado');
            }
            return administrador;
        }
        catch (err) {
            throw err;
        }
    }

    async eliminarAdministrador(id) {
        try {
            const administradorEliminar = await Administrador.findByPk(id);
            if (!administradorEliminar) {
                throw new Error('Administrador no encontrado');
            }
            await administradorEliminar.destroy();
            return 'Administrador eliminado con exito';
        }
        catch (err) {
            throw err;
        }
    }

    async actualizarAdministrador(id, idusuario, nombre) {
        try {
            const administradorActualizar = await Administrador.findByPk(id);
            if (!administradorActualizar) {
                throw new Error('Administrador no encontrado');
            }
            await administradorActualizar.update({ idusuario, nombre}, { where: { id } });
            return 'Administrador actualizado con exito';
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = new AdministradorDAO();