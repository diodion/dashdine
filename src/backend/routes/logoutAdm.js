const express = require('express');
const router = express.Router();
const logoutController = require('../controllers/admlogoutController');

router.get('/', logoutController.handleAdmLogout);

module.exports = router;