'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Administrador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relacion uno a uno con la tabla Usuario
      Administrador.belongsTo(models.Usuario, { foreignKey: 'idusuario' })

    }
  }
  Administrador.init({
    idusuario: DataTypes.INTEGER,
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Administrador',
  });
  return Administrador;
};