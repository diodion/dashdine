const express = require('express');
const router = express.Router();
const loginController = require('../controllers/admloginController');

router.post('/', loginController.handleAdmLogin);

module.exports = router;