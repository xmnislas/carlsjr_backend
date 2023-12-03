//Manejo de errores
const { AppError } = require("../utils/appError")
const  ProductoDAO  = require("../dataAccess/productoDAO")

class ProductoController {

    static async addProduct(req, res, next) {
        try {
            const { nombre, descripcion, precio, imagen, categoria } = req.body

            if (!nombre || !descripcion || !precio || !categoria) {
                throw new AppError('¡Faltan campos obligatorios!', 500)
            }
            const productoData = { nombre, descripcion, precio, imagen, categoria }
            const producto = await ProductoDAO.crearProducto(productoData);
            res.status(201).json(producto)
        } catch (err) {
            console.log(err);
            next(new AppError('Error al crear producto!', 500))
        }
    }

    static async getProductos(req, res, next) {
        try {
            const limit = req.params.limit || 10
            const productos = await ProductoDAO.obtenerProductos(limit)
            res.status(200).json(productos)
        } catch (err) {
            console.log(err);
            next(new AppError('Error al obtener los productos', 500))
        }
    }

    static async getProductoPorId(req, res, next) {
        try {
            const id = req.params.id
            const producto = await ProductoDAO.obtenerProductoPorId(id)
            if (!producto) {
                next(new AppError('Producto no encontrado', 500))
            }
            res.status(200).json(producto)
        } catch (error) {
            console.log(error);
            next(new AppError('Error al obtener producto o producto inexistente', 500))
        }
    }

    //elimina por id
    static async deleteProduct(req, res, next) {
        try {
            const id = req.params.index
            const producto = await ProductoDAO.eliminarProducto(id)

            if (!producto) {
                next(new AppError('No se encontró el producto', 500))
            }
            res.status(200).json({mesage:'Producto eliminado con éxito'}) //regresa un json con los usuarios, menos el usuario eliminado

        } catch (error) {
            console.log(error);
            next(new AppError('Error al eliminar producto', 500))
        }
    }

    static async updateProduct(req, res, next) {
        try {
            const id = req.params.id
            const productoData = req.body;
            const producto = await ProductoDAO.actualizarProducto(id, productoData)
            if (!producto) {
                next(new AppError('No se encontró el producto', 500))
            }
            res.status(200).json(producto)
        } catch (error) {
            next(new AppError('Error al actualizar el producto', 500))
        }
    }
}

module.exports = ProductoController;