
/** @type {import('sequelize-cli').Migration} */
module.exports = {  
  async up (queryInterface, Sequelize) {
    let events= [];

    events.push({
      name: 'admin.png',
      date: '',
      location: 'awagjanwhaugybdahnfuhabyufna',
      description: 'awagjanwhaugybdahnfuhabyufna',
      createdAt: new Date(),
      updatedAt:  new Date()
    });
    events.push({
      name: 'admin.png',
      date: '',
      location: 'awagjanwhaugybdahnfuhabyufna',
      description: 'awagjanwhaugybdahnfuhabyufna',
      createdAt: new Date(),
      updatedAt:  new Date()
    });
    return queryInterface.bulkInsert('Events', events, {});
  },
  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Events', null, {});
  }
};
