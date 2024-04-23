const authController = require('./authController');
const userController = require('./userController');
const artikelController = require('./userController');
// const eventController = require('./eventController');

module.exports = {
    auth: authController,
    user: userController,
    artikel: artikelController
};