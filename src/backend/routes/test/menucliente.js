const express = require('express');
const router = express.Router();
const menu = require('../../controllers/admin/menuController');

router.get('/', menu.getMenuCliente);

module.exports = router;