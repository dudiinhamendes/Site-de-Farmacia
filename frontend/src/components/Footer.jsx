//import {useState} from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-conteudo">
        <div className="footer-secao">
          <h4>FarmaLife</h4>
          <p>Sua farmácia online de confiança. Cuidando da sua saúde todos os dias.</p>
        </div>

        <div className="footer-secao">
          <h4>Links Úteis</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/cesta">Minha Cesta</a></li>
          </ul>
        </div>

        <div className="footer-secao">
          <h4>Atendimento</h4>
          <p>Email: contato@farmalife.com</p>
          <p>Telefone: (00) 1234-5678</p>
        </div>
      </div>

      <div className="footer-direitos">
        <p>&copy; {new Date().getFullYear()} FarmaLife. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
