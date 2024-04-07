const express = require('express');
const router = express.Router();
const Categoria = require('../controllers/categoriaController');
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
        Categoria.cadastraCategoria)
    .get(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Atendente,
            LISTACARGO.Gerente,
            LISTACARGO.Coordenador
        ),
        Categoria.verCategoria)
    .delete(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Atendente,
            LISTACARGO.Gerente,
            LISTACARGO.Coordenador
        ),
        Categoria.deletaCategoria)

router.route('/:id')
    .patch(
        verificaCargos(
            LISTACARGO.Admin,
            LISTACARGO.Superuser,
            LISTACARGO.Gerente,
            LISTACARGO.Coordenador
        ),
        Categoria.atualizaCategoria)

module.exports = router;