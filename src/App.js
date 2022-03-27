import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MediaVoltas from "./components/MediaVoltas";
import PesoIdeal from "./components/PesoIdeal";
import Venda from "./components/Venda";
import Valores from "./components/Valores"
import FtoC from "./components/FtoC";
import DtoR from "./components/DtoR";
import TempGest from "./components/TempGest";
import ConsumoGasAl from "./components/ConsumoGasAl";
import PrecoCarro from "./components/PrecoCarro";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route exact path="/" element={<MediaVoltas />}></Route>
          <Route exact path="/media_voltas" element={<MediaVoltas />}></Route>
          <Route exact path="/peso_ideal" element={<PesoIdeal />}></Route>
          <Route exact path="/venda" element={<Venda />}></Route>
          <Route exact path="/valores" element={<Valores />}></Route>
          <Route exact path="/ftoc" element={<FtoC />}></Route>
          <Route exact path="/dtor" element={<DtoR />}></Route>
          <Route exact path="/gest" element={<TempGest />}></Route>
          <Route exact path="/gasal" element={<ConsumoGasAl />}></Route>
          <Route exact path="/precocarro" element={<PrecoCarro />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
