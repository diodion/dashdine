const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    console.log(req.cookies);
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    
    const achaUsuario = await Usuario.findOne({ refreshToken }).exec();
    if (!achaUsuario) return res.sendStatus(403); //Forbidden 
    // evaluate jwt 
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || achaUsuario.entrada !== decoded.entrada) return res.sendStatus(403);
            const cargos = Object.values(achaUsuario.cargos);
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

module.exports = { handleRefreshToken }