const express = require('express');
const router = express.Router();
const registrar = require('../controllers/usuarioController');

router.post('/', registrar.cadastraUser);

module.exports = router;