
/** @type {import('sequelize-cli').Migration} */
module.exports = {  
  async up (queryInterface, Sequelize) {
    let artikels= [];
    
    artikels.push({
      image: 'admin.png',
      title: 'saya admin',
      content: 'awagjanwhaugybdahnfuhabyufna',
      createdAt: new Date(),
      updatedAt:  new Date()
    });
    artikels.push({
      image: 'member.png',
      title: 'saya member',
      content: 'mwauhgaiydhgnayubwyauwnaygnag',
      createdAt: new Date(),
      updatedAt:  new Date()
    });
    return queryInterface.bulkInsert('Artikels', artikels, {});
  },
  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Artikels', null, {});
  }
};
