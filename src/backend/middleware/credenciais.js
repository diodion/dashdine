const origensPermitidas = require('../config/origensPermitidas');

const credenciais = (req, res, next) => {
    const origin = req.headers.origin;
    if (origensPermitidas.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

module.exports = credenciais