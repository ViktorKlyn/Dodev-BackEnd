const express = require('express')
const app = express()

app.use(express.json())

app.listen(3000, () => {
    console.log('servidor iniciado')
})

// LISTA PARA SER MANIPULADA
const veiculos = []

// GET
app.get('/veiculos', (req, res) => {
    res.status(200).send(veiculos)
})

// GET by ID
app.get('/veiculos/:id', (req, res) => {
    const veiculo = veiculos.find(x => x.id == req.params.id)
    res.status(200).send(veiculo)
})

// POST
app.post('/veiculos', (req, res) => {
    veiculos.push(req.body)
    res.status(200).send('veiculo cadastrado')
})

// PUT
app.put('/veiculos/:id', (req, res) => {
    const veiculo = veiculos.find(x => x.id == req.params.id)
    const idveiculo = veiculos.indexOf(veiculo)
    veiculos[idveiculo] = req.body
    res.status(200).send('veiculo atualizado com sucesso')    
})

// DELETE
app.delete('/veiculos/:id', (req, rest) => {
    const veiculo = veiculos.find(x => x.id == req.params.id)
    const idveiculo = veiculos.indexOf(veiculo)
    veiculos.splice(idveiculo, 1)
    res.status(200).send('veiculo excluido com sucesso')
})