import { Routes, Route } from "react-router-dom";
import Header from "./Section/Header";
import Sobre from "./paginas/Sobre";
import Horario from "./paginas/Horario"
import Team from "./Section/Team";
import Trabalhos from "./paginas/Trabalhos";
import Testes from "./paginas/Testes";
import Home from "./paginas/Home";

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/sobre" element={ <Sobre /> } />
        <Route path="/horario" element={ <Horario />} />
        <Route path="/equipe" element={ <Team />} />
        <Route path="/trabalhos" element={ <Trabalhos />} />
        <Route path="/testes" element={ <Testes /> } />
      </Routes>
    </>
  )
}

export default App;