const Cardapio = require('../../models/Cardapio');

const getMenu = async (req, res) => {
    const cardapio = await Cardapio.find();
    if (!cardapio) return res.status(204).json({'Mensagem': 'Sem usuários cadastrados'});
    res.json({ cardapio });
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
    getMenu
}