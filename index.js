const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js'); // Importe o cliente do Supabase

app.use(cors());

const supabaseUrl = 'https://ympgtxpizjgrsrbtexry.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey); // Crie uma instância do cliente Supabase

const RouterTelefone = require('./routes/tels');
app.use(express.json());
app.use('/telefone', RouterTelefone);

db.sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        return db.sequelize.sync(); // Isso sincroniza os modelos com o banco de dados
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
