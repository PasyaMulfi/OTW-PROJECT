const bcrypt = require('bcryptjs') 

 /** @type {import('sequelize-cli').Migration} */
module.exports = {  
  async up (queryInterface, Sequelize) {
    const users= [];
    let salt = bcrypt.genSaltSync(10);
    // users.push({
    //   name: 'admin Project',  
    //   role: 'admin',
    //   email: 'adminn@gmail.com',
    //   password: bcrypt.hashSync("rahasia", salt),
    //   createdAt: new Date(),
    //   updatedAt:  new Date()
    // });
    // users.push({
    //   name: 'admin Project',  
    //   role: 'member',
    //   email: 'balung@gmail.com',
    //   password: bcrypt.hashSync("balung123", salt),
    //   createdAt: new Date(),
    //   updatedAt:  new Date()
    // });
    
    return queryInterface.bulkInsert('Users', users, {});
  },
  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Users', null, {});
  }
};
