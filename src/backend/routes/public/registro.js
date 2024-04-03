const express = require('express');
const router = express.Router();
const registroController = require('../../controllers/public/registroController');

router.post('/', registroController.handleNovoUsuario);

module.exports = router;