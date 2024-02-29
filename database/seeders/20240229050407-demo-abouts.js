
/** @type {import('sequelize-cli').Migration} */
module.exports = {  
  async up (queryInterface, Sequelize) {
    let abouts= [];

    abouts.push({
      title: 'pusing sih',
      deskripsi: 'awagjanwhaugybdahnfuhabyufna',
      createdAt: new Date(),
      updatedAt:  new Date()
    });
    abouts.push({
      title: 'pusing sih',
      deskripsi: 'awagjanwhaugybdahnfuhabyufna',
      createdAt: new Date(),
      updatedAt:  new Date()
    });
    return queryInterface.bulkInsert('Abouts', abouts, {});
  },
  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Abouts', null, {});
  }
};
