const mongoose = require('mongoose');

const pedidoSchema = mongoose.Schema({
    itensPedido: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cardapio',
        required: true,
    }],
    endereco: {
        logradouro: {
            type: String,
        },
        bairro: {
            type: String,
        },
        numero: {
            type: String,
        },
        referencia: {
            type: String,
        },
        cidade: {
            type: String,
        },
        uf: {
            type: String,
        },
        cep: {
            type: String,
        }
    },
    telefone: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'Aguardando confirmação'
    },
    precoTotal: {
        type: Number,
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: True
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Pedido', pedidoSchema);