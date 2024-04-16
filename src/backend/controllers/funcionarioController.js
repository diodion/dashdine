const Funcionario = require('../models/Funcionario');
const bcrypt = require('bcryptjs');

// Gerente cadastrar funcionário
const cadastraFunc = async (req, res) => {
    const { senha, nome, sobrenome, cpf, email, telefone, cargos, supervisor, empresa } = req.body;
    if (!senha || !nome || !sobrenome || !cpf || !email || !telefone) return res.status(400).json({ "Mensagem": "Preencha todos os dados!" });
    const duplicado = await Funcionario.findOne({
        $or: [{
            'cpf': cpf
        }, {
            'email': email
        }]
    }).exec();
    if (duplicado) return res.sendStatus(409);
    try {
        const criptSenha = await bcrypt.hash(senha, +process.env.BCRYPT_SALT);
        const resultado = await Funcionario.create({
            "nome": nome,
            "sobrenome": sobrenome,
            "cpf": cpf,
            "email": email,
            "cargos": cargos,
            "empresa": empresa,
            "supervisor": supervisor,
            "telefone": telefone,
            "senha": criptSenha
        });
        console.log(resultado);
        res.status(201).json({ "Sucesso": `Funcionário ${nome} cadastrado` });
    } catch (err) {
        res.status(500).json({ "Erro": err.message });
    }
}
// Api para o Gerente/Coordenador atualizar os dados do funcionário
const attFuncGerente = async (req, res) => {
    const id = req.params.id;
    const { nome, sobrenome, cpf, email, cargos, empresa, supervisor, telefone, ativo } = req.body;
    try {
        const atualizaFunc = await Funcionario.findByIdAndUpdate(id, {
            nome,
            sobrenome,
            cpf,
            email,
            cargos,
            empresa,
            supervisor,
            telefone,
            ativo
        }, { new: true, runValidators: true });
        res.send(atualizaFunc);
    } catch (err) {
        res.status(500).json({ "Erro": err.message });
    }
}
// Api para o funcionário atualizar os proprios dados
const attFuncAtd = async (req, res) => {
    const id = req.params.id;
    const { nome, sobrenome, cpf, email, telefone, senha, empresa } = req.body;
    try {
        const criptSenha = await bcrypt.hash(senha, +process.env.BCRYPT_SALT);
        const atualizaFunc = await Funcionario.findByIdAndUpdate(id, {
            nome,
            sobrenome,
            cpf,
            email,
            empresa,
            telefone,
            "senha": criptSenha
        }, { new: true, runValidators: true });
        res.send(atualizaFunc);
    } catch (err) {
        res.status(500).json({ "Erro": err.message });
    }
}
// Deletar funcionário
const deletaFunc = async (req, res) => {
    const id = req.params.id;
    try {
        await Funcionario.findByIdAndDelete(id)
        res.status(201).json({ "Sucesso": "Funcionario deletado" });
    } catch (err) {
        res.status(500).json({ "Erro": err.message });
    }
}

module.exports = { cadastraFunc, attFuncGerente, attFuncAtd, deletaFunc };