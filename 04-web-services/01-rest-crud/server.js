const express = require('express');
const app = express();

app.use(express.json());

app.get('/items', (req, res) => {
  res.json([{ id: 1, nome: "Item A" }]);
});

app.post('/items', (req, res) => {
  res.status(201).json(req.body);
});

app.put('/items/:id', (req, res) => {
  res.json({ id: req.params.id, ...req.body });
});

app.delete('/items/:id', (req, res) => {
  res.status(204).send();
});

app.listen(3000);

