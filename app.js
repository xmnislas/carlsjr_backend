const express = require('express')
const app = express();
require('dotenv').config({ path: './variables.env' })
const usuarioRoutes = require('./routes/usuarioRouter')
const administradorRoutes = require("./routes/AdministradorRouter")
const pagoRoutes = require('./routes/PagoRouter')
const productoRoutes = require('./routes/ProductoRouter')
const pedidoProductoRoutes = require('./routes/PedidoProductoRouter')
const pedidoRoutes = require('./routes/PedidoRouter')
const clienteRoutes = require('./routes/ClienteRouter')
const morgan = require('morgan')
const { AppError, globalErrorHandler } = require("./utils/appError")
app.use(express.json())

app.use(morgan('combined'))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');   
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error');
});

app.use('/api/usuarios', usuarioRoutes)
app.use('/api/clientes', clienteRoutes)
app.use('/api/pagos', pagoRoutes)
app.use('/api/pedidos', pedidoRoutes)
app.use('/api/administradores', administradorRoutes)
app.use('/api/clientes', clienteRoutes)
app.use('/api/productos', productoRoutes)
app.use('/api/pedidosProductos', pedidoProductoRoutes)

app.all("*", (req, res, next) => {
    const error = new AppError('Ruta no encontrada o ha cambiado', 300)
    next(error);
})

app.use(globalErrorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Servidor express escuchando en el puerto: ', PORT);
})