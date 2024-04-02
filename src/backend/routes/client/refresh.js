const express = require('express');
const router = express.Router();
const refreshTokenController = require('../../controllers/client/refreshTokenController');

router.get('/', refreshTokenController.handleRefreshToken);

module.exports = router;