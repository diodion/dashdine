const express = require('express');
const router = express.Router();
const Pedido = require('../controllers/pedidoController');
const paginacaoMiddleware = require('../middleware/paginacao');
const LISTACARGO = require('../config/cargosList');
const verificaCargos = require('../middleware/verificaCargo');

router.route('/')
    .post(
        verificaCargos(
            LISTACARGO.Cliente
        ),
        Pedido.criarPedido);

router.route('/conf/pega/')
    .post(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Atendente,
            LISTACARGO.Gerente,
            LISTACARGO.Cordenador
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

router.post('/paga/:id', Pedido.pagarPedido);

router.patch('/conf/:id', Pedido.confirmarPedido);

router.patch('/cancel/:id', Pedido.cancelarPedido);

router.patch('/liberar/:id', Pedido.liberarPedido);

router.patch('/enviado/:id', Pedido.informarEmTransito);

router.patch('/entregue/:id', Pedido.informarEntregue);

module.exports = router;