const express = require('express');
const router = express.Router();
const menu = require('../controllers/cardapioController');

router.get('/', menu.vercardapioCliente);

module.exports = router;