const express = require('express');
const warrantyController = require('../controllers/warrantyController');
const validateSerialNumber = require('../middleware/validateSerialNumber');

const router = express.Router();

router.get('/warranty/:serialNumber', validateSerialNumber, warrantyController.getWarrantyStatus);

module.exports = router;