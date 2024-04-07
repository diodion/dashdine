
// Lista de cargos, pega os IDs do arquivo ENV.
const LISTACARGO = {
    "Cliente": +process.env.REACT_APP_IDCLIENT,
    "Atendente": +process.env.REACT_APP_IDATED,
    "Coordenador": +process.env.REACT_APP_IDCORD,
    "Gerente": +process.env.REACT_APP_IDGERE,
    "Admin": +process.env.REACT_APP_IDADM,
    "Superuser": +process.env.REACT_APP_IDSADM
}

module.exports = LISTACARGO