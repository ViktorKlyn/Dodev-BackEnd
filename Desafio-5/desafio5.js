const express = require('express')
const app = express()
const db = require('./dataBase')
const dbcontext = db.veiculosDatabase()

app.use(express.jsob())

app.listen(3001, () => {
    console.log('servidor iniciado')
})

// GET
app.get('/veiculos/:id', async (req, res) => {
    res.status(200).send(await dbcontext.get(req.params.id))
})

// POST
app.post('/veiculos/:id', async (req, res) => {
    res.status(200).send(await dbcontext.insert(req.body))
})

// PUT
app.put('/veiculos/:id', async (req, res) => {
    res.status(200).send(await dbcontext.update(req.body, req.params.id))
})

// DELETE
app.delete('/veiculos/id:', async (req, res) => {
    await dbcontext.del(req.params.id)
    res.status(200).send('veiculo excluido com sucesso')
})