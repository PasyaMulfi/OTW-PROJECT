const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/api/v1/event/add', eventController.store);
router.get('/api/v1/event', eventController.index);
router.get('/api/v1/event/:id', eventController.show);
router.put('/api/v1/event/:id', eventController.update);
router.delete('/api/v1/event/:id', eventController.destroy);

module.exports = router;
    