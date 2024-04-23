const express = require('express')
const Router = express.Router()
const {Tels} = require('../models')

Router.get('/', async (req,res) =>{
    const getnumbers = req.body
    
    const number = await Tels.findAll(getnumbers)
    
    res.json(number)
})

Router.post('/', async (req,res) =>{

    const {telefone} = req.body
    
    const existingnumber = await Tels.findOne({ where: { telefone } });

    if(existingnumber){
        return res.status(201).json({msg: "Telefone já cadastrado!"})
    }
    const createnumber = await Tels.create({telefone})

    res.status(200).json({msg: "Numero adicionado com sucesso!", createnumber})
})


module.exports = Router