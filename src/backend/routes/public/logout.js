const express = require('express');
const router = express.Router();
const logoutController = require('../../controllers/public/logoutController');

router.get('/', logoutController.handleLogout);

module.exports = router;