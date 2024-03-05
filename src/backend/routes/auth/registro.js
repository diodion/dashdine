const express = require('express');
const router = express.Router();
const registroController = require('../../controllers/auth/registroController');

router.post('/', registroController.handleNovoUsuario);

module.exports = router;