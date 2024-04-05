const Funcionario = require('../models/Funcionario');
const bcrypt = require('bcryptjs');

const handleNovoFuncionario = async (req, res) => {
    const { senha, nome, sobrenome, cpf, email, telefone, cargos, supervisor } = req.body;

    if (!senha || !nome || !sobrenome || !cpf || !email || !telefone) return res.status(400).json({ 'message': 'Preencha todos os campos' });
    // Verifica por registros duplicados no campo Funcionario, cpf e email.
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
        res.status(201).json({'Sucesso': `Funcionário ${nome} cadastrado`});
    } catch (err) {
        res.status(500).json({ 'Mensagem': err.message });
    }
}
// Api para o Gerente/Cordenador atualizar os dados do funcionário
const atualizaFuncGerente = async (req, res) => {
    const id = req.params.id; 
    const { nome, sobrenome, cpf, email, cargos, empresa, supervisor, telefone, ativo } = req.body;
    try {
        const atualizaFunc = await Cardapio.findByIdAndUpdate(id, {             
        "nome": nome,
        "sobrenome": sobrenome,
        "cpf": cpf,
        "email": email,
        "cargos": cargos,
        "empresa": empresa,
        "supervisor": supervisor,
        "telefone": telefone,
        "ativo": ativo
    }, { new: true, runValidators: true});
        res.send(atualizaFunc);
        console.log(atualizaFunc)
    } catch (err) {
        res.status(500).json({ 'Mensagem': err.message });
    }
}
// Api para o funcionário atualizar os proprios dados
const atualizaFuncDados = async (req, res) => {
    const id = req.params.id;
    const { nome, sobrenome, cpf, email, telefone, senha } = req.body;
    try {
        const criptSenha = await bcrypt.hash(senha, +process.env.BCRYPT_SALT);
        const atualizaFunc = await Cardapio.findByIdAndUpdate(id, {             
        "nome": nome,
        "sobrenome": sobrenome,
        "cpf": cpf,
        "email": email,
        "empresa": empresa,
        "telefone": telefone,
        "senha": criptSenha
    }, { new: true, runValidators: true});
        res.send(atualizaFunc);
        console.log(atualizaFunc)
    } catch (err) {
        res.status(500).json({ 'Mensagem': err.message });
    }
}
// Deletar funcionário
const deletaFunc = async (req, res) => {
    const id = req.params.id;

    try {
        const resultado = await Funcionario.findByIdAndDelete(id)
        res.status(201).json({ 'Sucesso': `Funcionario deletado do cardápio` });
    } catch (err) {
        res.status(500).json({ 'Mensagem': err.message });
    }
}

module.exports = { handleNovoFuncionario, atualizaFuncGerente, atualizaFuncDados, deletaFunc };