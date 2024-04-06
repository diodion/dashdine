const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/cliente', loginController.userLogin);
router.post('/web', loginController.funcLogin);

module.exports = router;