const express = require('express');
const router = express.Router();
const buscaController = require('../controllers/buscaclienteController');
const LISTACARGO = require('../config/cargosList');
const verificaCargos = require('../middleware/verificaCargo');
const paginacaoMiddleware = require('../middleware/paginacao');

router.route('/')
    .get(
        verificaCargos(
        LISTACARGO.Admin,
        LISTACARGO.Superuser, 
        LISTACARGO.Atendente,
        LISTACARGO.Gerente,
        LISTACARGO.Cordenador
        ), 
    paginacaoMiddleware(1), 
    buscaController.getAllUsuarios);

module.exports = router;