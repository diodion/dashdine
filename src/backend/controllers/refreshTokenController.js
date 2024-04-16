const Usuario = require('../models/Usuario');
const Funcionario = require('../models/Funcionario');
const jwt = require('jsonwebtoken');

const userRefresht = async (req, res) => {
    const cookies = req.cookies;
    console.log(req.cookies);
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    
    const achaUsuario = await Usuario.findOne({ refreshToken }).exec();
    if (!achaUsuario) return res.sendStatus(403); //Forbidden 

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || achaUsuario.entrada !== decoded.entrada) return res.sendStatus(403);
            const cargos = Object.values(achaUsuario.cargos);
            const id = Object.values(achaUsuario._id);
            const accessToken = jwt.sign(
                {
                    "Info": {
                        "id": id,
                        "entrada": decoded.entrada,
                        "cargos": cargos
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '600s' }
            );
            res.json({ accessToken })
        }
    );
}
// Funcionário
const funcRefresht = async (req, res) => {
    const cookies = req.cookies;
    console.log(req.cookies);
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    
    const achaFuncionario = await Funcionario.findOne({ refreshToken }).exec();
    if (!achaFuncionario) return res.sendStatus(403); //Forbidden 

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || achaFuncionario.entrada !== decoded.entrada) return res.sendStatus(403);
            const cargos = Object.values(achaFuncionario.cargos);
            const id = Object.values(achaFuncionario._id);
            const accessToken = jwt.sign(
                {
                    "Info": {
                        "id": id,
                        "entrada": decoded.entrada,
                        "cargos": cargos
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '600s' }
            );
            res.json({ accessToken })
        }
    );
}

module.exports = { 
    userRefresht,
    funcRefresht 
}