const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    cargos: {
        Usuario: {
            type: Number,
            default: 1001
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
    endereco: {
        primeiro: {
            nome: {
                type: String,
            },
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

        }
    }
}, {
    timestamps: true
});

// usuarioSchema.pre("save", async function (next) {
//     if (!this.isModified("senha")) {
//         return next();
//     }
//     const hash = await bcrypt.hash(this.senha, Number(+process.env.BCRYPT_SALT));
//     this.senha = hash;
//     next();
// });

module.exports = mongoose.model('Usuario', usuarioSchema);