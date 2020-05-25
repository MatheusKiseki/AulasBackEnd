const express = require('express')
const app = express()


app.get('/', (req, res) =>{
    console.log('na rota /')
})

app.get('/braga', (req, res) =>{
    console.log('na rota /braga')
})


app.listen(3000, () =>{
    console.log('Rodando na porta 3000')
})
