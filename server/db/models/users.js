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
      this.hasMany(models.Roles, { foreignKey: 'roles_id' });
    }
  }

  Users.init({
    login: DataTypes.TEXT,
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
