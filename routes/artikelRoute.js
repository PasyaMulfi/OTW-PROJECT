const express = require('express');
const router = express.Router();
const artikelController = require('../controllers/artikelController');

router.post('/api/v1/artikel/add', artikelController.store);
router.get('/api/v1/artikel', artikelController.index);
router.get('/api/v1/artikel/:id', artikelController.show);
router.put('/api/v1/artikel/:id', artikelController.update);
router.delete('/api/v1/artikel/:id', artikelController.destroy);

module.exports = router;
