const express = require('express');
const app = express();

app.listen(3000);

//-----------------métodos-----------------
app.get('/', function(req, res) {
    return res.send('GET funcionando.')
})

app.post('/', function(req, res) {
    return res.json ([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
})

app.put('/', function(req, res) {
    return res.json ([
        'Projeto 4'
    ])
})

app.delete('/', function(req, res) {
    return res.json ([
        'Projeto 4'
    ])
})