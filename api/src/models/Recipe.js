const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:  {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:  "https://blog.weareangular.com/wp-content/uploads/2021/03/Banner-%E2%80%A2-Errores-al-programar.jpg",
    },
    summary:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health_score:  {
      type: DataTypes.INTEGER,
    },
    steps:  {
      type: DataTypes.ARRAY(DataTypes.JSON),
     },
     createInDb:  {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
