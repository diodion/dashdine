
// Lista de cargos, pega os IDs do arquivo ENV.
const LISTACARGO = {
    "Usuario": +process.env.REACT_APP_IDUSER,
    "Admin": +process.env.REACT_APP_IDADM,
    "Superuser": +process.env.REACT_APP_IDSADM
}

module.exports = LISTACARGO