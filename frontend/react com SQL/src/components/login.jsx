import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./loginvalidation";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (!errors.email && !errors.password) {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Sucesso") {
            navigate("/home");
          } else {
            alert("Nenhum registro encontrado!");
          }
        })
        .catch((err) => {
          console.error("Registration error:", err);
        });
    }
  };

  return (
    <div className="login-container">
      <h1>Faça Login!</h1>
      <form onSubmit={handleSubmitClick}>
        <TextField variant="outlined" label="E-mail" type="email" name="email" onChange={handleInput} />
        {errors.email && <span>{errors.email}</span>}
        <TextField variant="filled" label="Senha" type="password" name="senha" onChange={handleInput} />
        {errors.password && <span>{errors.password}</span>}
        <Button variant="contained" type="submit">
          Login
        </Button>
        <Link to="/register">
          <Button variant="outlined">
            Não possui conta? <br /> Criar agora!
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
