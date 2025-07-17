import { Routes, Route } from "react-router-dom";
import Header from "./Section/Header";
import Sobre from "./paginas/Sobre";

import Team from "./Section/Team";


import Home from "./paginas/Home";
import Login from "./paginas/Login";
import CriarConta from "./paginas/CriarConta";
import Testes from "./ETSI/paginas/Testes";
import Trabalhos from "./ETSI/paginas/Trabalhos";
import Horario from "./ETSI/paginas/Horario";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/criarConta" element={<CriarConta />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/horario" element={<Horario />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/trabalhos" element={<Trabalhos />} />
        <Route path="/testes" element={<Testes />} />
      </Routes>
    </>
  );
};

export default App;
