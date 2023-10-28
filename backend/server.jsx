const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.post("/register", (req, res) => {
  const { nome, email, senha } = req.body;
  const sql = "INSERT INTO login (`nome`, `email`, `senha`) VALUES (?, ?, ?)";
  const values = [nome, email, senha];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.status(500).json("Erro ao registrar o usuário");
    }
    return res.status(200).json("Usuário registrado com sucesso");
  });
});

app.post("/login", (req, res) => {
  const { email, senha } = req.body;
  const sql = "SELECT * FROM login WHERE `email` = ? AND `senha` = ?";

  db.query(sql, [email, senha], (err, data) => {
    if (err) {
      return res.status(500).json("Erro na autenticação");
    }

    if (data.length > 0) {
      return res.json("Sucesso");
    } else {
      return res.json("Credenciais inválidas");
    }
  });
});

app.listen(8081, () => {
  console.log("Servidor rodando na porta 8081");
});
