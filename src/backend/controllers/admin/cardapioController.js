const Cardapio = require('../../models/Cardapio');
// Propietario visualizar todos os itens, ativos ou não
const verCardapio = async (req, res) => {
    const cardapio = await Cardapio.find();
    if (!cardapio) return res.status(204).json({ 'Mensagem': 'Sem itens cadastrados no menu' });
    res.json({ cardapio });
}
// Deletar item por id
const deletaCardapio = async (req, res) => {
    const id = req.params.id;

    try {
        const resultado = await Cardapio.findByIdAndDelete(id)
        res.status(201).json({ 'Sucesso': `Item deletado do cardápio` });
    } catch (err) {
        res.status(500).json({ 'Mensagem': err.message });
    }
}
// Proprietario cadastrar itens no cardapio 
const cadastraCardapio = async (req, res) => {
    const { nome, descricao, valor, ativo } = req.body;

    if (!nome || !descricao || !valor) return res.status(400).json({ 'message': 'Preencha todos os campos' });

    try {
        const resultado = await Cardapio.create({
            nome,
            descricao,
            valor,
            ativo
        });
        res.status(201).json({ 'Sucesso': `Item ${nome} registrado com sucesso no cardápio` });
        console.log(resultado)
    } catch (err) {
        res.status(500).json({ 'Mensagem': err.message });
    }
}
// Para o cliente visualizar itens ativos
const vercardapioCliente = async (req, res) => {
    const cardapioCliente = await Cardapio.find({ativo:true});
    if (!cardapioCliente) return res.status(204).json({ 'Mensagem': 'Sem itens cadastrados no menu' });
    res.json({ cardapioCliente });
}

module.exports = { verCardapio, vercardapioCliente, cadastraCardapio, deletaCardapio }