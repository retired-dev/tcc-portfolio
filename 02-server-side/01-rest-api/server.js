const express = require("express");
const app = express();

app.use(express.json());

app.get("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  res.json({ id, nome: "Usuário Exemplo" });
});

app.listen(3000, () => console.log("Servidor ativo na porta 3000"));
