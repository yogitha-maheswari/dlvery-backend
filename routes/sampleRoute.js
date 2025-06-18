const express = require('express');
const router = express.Router();
const { getMessage } = require('../controllers/sampleController');

router.get('/', getMessage);

module.exports = router;
