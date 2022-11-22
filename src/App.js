import { HashRouter, Route, Routes } from "react-router-dom"
import { Clientes } from './Home'
import { Login } from './views/Login'
import { Registro } from "./views/Registro";
import { Inicio } from "./views/Inicio";
import { Nosotros } from "./views/Nosotros";
import { Carta } from "./views/Carta";
import { Hacer_Reserva } from "./views/Hacer_Reserva";
import { Mis_Reservas } from "./views/Mis_Reservas";
import { LoginMesa } from "./viewsMesa/LoginMesa"
import { RegistroMesa } from "./viewsMesa/RegistroMesa"
import { MenuMesa } from "./viewsMesa/MenuMesa"
import { PedidoMesa } from "./viewsMesa/PedidoMesa"
import { Recepcion } from "./viewTotem/Recepcion"


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/" element={<Inicio/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/carta" element={<Carta/>}/>
        <Route path="/hacerReserva" element={<Hacer_Reserva/>}/>
        <Route path="/misReservas" element={< Mis_Reservas/>}/>
        <Route path="/loginMesa" element={< LoginMesa/>}/>
        <Route path="/registroMesa" element={< RegistroMesa/>}/>
        <Route path="/menuMesa" element={< MenuMesa/>}/>
        <Route path="/pedidoMesa" element={< PedidoMesa/>}/>
        <Route path="/recepcion" element={< Recepcion/>}/>

        

        <Route
          path="about"
          element={
            <h1>
              about <a href="#">go back</a>
            </h1>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
