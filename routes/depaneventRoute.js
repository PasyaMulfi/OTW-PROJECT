const express = require('express');
const router = express.Router();
const depaneventController = require('../controllers/depaneventController');

router.post('/api/v1/depanevent/add', depaneventController.store);
router.get('/api/v1/depanevent', depaneventController.index);
router.get('/api/v1/depanevent/:id', depaneventController.show);
router.put('/api/v1/depanevent/:id', depaneventController.update);
router.delete('/api/v1/depanevent/:id', depaneventController.destroy);

module.exports = router;