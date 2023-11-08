/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("customers", {
      id: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.INTEGER,
    },
  );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("customers");
  },
};
