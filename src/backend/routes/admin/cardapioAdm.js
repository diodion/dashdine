const express = require('express');
const router = express.Router();
const cardapioAdm = require('../../controllers/admin/cardapioController');
const LISTACARGO = require('../../config/cargosList');
const verificaCargos = require('../../middleware/verificaCargo');

router.route('/')
    .post(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Gerente,
            LISTACARGO.Cordenador
        ),
        cardapioAdm.handleCardapio)
    .get(        
        verificaCargos(
        LISTACARGO.Admin,
        LISTACARGO.Superuser,
        LISTACARGO.Atendente,
        LISTACARGO.Gerente,
        LISTACARGO.Cordenador
    ),
    cardapioAdm.getMenu)

module.exports = router;