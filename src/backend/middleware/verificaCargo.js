const verificaCargos = (...allowedcargos) => {
    return (req, res, next) => {
        if (!req?.cargos) return res.sendStatus(401);
        const cargosArray = [...allowedcargos];
        const result = req.cargos.map(cargo => cargosArray.includes(cargo)).find(val => val === true);
        if (!result) return res.sendStatus(401);
        next();
    }
}

module.exports = verificaCargos