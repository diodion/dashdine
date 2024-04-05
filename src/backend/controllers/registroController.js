const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

const handleNovoUsuario = async (req, res) => {
    const { senha, nome, sobrenome, cpf, email, telefone } = req.body;

    if (!senha || !nome || !sobrenome || !cpf || !email || !telefone) return res.status(400).json({ 'message': 'Preencha todos os campos' });
    // Verifica por registros duplicados no campo usuario, cpf e email.
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
        res.status(201).json({'Sucesso': `Usuário ${email} registrado`});
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
    }, { new: true, runValidators: true});
        res.send(atualizaFunc);
        console.log(atualizaFunc)
    } catch (err) {
        res.status(500).json({ 'Mensagem': err.message });
    }
}
// Criar Api de cadastro de endereços e atualizações
module.exports = { handleNovoUsuario, atualizaUserDados};