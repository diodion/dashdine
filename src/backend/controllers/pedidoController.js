const express = require('express');
const router = express.Router();
const carrinhoService = require('./carrinhoService');
const pagamentoService = require('./pagamentoService');

// Rota para finalizar a compra de itens no carrinho
router.post('/comprar', async (req, res) => {
    try {
        // Verifica se há itens no carrinho
        const carrinho = req.body.carrinho;
        if (!carrinho || carrinho.length === 0) return res.status(400).json({ message: 'O carrinho está vazio.' });
        
        // Calcula o valor total da compra usando o serviço de carrinho
        const total = carrinhoService.calcularTotal(carrinho);

        // Simula o pagamento usando o serviço de pagamento
        const pagamentoEfetuado = pagamentoService.simularPagamento();

        if (pagamentoEfetuado) {
            // Limpa o carrinho (neste exemplo, limpamos apenas os itens)
            const carrinhoLimpo = [];
            return res.status(200).json({ message: 'Compra efetuada com sucesso.', total, carrinhoLimpo });
        } else {
            return res.status(500).json({ message: 'Falha ao processar o pagamento.' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});

module.exports = router;
