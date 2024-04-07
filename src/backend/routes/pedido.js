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

router.route('/conf/pega/')
    .get(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Atendente,
            LISTACARGO.Gerente,
            LISTACARGO.Coordenador
        ),
        paginacaoMiddleware(10),
        Pedido.pegaPedidosConf)

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

router.patch('/conf/:id',
    verificaCargos(
        LISTACARGO.Admin,
        LISTACARGO.Superuser,
        LISTACARGO.Atendente,
        LISTACARGO.Gerente,
        LISTACARGO.Coordenador),
    Pedido.confirmarPedido);

router.patch('/cancel/:id',
    verificaCargos(
        LISTACARGO.Cliente,
        LISTACARGO.Admin,
        LISTACARGO.Superuser,
        LISTACARGO.Atendente,
        LISTACARGO.Gerente,
        LISTACARGO.Coordenador),
    Pedido.cancelarPedido);

router.patch('/liberar/:id',
    verificaCargos(
        LISTACARGO.Admin,
        LISTACARGO.Superuser,
        LISTACARGO.Atendente,
        LISTACARGO.Gerente,
        LISTACARGO.Coordenador),
    Pedido.liberarPedido);

router.patch('/enviado/:id',
    verificaCargos(
        LISTACARGO.Admin,
        LISTACARGO.Superuser,
        LISTACARGO.Atendente,
        LISTACARGO.Gerente,
        LISTACARGO.Coordenador),
    Pedido.informarEmTransito);

router.patch('/entregue/:id',
    verificaCargos(
        LISTACARGO.Admin,
        LISTACARGO.Superuser,
        LISTACARGO.Atendente,
        LISTACARGO.Gerente,
        LISTACARGO.Coordenador),
    Pedido.informarEntregue);

module.exports = router;