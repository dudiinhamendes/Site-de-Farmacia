import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import iconeLupa from "./assets/images/lupa.png";
import logoImagem from "./assets/images/logo_farmacia.png";
import iconeCesta from "./assets/images/cesta.png";
import iconeBanner from "./assets/images/icone_banner.png";
import imagemSuplemento from "./assets/images/suplementos.png";  
import imagemMaquiagem from "./assets/images/maquiagem.png";
import imagemAntialergico from "./assets/images/antialergico.png";
import imagemShampoo from "./assets/images/shampoo.png";
import imagemAntigripais from "./assets/images/antigripais.png";
import imagemSkincare from "./assets/images/skincare.png";
import imagemSeta from "./assets/images/setas_carrossel.png";
import { SubMenu } from "./SubMenu";
import CarrosselProdutos from "./CarrosselProdutos";
import {useCarrinho} from './context/useCarrinho';
import Footer from "./components/Footer";
import imagemAviso from "./assets/images/aviso.png";


function Home() {
  const navigate = useNavigate();
  const [termoBusca, setTermoBusca] = useState("");
  const [ categoriaAtual, setCategoriaAtual]=useState('Todos')
  const {totalItens} = useCarrinho();
  const [modalEmBreve, setModalEmBreve] = useState({ aberto: false, categoria: "" });

  function sair() {
    localStorage.removeItem("logado");
    navigate("/");
  }

  function handleBusca(e) {
    e.preventDefault();
   
  }

  return (
    <div className="container-home">
      <header className="header-farmacia">
        <div className="logo" onClick={() => navigate("/home")}>
        <div className="container-icone-logo">
          <img src={logoImagem} alt="FarmaLife" className="img-logo" />
          </div>
          <span className="nome-farmacia">
            Farma<strong>Life</strong>
          </span>
        </div>

        <form className="conteiner-busca" onSubmit={handleBusca}>
          <button type="submit" className="botao-busca">
            <img src={iconeLupa} alt="Ícone de lupa" className="img-lupa" />
          </button>
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
          />
        </form>

        <div className="acoes-header">
          <button className="botao-cesta" onClick={() => navigate("/cesta")}>
            <img src={iconeCesta} alt="Ícone de cesta" className="img-cesta" />
            {totalItens> 0 && (
              <span className="contador-cesta">{totalItens}</span>
            )}
          </button>         

          <button className="botao-sair" onClick={sair}>
            Sair
          </button>
        </div>
      </header>
      <SubMenu  onSelecionarCategoria={(categoria) => setCategoriaAtual(categoria)} />  

   <section className="banner-destaque">
  <div className="banner-conteudo">
    <span className="promocao-ofertas">Ofertas da Semana</span>
    <h2 className="banner-titulo">Cuidados com a sua saúde</h2>
    <p className="banner-descricao">
      Aproveite até <strong>30% OFF</strong> em vitaminas, dermocosméticos e produtos de higiene.
    </p>
    
    <div className="banner-acoes">
      <div className="banner-cupom">
        <span>CUPOM:</span>
        <strong>FARMALIFE10</strong>
      </div>
      <button className="banner-botao">Ver Ofertas</button>
    </div>
  </div>

  <div className="banner-imagem-lado">
    <img src={iconeBanner} alt="Desenho de Farmácia" className="img-banner"/>
  </div>
</section>

<section className="secao-categorias">
  <h2 className="titulo-secao">Navegue por categoria</h2>

  <div className="carrossel-container">
    <button className="botao-seta seta-esquerda">
      <img src={imagemSeta} alt="Anterior" className="img-seta-esquerda" />
    </button>   
    <div className="carrossel-categorias">
      <div className="card-categoria" onClick={() => setModalEmBreve({ aberto: true, categoria: "Suplementos" })}>
        <div className="box-imagem">
          <img src={imagemSuplemento} alt="Suplementos" />
        </div>
        <span>Suplementos</span>
      </div>

      <div className="card-categoria" onClick={() => setModalEmBreve({ aberto: true, categoria: "Maquiagem" })}>
        <div className="box-imagem">
          <img src={imagemMaquiagem} alt="Maquiagem" />
        </div>
        <span>Maquiagem</span>
      </div>

      <div className="card-categoria" onClick={() => setModalEmBreve({ aberto: true, categoria: "Antialérgicos" })}>
        <div className="box-imagem">
          <img src={imagemAntialergico} alt="Antialérgicos" />
        </div>
        <span>Antialérgicos</span>
      </div>

      <div className="card-categoria" onClick={() => setModalEmBreve({ aberto: true, categoria: "Cabelos" })}>
        <div className="box-imagem">
          <img src={imagemShampoo} alt="Cabelos" />
        </div>
        <span>Cabelos</span>
      </div>

      <div className="card-categoria" onClick={() => setModalEmBreve({ aberto: true, categoria: "Antigripais" })}>
        <div className="box-imagem">
          <img src={imagemAntigripais} alt="Antigripais" />
        </div>
        <span>Antigripais</span>
      </div>

      <div className="card-categoria" onClick={() => setModalEmBreve({ aberto: true, categoria: "Skincare" })}>
        <div className="box-imagem">
          <img src={imagemSkincare} alt="Skincare" />
        </div>
        <span>Skincare</span>
      </div>
    </div>

    <button className="botao-seta seta-direita">
      <img src={imagemSeta} alt="Próximo"  />
    </button>
  </div>
</section>

<CarrosselProdutos termoBusca={termoBusca} categoria={categoriaAtual} />

{modalEmBreve.aberto && (
  <div className="modal-overlay" onClick={() => setModalEmBreve({ aberto: false, categoria: "" })}>
    <div className="modal-quantidade modal-container-breve">
      <button 
        type="button" 
        className="botao-fechar-modal" 
        onClick={() => setModalEmBreve({ aberto: false, categoria: "" })}
      >
        ×
      </button>
      
      <div className="modal-conteudo modal-corpo-aviso">
        <img src={imagemAviso} alt="emBreve" className="img-modal-em-breve" />
        
        <h4 className="modal-titulo-aviso"> Abastecendo nosso estoque! </h4>
        
        <p className="modal-texto-aviso">
          Estamos preparando as melhores ofertas e novidades para a categoria de <strong>{modalEmBreve.categoria}</strong>. Volte a acompanhar em breve!
        </p>
        
        <button 
          type="button" 
          className="botao-confirmar-carrinho" 
          onClick={() => setModalEmBreve({ aberto: false, categoria: "" })}
        >
          Entendi, continuar navegando
        </button>
      </div>
    </div>
  </div>
)}

<Footer />

    </div>
  );
}

export default Home;
