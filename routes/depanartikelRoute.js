const express = require('express');
const router = express.Router();
const depanartikelController = require('../controllers/depanartikelController');

router.post('/api/v1/depanartikel/add', depanartikelController.store);
router.get('/api/v1/depanartikel', depanartikelController.index);
router.get('/api/v1/depanartikel/:id', depanartikelController.show);
router.put('/api/v1/depanartikel/:id', depanartikelController.update);
router.delete('/api/v1/depanartikel/:id', depanartikelController.destroy);

module.exports = router;