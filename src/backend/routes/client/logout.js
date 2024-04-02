const express = require('express');
const router = express.Router();
const logoutController = require('../../controllers/client/logoutController');

router.get('/', logoutController.handleLogout);

module.exports = router;