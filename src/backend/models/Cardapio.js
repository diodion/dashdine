const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardapioSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    valor: {
        type: String,
        required: true
    },
    ativo: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Cardapio', cardapioSchema);