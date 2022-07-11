const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Orders, { foreignKey: 'order_id' });
      this.belongsTo(models.Users, { foreignKey: 'user_id' });
    }
  }
  Stars.init({
    order_id: DataTypes.INTEGER,
    stars: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Stars',
  });
  return Stars;
};
