const express = require('express');
const router = express.Router();
const Pedido = require('../controllers/pedidoController');
const paginacaoMiddleware = require('../middleware/paginacao');
const LISTACARGO = require('../config/cargosList');
const verificaCargos = require('../middleware/verificaCargo');

router.route('/pedidos/vendas/')
    .get(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Coordenador,
            LISTACARGO.Gerente,
        ),
        paginacaoMiddleware(10),
        Pedido.relatorioVendidos);

router.route('/pedidos/ganhos/')
    .get(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Coordenador,
            LISTACARGO.Gerente,
        ),
    Pedido.relatorioGanhos);

module.exports = router;