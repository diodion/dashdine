const Usuario = require('../models/Usuario');
const Funcionario = require('../models/Funcionario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userLogin = async (req, res) => {
    const { entrada, senha } = req.body;
    if (!entrada || !senha) return res.status(400).json({ 'message': 'Preencha todos os campos' });

    const achaUsuario = await Usuario.findOne({
        $or: [{
            'cpf': entrada
        }, {
            'email': entrada
        }]
    }).exec();
    if (!achaUsuario) return res.sendStatus(401);
    const permitido = await bcrypt.compare(senha, achaUsuario.senha);
    if (permitido) {
        const cargos = Object.values(achaUsuario.cargos);
        const accessToken = jwt.sign(
            {
                "Info": {
                    "entrada": achaUsuario.entrada,
                    "cargos": cargos
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '600s' }
        );
        const refreshToken = jwt.sign(
            { "entrada": achaUsuario.entrada },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        achaUsuario.refreshToken = refreshToken;
        await achaUsuario.save();
        // Dev para teste de API
        // res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: false, maxAge: 24 * 60 * 60 * 1000 });
        // Produção
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });

        res.json({ accessToken });
    } else {
        res.sendStatus(401);
    }
}
// Funcionário
const funcLogin = async (req, res) => {
    const { entrada, senha } = req.body;
    if (!entrada || !senha) return res.status(400).json({ 'message': 'Preencha todos os campos' });

    const achaFuncionario = await Funcionario.findOne({
        $or: [{
            'cpf': entrada
        }, {
            'email': entrada
        }
        ]
    }).exec();
    if (!achaFuncionario) return res.sendStatus(401);
    if (!achaFuncionario.ativo) return res.status(403).json({ 'message': 'Usuário não está ativo.' });
    const permitido = await bcrypt.compare(senha, achaFuncionario.senha);
    if (permitido) {
        const cargos = Object.values(achaFuncionario.cargos);
        const accessToken = jwt.sign(
            {
                "Info": {
                    "entrada": achaFuncionario.entrada,
<<<<<<< HEAD
                    "cargos": cargos,
                    // "id": id
=======
                    "cargos": cargos
>>>>>>> 8b6c5b28832c2553be5be57df274bb5ee3a7851e
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '600s' }
        );
        const refreshToken = jwt.sign(
            { "entrada": achaFuncionario.entrada },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        achaFuncionario.refreshToken = refreshToken;
        await achaFuncionario.save();
        // Dev para teste de API
        //res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: false, maxAge: 24 * 60 * 60 * 1000 });
        // Produção
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });

        res.json({ accessToken });
    } else {
        res.sendStatus(401);
    }
}

module.exports = {
    userLogin,
    funcLogin
};