const express = require('express');
const router = express.Router();
const Pedido = require('../controllers/pedidoController');
const paginacaoMiddleware = require('../middleware/paginacao');
const LISTACARGO = require('../config/cargosList');
const verificaCargos = require('../middleware/verificaCargo');

router.post('/',
        verificaCargos(
            LISTACARGO.Cliente
        ), 
        Pedido.criarPedido);

router.route('/pega/:id')
    .get(
        verificaCargos(
            LISTACARGO.Cliente
        ),
        paginacaoMiddleware(10),
        Pedido.pegaUserPedidos);

router.route('/paga/:id')
    .post(
        verificaCargos(
            LISTACARGO.Cliente
        ),
    Pedido.pagarPedido);

module.exports = router;