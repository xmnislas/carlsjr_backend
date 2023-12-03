const { Producto } = require('../models/');

class ProductoDAO {
    constructor() { };

    async crearProducto(nombre, descripcion, precio, imagen, categoria) {
        try {
            const productoNuevo = await Producto.create( nombre, descripcion, precio, imagen, categoria );
            return productoNuevo;
        }
        catch (err) {
            throw err;
        }
    }

    async obtenerProductos() {
        try {
            const productos = await Producto.findAll();
            return productos;
        }
        catch (err) {
            throw err;
        }
    }

    async obtenerProductoPorId(id) {
        try {
            const producto = await Producto.findByPk(id);
            if (!producto) {
                throw new Error('Producto no encontrado');
            }
            return producto;
        }
        catch (err) {
            throw err;
        }
    }

    async eliminarProducto(id) {
        try {
            const productoEliminar = await Producto.findByPk(id);
            if (!productoEliminar) {
                throw new Error('Producto no encontrado');
            }
            await productoEliminar.destroy();
            return 'Producto eliminado con exito';
        }
        catch (err) {
            throw err;
        }
    }

    async actualizarProducto(id, nombre, descripcion, precio, imagen, categoria) {
        try {
            const productoActualizar = await Producto.findByPk(id);
            if (!productoActualizar) {
                throw new Error('Producto no encontrado');
            }
            await productoActualizar.update({ nombre, descripcion, precio, imagen, categoria }, { where: { id } });
            return 'Producto actualizado con exito';
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = new ProductoDAO();