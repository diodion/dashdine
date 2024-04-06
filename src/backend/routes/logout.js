const express = require('express');
const router = express.Router();
const logoutController = require('../controllers/logoutController');

router.get('/cliente', logoutController.userLogout);
router.get('/web', logoutController.funcLogout);

module.exports = router;