const express = require('express');
const router = express.Router();
const cardapioAdm = require('../controllers/cardapioController');
const LISTACARGO = require('../config/cargosList');
const verificaCargos = require('../middleware/verificaCargo');

router.route('/')
    .post(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Gerente,
            LISTACARGO.Coordenador
        ),
        cardapioAdm.cadastraCardapio)
    .get(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Atendente,
            LISTACARGO.Gerente,
            LISTACARGO.Coordenador
        ),
        cardapioAdm.verCardapioFunc)
    .delete(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Atendente,
            LISTACARGO.Gerente,
            LISTACARGO.Coordenador
        ),
        cardapioAdm.deletaMultiCardapio)

router.route('/:id')
    .patch(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Gerente,
            LISTACARGO.Coordenador
        ),
        cardapioAdm.atualizaCardapio)
    .delete(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Gerente,
            LISTACARGO.Coordenador
        ),
        cardapioAdm.deletaCardapio)

router.route('/multi')
    .post(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Gerente,
            LISTACARGO.Coordenador
        ),
        cardapioAdm.cadastraCardapioMultiplo)


module.exports = router;