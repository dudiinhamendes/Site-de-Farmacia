import { Link } from "react-router-dom";
import "./Home.css";

function NaoEncontrada() {
    return (
    <div className="container-home">
        <div className="cartao">
            <h2>404</h2>
            <p>Essa página não existe.</p>
            <Link to="/" className="voltar"> Voltar ao login </Link>
        </div>
    </div>
    );
}

export default NaoEncontrada;