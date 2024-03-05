const origensPermitidas = require('./origensPermitidas');

const corsOptions = {
    origin: (origin, callback) => {
        if (origensPermitidas.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Bloqueado pelo CORS'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions;