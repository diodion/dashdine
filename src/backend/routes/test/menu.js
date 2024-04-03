const express = require('express');
const router = express.Router();
const menu = require('../../controllers/test/menuController');

router.get('/', menu.getMenu);


module.exports = router;