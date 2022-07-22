const {DataTypes}=require('sequelize');
module.exports = (Sequelize) =>  {
  Sequelize.define('Diet', {
    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4,
    //   allowNull: false,
    //   primaryKey: true
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })
}