module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [{

      roles: 'Художник',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roles: 'Заказчик',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
