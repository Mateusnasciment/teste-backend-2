'use strict';
const uuid = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const employees = [];
    for (let i = 0; i < 50; i++) {
      employees.push({
        id: uuid.v4(),
        name: `Employee ${i + 1}`,
        cpf: Math.floor(Math.random() * 10000000000).toString(),
        rg: Math.floor(Math.random() * 100000000).toString(),
        birthdate: new Date(),
        email: `employee${i + 1}@example.com`,
        phone: Math.floor(Math.random() * 10000000000).toString(),
        address: 'Some Address',
        sector: 'Some Sector',
        position: 'Some Position',
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('employees', employees, {});
  },

  // async down (queryInterface) {
  //   await queryInterface.bulkDelete('employees', null, {});
  // }
};
