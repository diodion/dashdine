// Middleware para paginar e também retornar registro, exemplo de utilização na API de pegar todos usuários
// Na rota é necessário chamar a função paginacaoMiddleware(NUMERODEREGISTROSQVOLTAM), e para trocar de pagina invocar ?pag=numero
const paginacaoMiddleware = (paginaTam) => {
    return (req, res, next) => {
        const paginaNum = parseInt(req.query.pag) || 1;
        const startIndex = (paginaNum - 1) * paginaTam;
        const endIndex = startIndex + paginaTam;

        req.paginacao = {
            pag: paginaNum,
            limit: paginaTam,
            startIndex,
            endIndex
        };

        next();
    };
};

module.exports = paginacaoMiddleware;