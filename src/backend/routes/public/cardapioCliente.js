const express = require('express');
const router = express.Router();
const menu = require('../../controllers/admin/cardapioController');

router.get('/', menu.vercardapioCliente);

module.exports = router;