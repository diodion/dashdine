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
// # Rotas
// ##Rotas acessiveis sem autenticação ou autorização
// ### Autenticação e autorização cliente
app.use('/registro', require('./routes/registro'));
app.use('/refresh', require('./routes/refresh'));
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'));
app.use('/cardapio', require('./routes/cardapioCliente'));
// ### Autenticação e autorização Proprietário
app.use('/loginweb', require('./routes/loginAdm'));
app.use('/logoutweb', require('./routes/logoutAdm'));
app.use('/refreshweb', require('./routes/refreshAdm'));

// Rotas protegidas por autenticação e autorização
app.use(verificaJWT);
app.use('/cardapioadm', require('./routes/cardapioAdm'));
app.use('/pesquisacliente', require('./routes/pesquisaCliente'));
app.use('/cadastroweb', require('./routes/cadastroAdm')); // Rota cadastro de funcionários - Permitada apenas por Gerente e Administrador

app.listen(process.env.PORT, function () {
    console.log(
    '\nBackend Iniciado na porta: ' + process.env.PORT + 
    '\nEndereço frontend permitido pelo CORS: ' + process.env.FRONT_URL_DEV +
    '\n'
    )
});
