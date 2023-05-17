const express = require('express');
const deviceController = require('../controllers/deviceController');

const router = express.Router();

router.get('/create', deviceController.device_create_get);
router.get('/', deviceController.device_index);
router.post('/', deviceController.device_create_post);
router.get('/:id', deviceController.device_details);
router.delete('/:id', deviceController.device_delete);

module.exports = router;