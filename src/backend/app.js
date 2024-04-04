require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const dbConecta = require('./db/conn');
const credenciais = require('./middleware/credenciais');
const corsOptions = require('./config/corsOptions')
const verificaJWT = require('./middleware/verificaJWT');
const cookieParser = require('cookie-parser');
const LISTACARGO = require('./config/cargosList');
// Conecta banco de dados
dbConecta();
// Verifica as opções de credenciais e cookies antes do CORS
app.use(credenciais);
// Middleware urlencoded
app.use(express.urlencoded({ extended: false }));
// Middleware Cookies
app.use(cookieParser());
// CORS
app.use(cors(corsOptions));
app.use(express.json());
// Rotas acessiveis sem autenticação ou autorização
app.use('/registro', require('./routes/public/registro'));
app.use('/refresh', require('./routes/public/refresh'));
app.use('/login', require('./routes/public/login'));
app.use('/logout', require('./routes/public/logout'));
app.use('/cardapio', require('./routes/public/cardapioCliente'));

// Rotas protegidas por autenticação e autorização
app.use(verificaJWT);
app.use('/cardapioadm', require('./routes/admin/cardapioAdm'));
app.use('/pesquisacliente', require('./routes/admin/pesquisacliente'));


app.listen(process.env.PORT, function () {
    console.log('Backend Iniciado na porta ' + process.env.PORT)
});
