const Usuario = require('../models/Usuario');

const getAllUsuarios = async (req, res) => {
    const pegaUsuarios = await Usuario.find();
    if (!pegaUsuarios) return res.status(204).json({'Mensagem': 'Sem usuários cadastrados'});
    // Começo middleware de paginação, Necessário colocar a função paginacaoMiddleware la nas rotas
    const { startIndex, endIndex } = req.paginacao;
    // Cria a variavel usuarios que é o resultado de cada pagina
    const usuarios = pegaUsuarios.slice(startIndex, endIndex);
    // Total retorna o numero total de resultados do query
    res.json({ usuarios, Total: pegaUsuarios.length });
}

// const putUsuarios = async (req, res) => {
//     if (!req?.body.termo) {
//         return res.status(400).json({'Mensagem': 'Insira algo para buscar'});
//     }
//     const busca = await Usuario.findOne({
//         $or: [{
//             'login': termo
//         }, {
//             'cpf': termo
//         }, {
//             'email': termo
//         }, {
//             'nome': termo
//         }, {
//             'cargo': termo
//         }]
//     }).exec();
//     if (!busca) {
//         return res.status(204).json({"Mensagem": `Sem resultados para ${req.body.termo}.`});
//     }
//     if (req.body?.cargos) termo.cargos = req.body.cargos;
//     if (req.body?.cpf) employee.cpf = req.body.cpf;
//     const resultado = await termo.save();
//     res.json(resultado);
// }

module.exports = {
    getAllUsuarios
    // putUsuarios
}