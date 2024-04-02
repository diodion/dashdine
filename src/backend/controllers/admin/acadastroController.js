const Funcionario = require('../../models/Funcionario');
const bcrypt = require('bcryptjs');

const handleNovoFuncionario = async (req, res) => {
    const { senha, nome, sobrenome, cpf, email, telefone } = req.body;

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
        res.status(201).json({'Sucesso': `Usuário ${nome} registrado`});
    } catch (err) {
        res.status(500).json({ 'Mensagem': err.message });
    }
}

module.exports = { handleNovoFuncionario };