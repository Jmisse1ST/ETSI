import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Section/Header";
import Sobre from "./paginas/Sobre";

import Team from "./Section/Team";


import Home from "./ETSI/paginas/Home";
import Login from "./paginas/Login";
import CriarConta from "./paginas/CriarConta";
import Testes from "./ETSI/paginas/Testes";
import Trabalhos from "./ETSI/paginas/Trabalhos";
import Horario from "./ETSI/paginas/Horario";
import HomeRID from "./RID/paginas/homeRID";
import HomeEN from "./EN/paginas/HomeEN";
import HomeAP from "./AP/paginas/HomeAP";
import HomeGE from "./GE/paginas/HomeGE";


const App = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registrado com sucesso:', registration.scope);
          })
          .catch((error) => {
            console.log('Falha ao registrar Service Worker:', error);
          });
      });
    }
  }, []);
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

        <Route path="/" element={<Home />} />
        <Route path="/HomeRID" element={<HomeRID />} />
        <Route path="/HomeEN" element={<HomeEN />} />
        <Route path="/HomeAP" element={<HomeAP />} />
        <Route path="/HomeGE" element={<HomeGE />} />

        <Route path="/horario" element={<Horario />} />
        <Route path="/horarioRID" element={<HorarioRID />} />
        <Route path="/horarioEN" element={<HorarioEN />} />
        <Route path="/horarioAP" element={<HorarioAP />} />
        <Route path="/horarioGE" element={<HorarioGE />} />

        <Route path="/testes" element={<Testes />} />
        <Route path="testesRID" element={ <TestesRID/>} />
        <Route path="testesEN" element={ <TestesEN/>} />
        <Route path="testesAP" element= { <TestesAP/>} />
        <Route path="testesGE" element= { <TestesGE/> }/>

        
        

  



          </Routes>
    </>
      );
};

      export default App;
