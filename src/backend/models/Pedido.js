const mongoose = require('mongoose');

const itemPedidoSchema = mongoose.Schema({
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cardapio',
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    }
});

const pedidoSchema = mongoose.Schema({
    codigo: {
        type: String,
        unique: true
    },
    itensPedido: [itemPedidoSchema],
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
    statusPagamento: {
        type: String,
        required: true,
        enum: ['Aguardando pagamento', 'Confirmado', 'Erro de pagamento'],
        default: 'Aguardando pagamento'
    },
    statusConfirmacao: {
        type: String,
        required: true,
        enum: ['Aguardando confirmação', 'Confirmado', 'Em transito', 'Liberado', 'Entregue', 'Cancelado'],
        default: 'Aguardando confirmação'
    },
    precoTotal: {
        type: Number,
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
}, {
    timestamps: true
})

pedidoSchema.pre('save', async function (next) {
    try {
        if (!this.codigo) {
            const ultimoPedido = await this.constructor.findOne({}, {}, { sort: { 'createdAt': -1 } });
            let novoCodigo;
            if (ultimoPedido) {
                const ultimoCodigo = parseInt(ultimoPedido.codigo.substring(1));
                novoCodigo = `#${ultimoCodigo + 1}`;
            } else {
                novoCodigo = '#1';
            }
            this.codigo = novoCodigo;
        }
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('Pedido', pedidoSchema);