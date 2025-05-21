const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

let comments = [];

app.post('/api/comments', (req, res) => {
    comments.push(req.body);
    res.status(201).send();
});

app.get('/api/comments', (req, res) => {
    res.json(comments);
});

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));
