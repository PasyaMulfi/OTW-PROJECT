const authController = require('./authController');
const userController = require('./userController');
const artikelController = require('./userController');

module.exports = {
    auth: authController,
    user: userController,
    artikel: artikelController
};