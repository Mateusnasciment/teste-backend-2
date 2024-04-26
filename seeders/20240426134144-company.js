'use strict';
const uuid = require('uuid');


/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const companies = [];
    for (let i = 0; i < 50; i++) {
      companies.push({
        id: uuid.v4(),
        name: `Company ${i + 1}`,
        cnpj: Math.floor(Math.random() * 100000000000000).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('companies', companies, {});
  },


  // async down (queryInterface, Sequelize) {
  //   await queryInterface.bulkDelete('companies', null, {});
  // }
};
