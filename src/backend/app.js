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

// Rotas desprotegidas por cargos e autenticação
app.use('/registro', require('./routes/registro')); // Somente usuários
app.use('/refresh', require('./routes/refresh'));
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'));
app.use('/cardapio', require('./routes/cardapioUser'));

// Rotas protegidas por cargos e autenticação
app.use(verificaJWT);
app.use('/pedido', require('./routes/pedido'));
app.use('/minhaconta', require('./routes/usuario'));
app.use('/cardapioadm', require('./routes/cardapioFunc'));
app.use('/clienteadm', require('./routes/admUsuario'));
app.use('/func', require('./routes/funcionario'));
app.use('/relatorios', require('./routes/relatorios'));

app.listen(process.env.PORT, function () {
    console.log(
    '\nBackend Iniciado na porta: ' + process.env.PORT + 
    '\nEndereço frontend permitido pelo CORS: ' + process.env.FRONT_URL_DEV +
    '\n'
    )
});
