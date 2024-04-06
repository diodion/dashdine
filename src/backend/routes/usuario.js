const express = require('express');
const router = express.Router();
const usuario = require('../controllers/usuarioController');
const LISTACARGO = require('../config/cargosList');
const verificaCargos = require('../middleware/verificaCargo');

router.route('/dados/:id')
    .patch(
        verificaCargos(
            LISTACARGO.Cliente
        ),
        usuario.atualizaUserDados);

router.route('/dados/end/:id')
    .patch(
        verificaCargos(
            LISTACARGO.Cliente
        ),
        usuario.cadastraEndereco);

router.route('/dados/end/:id/:eid')
    .delete(
        verificaCargos(
            LISTACARGO.Cliente
        ),
        usuario.deletaEndereco)
    .patch(
        verificaCargos(
            LISTACARGO.Cliente
        ),
        usuario.atualizaEndereco);

module.exports = router;