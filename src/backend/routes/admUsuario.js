const express = require('express');
const router = express.Router();
const cliente = require('../controllers/clienteController');
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
    paginacaoMiddleware(10), 
    cliente.userBusca);

module.exports = router;