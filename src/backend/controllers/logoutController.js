const Usuario = require('../models/Usuario');

const handleLogout = async (req, res) => {
    // Deleta o access token para o client também
    const cookies = req.cookies;
    // Retorna 204 caso não possua token para apagar no front
    if (!cookies?.jwt) return res.sendStatus(204);
    const refreshToken = cookies.jwt;
    // Verifica se o refreshtoken esta na DB
    const achaUsuario = await Usuario.findOne({ refreshToken }).exec();

    if (!achaUsuario) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.sendStatus(204);
    }
    // Deleta o refreshtoken da DB e salva
    achaUsuario.refreshToken = '';
    const resultado = await achaUsuario.save();

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.sendStatus(204);
}

module.exports = { handleLogout }