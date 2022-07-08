const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Responses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Orders, { foreignKey: 'order_id' });
      this.hasOne(models.Users, { foreignKey: 'user_id' });
    }
  }
  Responses.init({
    order_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Responses',
  });
  return Responses;
};
