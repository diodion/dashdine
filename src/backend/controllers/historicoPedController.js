const Pedido = require('../models/Pedido');

const pegaPedido = async (req, res) => {

    try {
        const id = req.params.id;
        const pegaPedidos = await Pedido.find({ usuario: id }).populate('itensPedido');
        if (!pegaPedidos) return res.status(204).json({'Mensagem': 'Sem pedidos registrados'});
        const { startIndex, endIndex } = req.paginacao;
        const pedidos = pegaPedidos.slice(startIndex, endIndex);


        return res.status(200).json({ pedidos, Total: pegaPedidos.length });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erro interno.' });
    }
};

module.exports = { pegaPedido }