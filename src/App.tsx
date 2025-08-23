import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Section/Header";
import Sobre from "./paginas/Sobre";

import Team from "./Section/Team";


import Home from "./ETSI/paginas/Home";
import Login from "./paginas/Login";

import Testes from "./ETSI/paginas/Testes";
import Trabalhos from "./ETSI/paginas/Trabalhos";
import Horario from "./ETSI/paginas/Horario";
import HomeRID from "./RID/paginas/homeRID";
import HomeEN from "./EN/paginas/HomeEN";
import HomeAP from "./AP/paginas/HomeAP";
import HomeGE from "./GE/paginas/HomeGE";
import TestesRID from "./RID/paginas/Testes";
import TestesEN from "./EN/paginas/Testes";
import TestesGE from "./GE/paginas/Testes";
import TestesAP from "./AP/paginas/Testes";
import HorarioRID from "./RID/paginas/Horario";
import HorarioEN from "./EN/paginas/Horario";
import HorarioAP from "./AP/paginas/Horario";
import HorarioGE from "./GE/paginas/Horario";

import CriarConta from "./paginas/CriarConta";
import HeaderAP from "./AP/paginas/HeaderAp";
import HeaderRID from "./RID/paginas/HeaderRID";
import HeaderGE from "./GE/paginas/HeaderGE";
import HeaderEN from "./EN/paginas/ HeaderEN";


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
      <HeaderAP/>
      <Routes>
        <Route path="/criarConta" element={<CriarConta/>}/>
        <Route path="/login" element={<Login/>}/>

       
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/equipe" element={<Team/>}/>

        <Route path="/" element={<><Home /><Header/></>} />
        <Route path="/HomeRID" element={<><HomeRID/><HeaderRID/></> } />
        <Route path="/HomeEN" element={<><HomeEN/><HeaderEN/></>} />
        <Route path="/HomeAP" element={<><HomeAP/><HeaderAP/></>} />
        <Route path="/HomeGE" element={<><HomeGE/><HeaderGE/></>} />

        <Route path="/horario" element={<Horario />}/>
        <Route path="/horarioRID" element={<HorarioRID/>}/>
        <Route path="/horarioEN" element={<HorarioEN/>}/>
        <Route path="/horarioAP" element={<HorarioAP/>}/>
        <Route path="/horarioGE" element={<HorarioGE/>}/>

        <Route path="/testes" element={<Testes/>}/>
        <Route path="/testesRID" element={<TestesRID/>}/>
        <Route path="/testesEN" element={<TestesEN/>}/>
        <Route path="/testesAP" element={<TestesAP/>}/>
        <Route path="/testesGE" element={<TestesGE/>}/>

        <Route path="/trabalhos" element={<Trabalhos />} />
      
        
      </Routes>
    </>
  );
};

export default App;
