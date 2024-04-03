const express = require('express');
const router = express.Router();
const cmenuController = require('../../controllers/test/cmenuController');
// const LISTACARGO = require('../../config/cargosList');
// const verificaCargos = require('../../middleware/verificaCargo');

router.post('/', cmenuController.handleCardapio);

// router.route('/')
//     .post(verificaCargos( cmenuController.handleCardapio);
    // .get(verificaCargos(LISTACARGO.Admin, LISTACARGO.Superuser), paginacaoMiddleware(1), usuarioController.getAllUsuarios)
    // .put(verificaCargos(LISTACARGO.Admin, LISTACARGO.Superuser), usuarioController.putUsuarios)

module.exports = router;