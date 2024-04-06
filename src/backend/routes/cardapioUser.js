const express = require('express');
const router = express.Router();
const cardapio = require('../controllers/cardapioController');

router.get('/', cardapio.verCardapioUser);

module.exports = router;