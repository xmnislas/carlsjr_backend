'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relacion uno a uno con la tabla Pedido
      Pago.hasOne(models.Pedido, { foreignKey: 'idpago' })

    }
  }
  Pago.init({
    subtotal: DataTypes.DECIMAL,
    metodopago: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pago',
  });
  return Pago;
};