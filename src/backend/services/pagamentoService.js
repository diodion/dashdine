const processarPagamento = async (pedido) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Chance de 80% de sucesso ao pagar
            const sucesso = Math.random() < 0.8;
            if (sucesso) {
                resolve({ success: true, message: 'Pagamento bem-sucedido' });
            } else {
                reject({ success: false, message: 'Falha no processamento do pagamento' });
            }
        }, 2000); // Atraso de 2s
    });
};
module.exports = {
    processarPagamento
};
