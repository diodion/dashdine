const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    // Confere os headers da requisição
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            req.entrada = decoded.Info.entrada;
            req.cargos = decoded.Info.cargos;
            next();
        }
    );
}

module.exports = verifyJWT