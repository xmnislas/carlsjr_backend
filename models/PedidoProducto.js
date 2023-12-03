'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PedidoProducto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relacion muchos a uno con la tabla Pedido
      PedidoProducto.belongsTo(models.Pedido, { foreignKey: 'idpedido' })

      // Relacion muchos a uno con la tabla Producto
      PedidoProducto.belongsTo(models.Producto, { foreignKey: 'idproducto' })

    }
  }
  PedidoProducto.init({
    idpedido: DataTypes.INTEGER,
    idproducto: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    instrucciones: DataTypes.STRING,
    importe: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'PedidoProducto',
  });
  return PedidoProducto;
};