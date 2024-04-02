const express = require('express');
const router = express.Router();
const loginController = require('../../controllers/client/loginController');

router.post('/', loginController.handleLogin);

module.exports = router;