'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relacion uno a uno con la tabla Pago
      Pedido.belongsTo(models.Pago, { foreignKey: 'idpago' })

      // Relacion muchos a uno con la tabla Cliente
      Pedido.belongsTo(models.Cliente, { foreignKey: 'idcliente' })

      // Relacion uno a muchos con la tabla PedidoProducto
      Pedido.hasMany(models.PedidoProducto, { foreignKey: 'idpedido' })

    }
  }
  Pedido.init({
    idcliente: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    fecha: DataTypes.STRING,
    idpago: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};