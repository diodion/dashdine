const Cardapio = require('../../models/Cardapio');

const handleCardapio = async (req, res) => {
    const { nome, descricao, valor } = req.body;

    if (!nome || !descricao || !valor ) return res.status(400).json({ 'message': 'Preencha todos os campos' });

    try {
        const resultado = await Cardapio.create({
            nome,
            descricao,
            valor
        });
        res.status(201).json({'Sucesso': `Item ${nome} registrado com sucesso no cardápio`});
        console.log(resultado)
    } catch (err) {
        res.status(500).json({ 'Mensagem': err.message });
    }
}

module.exports = { handleCardapio };