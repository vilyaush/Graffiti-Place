const {
  Model, INTEGER,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CardsPaintes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Users, { foreignKey: 'user_id' });
    }
  }
  CardsPaintes.init({
    user_id: DataTypes.INTEGER,
    city: DataTypes.TEXT,
    description: DataTypes.TEXT,
    img: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'CardsPaintes',
  });
  return CardsPaintes;
};
