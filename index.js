const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');

app.use(cors());

const RouterTelefone = require('./routes/tels');
app.use(express.json());
app.use('/telefone', RouterTelefone);

db.sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        return db.sequelize.sync()
    })
    .then(() => {
        app.listen(process.env.PORT || 8080, () => {
            console.log("Servidor rodando na porta 8080...");
        });
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });
