const express = require('express')
const app = express()
const db = require('./models')

const RouterTelefone = require('./routes/tels')
app.use(express.json())

app.use('/telefone', RouterTelefone )


db.sequelize.sync().then(() =>{
    app.listen(process.env.PORT || 8080, () =>{
        console.log("servidor rodando...")
    })
})