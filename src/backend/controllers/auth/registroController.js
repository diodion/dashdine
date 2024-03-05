const Usuario = require('../../models/Usuario');
const bcrypt = require('bcryptjs');

const handleNovoUsuario = async (req, res) => {
    const { senha, nome, sobrenome, cpf, email } = req.body;

    if (!senha || !nome || !sobrenome || !cpf || !email) return res.status(400).json({ 'message': 'Preencha todos os campos' });
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
            "senha": criptSenha
        });
        console.log(resultado);
        res.status(201).json({'Sucesso': `Usuário ${email} registrado`});
    } catch (err) {
        res.status(500).json({ 'Mensagem': err.message });
    }
}

module.exports = { handleNovoUsuario };