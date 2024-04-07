const express = require('express');
const router = express.Router();
const funcionario = require('../controllers/funcionarioController');
const LISTACARGO = require('../config/cargosList');
const verificaCargos = require('../middleware/verificaCargo');

router.route('/gerenciar')
    .post(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Gerente,
        ),
        funcionario.cadastraFunc)
        
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

module.exports = router;