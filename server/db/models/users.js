const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Roles, { foreignKey: 'roles_id' });
      this.hasMany(models.CardsPaintes, { foreignKey: 'user_id' });
      this.hasMany(models.Responses, { foreignKey: 'user_id' });
      this.hasMany(models.Orders, { foreignKey: 'painter_id' });
      this.hasMany(models.Orders, { foreignKey: 'customer_id' });

      this.hasMany(models.Stars, { foreignKey: 'user_id' });
    }
  }

  Users.init({
    name: DataTypes.TEXT,
    password: DataTypes.TEXT,
    email: DataTypes.TEXT,
    roles_id: DataTypes.INTEGER,
    img: DataTypes.TEXT,
    sex: DataTypes.TEXT,
    title: DataTypes.TEXT,
    stars: DataTypes.INTEGER,
    discription: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
