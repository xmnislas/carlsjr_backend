'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relacion uno a uno con la tabla Administrador
      Usuario.hasOne(models.Administrador, { foreignKey: 'idusuario' })

      // Relacion uno a uno con la tabla Cliente
      Usuario.hasOne(models.Cliente, { foreignKey: 'idusuario' })

    }
  }
  Usuario.init({
    usuario: DataTypes.STRING,
    contraseña: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};