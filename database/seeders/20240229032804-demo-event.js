
/** @type {import('sequelize-cli').Migration} */
module.exports = {  
  async up (queryInterface, Sequelize) {
    let events= [];

    events.push({
      tittle: 'pasya gantenk',
      date: '22072024',
      image: 'p.png',
      location: 'At Pasar Baru Bandung',
      description: 'HADIRILAH!!!!!!',
      createdAt: new Date(),
      updatedAt:  new Date()
    });
    return queryInterface.bulkInsert('Events', events, {});
  },
  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Events', null, {});
  }
};
