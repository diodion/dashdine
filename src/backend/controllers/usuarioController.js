const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

const cadastraUser = async (req, res) => {
    const { senha, nome, sobrenome, cpf, email, telefone } = req.body;

    if (!senha || !nome || !sobrenome || !cpf || !email || !telefone) return res.status(400).json({ 'message': 'Preencha todos os campos' });
    // Verifica por registros duplicados no collection Usuario para cpf e email.
    const duplicado = await Usuario.findOne({
        $or: [{
            'cpf': cpf
        }, {
            'email': email
        }]
    }).exec();
    if (duplicado) return res.sendStatus(409);

    try {
        const criptSenha = await bcrypt.hash(senha, +process.env.BCRYPT_SALT);
        const resultado = await Usuario.create({
            "nome": nome,
            "sobrenome": sobrenome,
            "cpf": cpf,
            "email": email,
            "telefone": telefone,
            "senha": criptSenha
        });
        console.log(resultado);
        res.status(201).json({ 'Sucesso': `Usuário ${email} registrado` });
    } catch (err) {
        res.status(500).json({ 'Mensagem': err.message });
    }
}
// Atualizar dados
const atualizaUserDados = async (req, res) => {
    const id = req.params.id;
    const { senha, nome, sobrenome, cpf, email, telefone } = req.body;
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
        }, { new: true, runValidators: true });
        res.send(atualizaFunc);
        console.log(atualizaFunc)
    } catch (err) {
        res.status(500).json({ 'Mensagem': err.message });
    }
}
const cadastraEndereco = async (req, res) => {
    const id = req.params.id;
    const tipoEndereco = req.body.tipoEndereco; // A chave correta é "tipoEndereco" para determinar o tipo do endereço

    // Prepara os dados do novo endereço
    const novoEndereco = {
        nome: tipoEndereco, // Define o tipo do endereço
        nome: req.body.nome,
        logradouro: req.body.logradouro,
        bairro: req.body.bairro,
        numero: req.body.numero,
        referencia: req.body.referencia,
        cidade: req.body.cidade,
        uf: req.body.uf,
        cep: req.body.cep
    };

    try {
        // Atualiza o usuário adicionando o novo endereço ao array de endereços
        const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, { $push: { endereco: novoEndereco } }, { new: true, runValidators: true });
        res.send(usuarioAtualizado);
        console.log(usuarioAtualizado);
    } catch (err) {
        res.status(500).json({ 'Mensagem': err.message });
    }
}
const deletaEndereco = async (req, res) => {
    const userId = req.params.id;
    const enderecoId = req.params.eid;

    try {
        const usuario = await Usuario.findById(userId);
        if (!usuario) return res.status(204).json({ mensagem: 'Usuário não encontrado.' });
        const enderecoIndex = usuario.endereco.findIndex(endereco => endereco._id.toString() === enderecoId);
        if (enderecoIndex === -1) return res.status(204).json({ mensagem: 'Endereço não encontrado.' });
        usuario.endereco.splice(enderecoIndex, 1);
        await usuario.save();

        res.status(201).json({ mensagem: 'Endereço excluído com sucesso.' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao excluir o endereço.', error: error.message });
    }
};

module.exports = { cadastraUser, atualizaUserDados, cadastraEndereco, deletaEndereco };