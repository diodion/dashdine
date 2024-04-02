const express = require('express');
const router = express.Router();
const registroController = require('../../controllers/client/registroController');

router.post('/', registroController.handleNovoUsuario);

module.exports = router;