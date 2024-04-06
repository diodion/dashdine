
const Pedido = require('../models/Pedido');

// Pega histórico de pedidos de um usuário por id
const pegaUserPedidos = async (req, res) => {

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
}
// Pega pedidos com status em confirmação
const pegaPedidosConf = async (req, res) => {

    try {
        const pegaPedidos = await Pedido.find({ status: "Aguardando confirmação" }).populate('itensPedido');
        if (!pegaPedidos) return res.status(204).json({'Mensagem': 'Sem pedidos aguardando confirmação'});
        const { startIndex, endIndex } = req.paginacao;
        const pedidos = pegaPedidos.slice(startIndex, endIndex);

        return res.status(200).json({ pedidos, Total: pegaPedidos.length });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erro interno.' });
    }
}

module.exports = {
    pegaUserPedidos,
    pegaPedidosConf
    // criaPedido
}


// const carrinhoService = require('./carrinhoService');
// const pagamentoService = require('./pagamentoService');

// Rota para finalizar a compra de itens no carrinho
// const criaPedido = async (req, res) => {
//     try {
//         // Verifica se há itens no carrinho
//         const carrinho = req.body.carrinho;
//         if (!carrinho || carrinho.length === 0) return res.status(400).json({ message: 'O carrinho está vazio.' });
        
//         // Calcula o valor total da compra usando o serviço de carrinho
//         const total = carrinhoService.calcularTotal(carrinho);

//         // Simula o pagamento usando o serviço de pagamento
//         const pagamentoEfetuado = pagamentoService.simularPagamento();

//         if (pagamentoEfetuado) {
//             // Limpa o carrinho (neste exemplo, limpamos apenas os itens)
//             const carrinhoLimpo = [];
//             return res.status(200).json({ message: 'Compra efetuada com sucesso.', total, carrinhoLimpo });
//         } else {
//             return res.status(500).json({ message: 'Falha ao processar o pagamento.' });
//         }
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ message: 'Erro interno do servidor.' });
//     }
// };
// Pega histórico de pedidos de um usuário por id