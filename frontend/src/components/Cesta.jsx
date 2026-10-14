//import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cesta.css";
import { useCarrinho } from "../context/useCarrinho";
import logoImagem from "../assets/images/logo_farmacia.png";
import setaCesta from "../assets/images/seta_cesta.png";
import imagemLixeira from "../assets/images/lixeira.png";
import Footer from "../components/Footer";

export default function Cesta() {
  const navigate = useNavigate();

  const { 
    itens = [], 
    alterarQuantidade, 
    removerItem, 
    esvaziarCesta 
  } = useCarrinho();

  const obterPrecoNumerico = (item) => {
    if (!item) return 0;
    const valor = item.precoAtual ?? item.preco ?? item.precoPromocional ?? item.valor ?? 0;
    if (typeof valor === "number") return valor;
    if (typeof valor === "string") {
      const limpo = valor.replace("R$", "").replace(".", "").replace(",", ".").trim();
      return parseFloat(limpo) || 0;
    }
    return 0;
  };

  const subtotal = itens.reduce((acc, item) => {
    const preco = obterPrecoNumerico(item);
    const qtd = Number(item.quantidade) || 1;
    return acc + preco * qtd;
  }, 0);

  const totalUnidades = itens.reduce((acc, item) => acc + (Number(item.quantidade) || 1), 0);

  return (
    <div className="pagina-cesta">
      <header className="header-farmacia">
        <div className="logo" onClick={() => navigate("/home")}>
          <div className="container-icone-logo">
            <img src={logoImagem} alt="FarmaLife" className="img-logo" />
          </div>
          <span className="nome-farmacia">
            Farma<strong>Life</strong>
          </span>
        </div>
      </header>

      <div className="cesta-pagina-container">
        <button 
          type="button" 
          className="botao-continuar-comprando" 
          onClick={() => navigate("/home")}
        >
          <img src={setaCesta} alt="Voltar" className="img-seta-voltar" />
          CONTINUAR COMPRANDO
        </button>

        <h1 className="titulo-cesta">MINHA CESTA</h1>
        
        <p className="subtitulo-itens">
          {totalUnidades} {totalUnidades === 1 ? "item na cesta" : "itens na cesta"}
        </p>

        <div className="cesta-layout-grid">
          <div className="cesta-card-produtos">
            <div className="tabela-cabecalho">
              <span>PRODUTO</span>
              <span>PREÇO</span>
              <span>QUANTIDADE</span>
              <span>TOTAL</span>
            </div>

            <div className="tabela-corpo">
              {itens.length === 0 ? (
                <p className="cesta-vazia-texto" >
                  Sua cesta está vazia.
                </p>
              ) : (
                itens.map((item, index) => {
                  const precoUnitario = obterPrecoNumerico(item);
                  const quantidade = Number(item.quantidade) || 1;
                  const totalItem = precoUnitario * quantidade;

                  return (
                    <div key={item.id || index} className="linha-produto">
                      <div className="coluna-produto">
                        <div className="badge-posicao">{index + 1}</div>
                        <img src={item.imagem} alt={item.nome} className="img-produto-cesta" />
                        <div className="detalhes-produto">
                          <span className="nome-produto">{item.nome}</span>
                          <span className="vendedor-produto">
                            Vendido e entregue por <strong>FarmaLife</strong>
                          </span>
                        </div>
                      </div>

                      <div className="coluna-preco">
                        R$ {precoUnitario.toFixed(2).replace(".", ",")}
                      </div>

                      <div className="coluna-quantidade">
                        <div className="controle-quantidade">
                          <button type="button" onClick={() => alterarQuantidade(index, -1)}>-</button>
                          <span>{quantidade}</span>
                          <button type="button" onClick={() => alterarQuantidade(index, 1)}>+</button>
                        </div>
                      </div>

                      <div className="coluna-total">
                        R$ {totalItem.toFixed(2).replace(".", ",")}
                      </div>

                      <button 
                        type="button" 
                        className="botao-lixeira" 
                        onClick={() => removerItem(index)}
                        title="Remover produto"
                      >
                        <img src={imagemLixeira} alt="lixeira" className="lixeira-cesta" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            {itens.length > 0 && (
              <div className="rodape-card-produtos">
                <button type="button" className="botao-esvaziar" onClick={esvaziarCesta}>
                  <img src={imagemLixeira} alt="lixeira" className="lixeira-cesta" />
                  ESVAZIAR MINHA CESTA
                </button>
              </div>
            )}
          </div>

          <div className="cesta-card-resumo">
            <h3>RESUMO DO SEU PEDIDO</h3>

            <div className="linha-resumo">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
            </div>

            <div className="linha-resumo desconto">
              <span>Outros descontos</span>
              <span>- R$ 0,00</span>
            </div>

            <div className="linha-resumo desconto">
              <span>Cupons</span>
              <span>- R$ 0,00</span>
            </div>

            <div className="linha-resumo">
              <span>Taxa de entrega</span>
              <span>R$ 0,00</span>
            </div>

            <div className="divisor-resumo"></div>

            <div className="linha-total-final">
              <strong>Total da compra</strong>
              <strong className="valor-total-destaque">
                R$ {subtotal.toFixed(2).replace(".", ",")}
              </strong>
            </div>

            <button type="button" className="botao-finalizar-compra">
              FINALIZAR COMPRA
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}