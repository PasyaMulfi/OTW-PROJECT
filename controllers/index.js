const authController = require('./authController');
const userController = require('./userController');
const artikelController = require('./userController');
const galeriController = require('./galeriController');
const eventController = require('./eventController');
const depaneventController = require('./depaneventController')
const depanartikelController = require('./depanartikelController')

module.exports = {
    auth: authController,
    user: userController,
    artikel: artikelController,
    galeri: galeriController,
    event: eventController,
    depanevent: depaneventController,
    depanartikel: depanartikelController
};