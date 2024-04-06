const express = require('express');
const router = express.Router();
const registroController = require('../controllers/admcadastroController');
const LISTACARGO = require('../config/cargosList');
const verificaCargos = require('../middleware/verificaCargo');


router.route('/')
    .post(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Gerente,
        ),
        registroController.handleNovoFuncionario)

module.exports = router;