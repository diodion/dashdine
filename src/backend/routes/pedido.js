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

router.route('/consulta')
    .get(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Atendente,
            LISTACARGO.Gerente,
            LISTACARGO.Coordenador
        ),
        paginacaoMiddleware(10),
        Pedido.pegaPedido)

router.route('/status')
    .patch(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Atendente,
            LISTACARGO.Gerente,
            LISTACARGO.Coordenador
        ),
        Pedido.attStatusPedido)

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

router.patch('/cancel/:id',
    verificaCargos(
        LISTACARGO.Cliente,
        LISTACARGO.Admin,
        LISTACARGO.Superuser,
        LISTACARGO.Atendente,
        LISTACARGO.Gerente,
        LISTACARGO.Coordenador),
    Pedido.cancelarPedido);

router.patch('/entregue/:id',
    verificaCargos(
        LISTACARGO.Cliente,
        LISTACARGO.Admin,
        LISTACARGO.Superuser,
        LISTACARGO.Atendente,
        LISTACARGO.Gerente,
        LISTACARGO.Coordenador),
    Pedido.informarEntregue);

router.patch('/conf/:id',
    verificaCargos(
        LISTACARGO.Admin,
        LISTACARGO.Superuser,
        LISTACARGO.Atendente,
        LISTACARGO.Gerente,
        LISTACARGO.Coordenador),
    Pedido.confirmarPedido);

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

router.get('/conf/pega',
    verificaCargos(
        LISTACARGO.Admin,
        LISTACARGO.Superuser,
        LISTACARGO.Atendente,
        LISTACARGO.Gerente,
        LISTACARGO.Coordenador),
        paginacaoMiddleware(10),
    Pedido.pegaPedidosConf);

module.exports = router;