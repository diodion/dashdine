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
// cadastro de endereço
const cadastraEndereco = async (req, res) => {
    const id = req.params.id;

    const novoEndereco = {
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
        const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, { $push: { endereco: novoEndereco } }, { new: true, runValidators: true });

        const enderecoAdicionado = usuarioAtualizado.endereco.find(endereco => endereco.nome === novoEndereco.nome);

        res.status(201).json({ mensagem: 'Endereço cadastrado com sucesso.', enderecoAdicionado });
    } catch (err) {
        res.status(500).json({ 'Mensagem': err.message });
    }
}
// Deleta endereço
const deletaEndereco = async (req, res) => {
    const id = req.params.id;
    const eid = req.params.eid;

    try {
        const usuario = await Usuario.findById(id);
        if (!usuario) return res.status(204).json({ mensagem: 'Usuário não encontrado.' });
        const enderecoIndex = usuario.endereco.findIndex(endereco => endereco._id.toString() === eid);
        if (enderecoIndex === -1) return res.status(204).json({ mensagem: 'Endereço não encontrado.' });
        usuario.endereco.splice(enderecoIndex, 1);
        await usuario.save();

        res.status(201).json({ mensagem: 'Endereço excluído com sucesso.' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao excluir o endereço.', error: error.message });
    }
};
// Atualiza endereço
const atualizaEndereco = async (req, res) => {
    const id = req.params.id;
    const eid = req.params.eid;

    try {
        const usuario = await Usuario.findById(id);
        if (!usuario) return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
        const enderecoIndex = usuario.endereco.findIndex(endereco => endereco._id.toString() === eid);
        if (enderecoIndex === -1) return res.status(404).json({ mensagem: 'Endereço não encontrado.' });

        // Atualizar o endereço no array
        usuario.endereco[enderecoIndex] = {
            _id: usuario.endereco[enderecoIndex]._id,
            tipo: req.body.tipo,
            nome: req.body.nome,
            logradouro: req.body.logradouro,
            bairro: req.body.bairro,
            numero: req.body.numero,
            referencia: req.body.referencia,
            cidade: req.body.cidade,
            uf: req.body.uf,
            cep: req.body.cep
        };
        await usuario.save();

        res.status(201).json({ mensagem: 'Endereço atualizado com sucesso.', enderecoAtualizado: usuario.endereco[enderecoIndex] });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao atualizar o endereço.', error: error.message });
    }
};

module.exports = { cadastraUser, atualizaUserDados, cadastraEndereco, deletaEndereco, atualizaEndereco };