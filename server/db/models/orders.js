const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Responses, { foreignKey: 'order_id' });
      this.belongsTo(models.Users, { foreignKey: 'painter_id' });
      this.belongsTo(models.Users, { foreignKey: 'customer_id' });
      this.hasOne(models.Stars, { foreignKey: 'order_id' });
    }
  }
  Orders.init({
    customer_id: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    img: DataTypes.TEXT,
    description: DataTypes.TEXT,
    painter_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};
