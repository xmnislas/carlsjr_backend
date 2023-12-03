const { Cliente } = require('../models/');

class ClienteDAO {
    constructor() { };

async crearCliente(nombre, telefono) {
    try {
        const clienterNuevo = await Cliente.create(nombre, telefono );
        return clienterNuevo;
    } catch (err) {
        throw err;
    }
}

    async obtenerClientes() {
        try {
            const clientes = await Cliente.findAll();
            return clientes;
        }
        catch (err) {
            throw err;
        }
    }

    async obtenerClientePorId(id) {
        try {
            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                throw new Error('Cliente no encontrado');
            }
            return cliente;
        }
        catch (err) {
            throw err;
        }
    }

    async eliminarCliente(id) {
        try {
          const clienteEliminar = await Cliente.findByPk(id);
      
          if (!clienteEliminar) {
            throw new Error('Cliente no encontrado');
          }
      
          const filasEliminadas = await clienteEliminar.destroy();
      
          if (filasEliminadas === 0) {
            throw new Error('No se pudo eliminar el cliente');
          }
      
          return 'Cliente eliminado con éxito';
        } catch (err) {
            console.log(err);
          throw err;
        }
      }

    async actualizarCliente(id, clienteData) {
        try {
            const clienteActualizar = await Cliente.findByPk(id);
            if (!clienteActualizar) {
                throw new Error('Cliente no encontrado');
            }
    
            // Verificar si idusuario está presente antes de incluirlo en la actualización
            const { nombre, telefono, idusuario } = clienteData;
            const updateData = { nombre, telefono };
    
            if (idusuario !== null && idusuario !== undefined) {
                updateData.idusuario = idusuario;
            }
    
            await clienteActualizar.update(updateData);
            return 'Cliente actualizado con éxito';
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new ClienteDAO();