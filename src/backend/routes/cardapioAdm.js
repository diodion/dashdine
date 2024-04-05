const express = require('express');
const router = express.Router();
const cardapioAdm = require('../controllers/cardapioController');
const LISTACARGO = require('../config/cargosList');
const verificaCargos = require('../middleware/verificaCargo');

router.route('/')
    .post(
        cardapioAdm.cadastraCardapio)
    .get(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Atendente,
            LISTACARGO.Gerente,
            LISTACARGO.Cordenador
        ),
        cardapioAdm.verCardapio)

router.route('/:id')
    .patch(
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