const Usuario = require('../models/Usuario');

const userBusca = async (req, res) => {
    try {
        const pegaUsuarios = await Usuario.find({}, "-senha -__v -refreshToken -_id");
        if (!pegaUsuarios) return res.status(204).json({ "Mensagem": "Sem usuários cadastrados" });
        // Começo middleware de paginação, Necessário colocar a função paginacaoMiddleware la nas rotas
        const { startIndex, endIndex } = req.paginacao;
        // Cria a variavel usuarios que é o resultado de cada pagina
        const usuarios = pegaUsuarios.slice(startIndex, endIndex);
        // Total retorna o numero total de resultados do query
        return res.status(200).json({ usuarios, Total: pegaUsuarios.length });
    } catch (err) {
        res.status(500).json({ "Erro": err.message });
    }
}

module.exports = {
    userBusca
}