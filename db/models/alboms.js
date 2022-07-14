const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Alboms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Alboms.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Alboms',
  });
  return Alboms;
};
