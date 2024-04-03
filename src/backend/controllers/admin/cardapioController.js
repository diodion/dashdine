const Cardapio = require('../../models/Cardapio');
// Propietario visualizar todos os itens, ativos ou não
const getMenu = async (req, res) => {
    const cardapio = await Cardapio.find();
    if (!cardapio) return res.status(204).json({ 'Mensagem': 'Sem itens cadastrados no menu' });
    res.json({ cardapio });
}
// Proprietario cadastrar itens no cardapio 
const handleCardapio = async (req, res) => {
    const { nome, descricao, valor, ativo } = req.body;

    if (!nome || !descricao || !valor ||!ativo ) return res.status(400).json({ 'message': 'Preencha todos os campos' });

    try {
        const resultado = await Cardapio.create({
            nome,
            descricao,
            valor,
            ativo
        });
        res.status(201).json({'Sucesso': `Item ${nome} registrado com sucesso no cardápio`});
        console.log(resultado)
    } catch (err) {
        res.status(500).json({ 'Mensagem': err.message });
    }
}
// Para o cliente visualizar itens ativos
const getMenuCliente = async (req, res) => {
    const cardapioCliente = await Cardapio.find({ ativo: true });
    if (!cardapioCliente) return res.status(204).json({ 'Mensagem': 'Sem itens cadastrados no menu' });
    res.json({ cardapioCliente });
}

module.exports = { getMenu, getMenuCliente, handleCardapio }