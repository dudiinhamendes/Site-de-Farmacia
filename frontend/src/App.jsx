import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import RotaPrivada from "./RotaPrivada";
import NaoEncontrada from "./NaoEncontrada";
import Cesta from "./components/Cesta";
import { CarrinhoProvider } from "./context/CarrinhoProvider";
import Cadastro from "./Cadastro";


function App() {
    return (
        <CarrinhoProvider>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<RotaPrivada><Home /></RotaPrivada>} />
                <Route path="*" element={<NaoEncontrada />} />
                <Route path="/cesta" element={<Cesta />} />
            </Routes>
        </CarrinhoProvider>

    );
}

export default App;
