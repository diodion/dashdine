const express = require('express');
const router = express.Router();
const refreshTokenController = require('../controllers/admrefreshController');

router.get('/', refreshTokenController.handleAdmRefreshToken);

module.exports = router;