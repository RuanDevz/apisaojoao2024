const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

app.use(cors());

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL, 
});

const RouterTelefone = require('./routes/tels');
app.use(express.json());
app.use('/telefone', RouterTelefone);

db.sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        return db.sequelize.sync();
    })
    .then(() => {
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}...`);
        });
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });
