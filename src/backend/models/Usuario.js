const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    cargos: {
        Cliente: {
            type: Number,
            default: 1005
        },
        Vendedor: Number,
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
        required: true
    },
    endereco:[{
        nome: String,
        logradouro: String,
        bairro: String,
        numero: String,
        referencia: String,
        cidade: String,
        uf: String,
        cep: String
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Usuario', usuarioSchema);