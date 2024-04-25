const express = require('express');
const router = express.Router();
const galeriController = require('../controllers/galeriController');

router.post('/api/v1/galeri/add', galeriController.store);
router.get('/api/v1/galeri', galeriController.fetchGaleri);
router.get('/api/v1/galeri/:id', galeriController.show);
router.put('/api/v1/galeri/:id', galeriController.update);
router.delete('/api/v1/galeri/:id', galeriController.destroy);

module.exports = router;