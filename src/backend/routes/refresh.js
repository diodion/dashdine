const express = require('express');
const router = express.Router();
const refreshTokenController = require('../controllers/refreshTokenController');

router.get('/cliente', refreshTokenController.userRefresht);
router.get('/web', refreshTokenController.funcRefresht);

module.exports = router;