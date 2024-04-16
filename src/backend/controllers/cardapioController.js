const Cardapio = require('../models/Cardapio');
const Categoria = require('../models/Categoria');

// Proprietario visualizar todos os itens, ativos ou não
const verCardapioFunc = async (req, res) => {
    const cardapio = await Cardapio.find({}, "-createdAt -updatedAt -__v -_id")
    .populate({ 
        path: "categoria", 
        select: "-descricao -createdAt -updatedAt -__v -_id -ativo" 
    });
    if (!cardapio) return res.status(204).json({ "Mensagem": "Sem itens cadastrados no menu" });
    res.json(cardapio);
}
// Deletar item por id
const deletaCardapio = async (req, res) => {
    const id = req.params.id;
    try {
        Cardapio.findByIdAndDelete(id)
        res.status(204).json({ "Sucesso": "Item deletado do cardápio" });
    } catch (err) {
        res.status(500).json({ "Erro": err.message });
    }
}
// Deleta vários itens do cardápio
const deletaMultiCardapio = async (req, res) => {
    const { ids } = req.body;
    if (!ids) return res.status(204).json({ "Atenção": "Precisa deletar algo?" });

    try {
        const deletados = [];
        for (const id of ids) {
            const itemDeletado = await Cardapio.findByIdAndDelete(id);
            if (itemDeletado) {
                deletados.push(itemDeletado.nome); // Adiciona o nome do item deletado à lista
            }
        }
        
        if (deletados.length > 0) {
            res.status(204).json({ "Sucesso": "Itens deletados do cardápio"});
        } else {
            res.status(404).json({ "Mensagem": "Nenhum item encontrado para deletar" });
        }
    } catch (err) {
        res.status(500).json({ "Erro": err.message });
    }
}
// Cadastra um ou vários itens
const cadastraCardapio = async (req, res) => {
    const items = req.body;
    if (!Array.isArray(items) || items.length === 0) return res.status(400).json({ "Atenção": "Envie algo para cadastrar" });
    
    try {
        const categoriaIds = items.map(item => item.categoria);
        const categoriasExistentes = await Categoria.find({ _id: { $in: categoriaIds } });
        const categoriasIdsExistentes = categoriasExistentes.map(categoria => categoria._id.toString());

        items.forEach(async (item, index) => {
            if (!item.nome || !item.descricao || !item.valor || !item.categoria || !categoriasIdsExistentes.includes(item.categoria)) {
                return res.status(400).json({ "Atenção": `Item ${index + 1}: Preencha todos os campos corretamente e forneça uma categoria válida` });
            }

            await Cardapio.create(item);
        });
        res.status(201).json({ "Sucesso": "Itens cadastrados com sucesso no cardápio" });
    } catch (err) {
        res.status(500).json({ "Erro": err.message });
    }
}
// Atualizar item pelo id
const atualizaCardapio = async (req, res) => {
    const id = req.params.id;
    const { nome, descricao, valor, categoria, ativo } = req.body;
    try {
        const categoriaExiste = await Categoria.findById(categoria);
        if (!categoriaExiste) return res.status(404).json({ "Atenção": "Categoria não encontrada" });

        await Cardapio.findByIdAndUpdate(id, { nome, descricao, valor, categoria, ativo }, { new: true, runValidators: true});
        res.status(200).json({ "Sucesso": `Item ${nome} atualizado` });
    } catch (err) {
        res.status(500).json({ "Erro": err.message });
    }
}
// Cliente visualizar itens ativos  
const verCardapioUser = async (req, res) => {
    const cardapioCliente = await Cardapio.find(
        { ativo: true }, 
        "-createdAt -updatedAt -__v -_id"
    ).populate({ 
        path: "categoria", 
        select: "-descricao -createdAt -updatedAt -__v -_id -ativo" 
    });
    if (!cardapioCliente) return res.status(204).json({ "Mensagem": "Sem itens cadastrados no menu" });
    res.json(cardapioCliente);
}

module.exports = { 
    verCardapioFunc, 
    verCardapioUser,
    cadastraCardapio,
    deletaCardapio,
    atualizaCardapio,
    deletaMultiCardapio
 }