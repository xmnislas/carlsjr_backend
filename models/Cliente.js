const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.belongsTo(models.Usuario, { foreignKey: 'idusuario' });
      Cliente.hasMany(models.Pedido, { foreignKey: 'idcliente' });
    }
  }

  Cliente.init({
    idusuario: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    telefono: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
    timestamps: false,  // Agregar esta línea para habilitar las marcas de tiempo
    updatedAt: false    // Opcional: si no necesitas updatedAt, puedes deshabilitarlo
  });

  return Cliente;
};