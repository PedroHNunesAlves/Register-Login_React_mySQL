import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const handleSubmitClick = (event) => {
    event.preventDefault();

    if (values.nome && values.email && values.senha) {
      axios
        .post("http://localhost:8081/register", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          console.error("Erro no registro:", err);
        });
    }
  };

  const [values, setValues] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({ nome: "", email: "", senha: "" });

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  return (
    <div>
      <h1>Faça seu cadastro aqui!</h1>
      <form onSubmit={handleSubmitClick}>
        <TextField variant="outlined" label="Nome" type="text" name="nome" onChange={handleInput} />
        <TextField variant="outlined" label="E-mail" type="email" name="email" onChange={handleInput} />
        <TextField variant="filled" label="Senha" type="password" name="senha" onChange={handleInput} />
        <Button variant="contained" type="submit">
          Registrar!
        </Button>
        <Link to="/">
          <Button variant="outlined">Ir para a tela de login</Button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
