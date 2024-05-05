const express = require('express');
const router = express.Router();
const funcionario = require('../controllers/funcionarioController');
const LISTACARGO = require('../config/cargosList');
const verificaCargos = require('../middleware/verificaCargo');
const paginacaoMiddleware = require('../middleware/paginacao');

router.route('/gerenciar')
    .post(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Gerente,
        ),
        funcionario.cadastraFunc)
    .get(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Gerente,
        ),
        funcionario.funcBusca)

router.route('/gerenciar/:id')
    .patch(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Gerente,
        ),
        funcionario.attFuncGerente)
    .delete(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Gerente,
        ),
        funcionario.deletaFunc)


router.route('/attdados/:id')
    .patch(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Atendente,
            LISTACARGO.Gerente,
            LISTACARGO.Coordenador
        ),
        funcionario.attFuncAtd)

router.route('/consulta')
    .get(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Gerente,
        ),
        paginacaoMiddleware(10),
        funcionario.funcBuscaPag)
module.exports = router;