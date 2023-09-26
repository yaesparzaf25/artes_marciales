import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";import Navbar from "./componentes/navbar";
import Login from "./componentes/Login";
import Perfil from "./componentes/Perfil";
import SignUp from "./componentes/SignUp";
import "./styles/estilos.css";
import "./App.css";
import PerfilRoot from "./componentes/PerfilRoot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile/:id" element={<Perfil />} />
        <Route path="/admin/:id" element={<PerfilRoot />} />
      </Routes>
    </Router>
  );
}

export default App;
