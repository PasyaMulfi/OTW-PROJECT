'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let galeris= [];

    galeris.push({
      image: 'galeri.png',
      title: '#TES',
      judul: 'LAGI PUSING',
      content: 'PASYA SEDANG MEMBUAT CRUD API YANG PUSING',
      createdAt: new Date(),
      updatedAt:  new Date()
    });
  return queryInterface.bulkInsert('Galeris', galeris, {});
},
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Galeris', null, {});
  }
};
