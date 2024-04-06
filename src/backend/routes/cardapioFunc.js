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
            LISTACARGO.Cordenador
        ),
        cardapioAdm.cadastraCardapio)
    .get(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Atendente,
            LISTACARGO.Gerente,
            LISTACARGO.Cordenador
        ),
        cardapioAdm.verCardapioFunc)

router.route('/:id')
    .patch(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Gerente,
            LISTACARGO.Cordenador
        ),
        cardapioAdm.atualizaCardapio)
    .delete(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Gerente,
            LISTACARGO.Cordenador
        ),
        cardapioAdm.atualizaCardapio)

module.exports = router;