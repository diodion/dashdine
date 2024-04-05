const mongoose = require('mongoose');

const pedirItemSchema = mongoose.Schema({
    quantidade: {
        type: Number,
        required: true
    },
    Item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cardapio'
    }
})

module.exports = mongoose.model('pedirItem', pedirItemSchema);