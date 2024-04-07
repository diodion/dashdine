const Categoria = require('../models/Categoria');

// Cadastrar categoria
const cadastraCategoria = async (req, res) => {
    const { nome, descricao, ativo } = req.body;
    if (!nome || !descricao || !ativo) return res.status(400).json({ "Atenção": "Preencha todos os campos" });
    try {
        await Categoria.create({
            nome,
            descricao,
            ativo
        });
        res.status(201).json({ "Sucesso": `Categoria ${nome} registrada com sucesso` });
    } catch (err) {
        res.status(500).json({ "Erro": err.message });
    }
}
// Visualizar todas as categorias
const verCategoria = async (req, res) => {
    const categoria = await Categoria.find({}, "-__v");
    if (!categoria) return res.status(204).json({ "Atenção": "Categoria inexistente" });
    res.json(categoria);
}
// Deletar item por id
const deletaCategoria = async (req, res) => {
    const id = req.params.id;
    try {
        await Categoria.findByIdAndDelete(id)
        res.status(204).json({ "Sucesso": "Categoria deletada" });
    } catch (err) {
        res.status(500).json({ "Erro": err.message });
    }
}
// Atualizar categoria pelo id
const atualizaCategoria = async (req, res) => {
    const id = req.params.id;
    const { nome, descricao, ativo } = req?.body;
    try {
        await Categoria.findByIdAndUpdate(id, { nome, descricao, ativo }, { new: true, runValidators: true });
        res.status(200).json({ "Sucesso": `Categoria ${nome} atualizada` });
    } catch (err) {
        res.status(500).json({ "Erro": err.message });
    }
}
module.exports = {
    cadastraCategoria,
    verCategoria,
    deletaCategoria,
    atualizaCategoria
}