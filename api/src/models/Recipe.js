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
      defaultValue:  "https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-sin-foto-o-icono-de-imagen-en-blanco-cargando-im%C3%A1genes-o-marca-de-imagen-faltante-imagen-no-disponib.jpg?ver=6",
    },
    summary:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health_score:  {
      type: DataTypes.INTEGER,
    },
    steps:  {
      type: DataTypes.TEXT,
     },
     createInDb:  {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
   
  });
};
