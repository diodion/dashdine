const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const funcionarioSchema = new Schema({
    cargos: {
        Atendente: {
            type: Number,
            default: 2001
        },
        Cordenador: Number,
        Gerente: Number,
        Admin: Number,
        Superuser: Number
    },
    senha: {
        type: String,
        required: true
    },
    refreshToken: String,
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    supervisor: {
        type: String
    },
    ativo: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Funcionario', funcionarioSchema);