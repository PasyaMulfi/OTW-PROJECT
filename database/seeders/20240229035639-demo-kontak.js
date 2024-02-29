
/** @type {import('sequelize-cli').Migration} */
module.exports = {  
  async up (queryInterface, Sequelize) {
    let kontaks= [];
    kontaks.push({
      name: 'admin.png',
      email: 'admin@gmail.com',
      deskripsi: 'awagjanwhaugybdahnfuhabyufna',
      createdAt: new Date(),
      updatedAt:  new Date()
    });
    kontaks.push({
      name: 'admin.png',
      email: 'admin@gmail.com',
      deskripsi: 'awagjanwhaugybdahnfuhabyufna',
      createdAt: new Date(),
      updatedAt:  new Date()
    });
    return queryInterface.bulkInsert('Kontaks', kontaks, {});
  },
  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Kontaks', null, {});
  }
};
