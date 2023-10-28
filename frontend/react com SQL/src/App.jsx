import "./App.css";
import Login from "../src/components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../src/components/register.jsx";
import Home from "./components/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
