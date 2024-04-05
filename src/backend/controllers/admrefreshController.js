const Funcionario = require('../models/Funcionario');
const jwt = require('jsonwebtoken');

const handleAdmRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    console.log(req.cookies);
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    
    const achaFuncionario = await Funcionario.findOne({ refreshToken }).exec();
    if (!achaFuncionario) return res.sendStatus(403); //Forbidden 
    // evaluate jwt 
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || achaFuncionario.entrada !== decoded.entrada) return res.sendStatus(403);
            const cargos = Object.values(achaFuncionario.cargos);
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "login": decoded.entrada,
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

module.exports = { handleAdmRefreshToken }