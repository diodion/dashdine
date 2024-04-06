const Usuario = require('../models/Usuario');
const Funcionario = require('../models/Funcionario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userLogin = async (req, res) => {
    const { entrada, senha } = req.body;
    if ( !entrada || !senha ) return res.status(400).json({ 'message': 'Preencha todos os campos' });
    
    // TODO: Remover pontos e traços do CPF para permitir login com o mesmo dinamicamente
    // Pega somente o input de entrada no front end e permite login
    const achaUsuario = await Usuario.findOne({
        $or: [{
            'login': entrada
        }, {
            'cpf': entrada
        }, {
            'email': entrada
        }]
    }).exec();
    // Retorna 401 pro front se não acha 
    if (!achaUsuario) return res.sendStatus(401); 
    // Verifica a senha criptografada com a inserida
    const permitido = await bcrypt.compare(senha, achaUsuario.senha);
    if (permitido) {
        const cargos = Object.values(achaUsuario.cargos);
        // Cria o JWT
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "login": achaUsuario.entrada,
                    "cargos": cargos
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '600s' }
        );
        const refreshToken = jwt.sign(
            { "login": achaUsuario.entrada },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        // salva o refreshToken JWT para o usuário
        achaUsuario.refreshToken = refreshToken;
        const resultado = await achaUsuario.save();
        console.log(resultado);
            
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
    if ( !entrada || !senha ) return res.status(400).json({ 'message': 'Preencha todos os campos' });
    
    // TODO: Remover pontos e traços do CPF para permitir login com o mesmo dinamicamente
    // Pega somente o input de entrada no front end e permite login
    const achaFuncionario = await Funcionario.findOne({
        $or: [{
            'cpf': entrada
        }, {
            'email': entrada
        }
    ]
    }).exec();
    // Retorna 401 pro front se não acha 
    if (!achaFuncionario) return res.sendStatus(401);
    // Retorna 403 se não estiver ativo
    if (!achaFuncionario.ativo) return res.status(403).json({ 'message': 'Usuário não está ativo.' });
    // Verifica a senha criptografada com a inserida
    const permitido = await bcrypt.compare(senha, achaFuncionario.senha);
    if (permitido) {
        const cargos = Object.values(achaFuncionario.cargos);
        // Cria o JWT
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "login": achaFuncionario.entrada,
                    "cargos": cargos
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '600s' }
        );
        const refreshToken = jwt.sign(
            { "login": achaFuncionario.entrada },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        // salva o refreshToken JWT para o usuário
        achaFuncionario.refreshToken = refreshToken;
        const resultado = await achaFuncionario.save();
        console.log(resultado);
            
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