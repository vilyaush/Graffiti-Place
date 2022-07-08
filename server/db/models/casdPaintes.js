const {
  Model, INTEGER,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CasdPaintes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Users, { foreignKey: 'user_id' });
    }
  }
  CasdPaintes.init({
    user_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
    albom_id: DataTypes.INTEGER,
    discription: DataTypes.TEXT,
    img: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'CasdPaintes',
  });
  return CasdPaintes;
};
