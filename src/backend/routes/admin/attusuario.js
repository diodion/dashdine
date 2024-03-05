const express = require('express');
const router = express.Router();
const usuarioController = require('../../controllers/usuarioController');
const LISTACARGO = require('../../config/cargosList');
const verificaCargos = require('../../middleware/verificaCargo');
const paginacaoMiddleware = require('../../middleware/paginacao');

router.route('/')
    .get(verificaCargos(LISTACARGO.Admin, LISTACARGO.Superuser), paginacaoMiddleware(1), usuarioController.getAllUsuarios)
    // .put(verificaCargos(LISTACARGO.Admin, LISTACARGO.Superuser), usuarioController.putUsuarios)

module.exports = router;