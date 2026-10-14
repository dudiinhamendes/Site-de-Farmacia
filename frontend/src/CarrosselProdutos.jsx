import { useRef, useState } from 'react';
import { useCarrinho } from './context/useCarrinho';
import ItemUm from './assets/images/item_um.png';
import ItemDois from './assets/images/item_dois.png';
import ItemTres from './assets/images/item_tres.png';
import ItemQuatro from './assets/images/item_quatro.png';
import ItemCinco from './assets/images/item_cinco.png';
import ItemSeis from './assets/images/item_seis.png';
import ItemSete from './assets/images/item_sete.png';
import ItemOito from './assets/images/item_oito.png';
import ItemNove from './assets/images/item_nove.png';
import ItemDez from './assets/images/item_dez.png';
import ItemOnze from './assets/images/item_onze.png';
import ItemDoze from './assets/images/item_doze.png';
import ItemTreze from './assets/images/item_treze.png';
import ItemQuatorze from './assets/images/item_quatorze.png';
import ItemQuinze from './assets/images/item_quinze.png';
import iconeCesta from './assets/images/cesta.png';
import './CarrosselProdutos.css';

export default function CarrosselProdutos({ termoBusca = "", categoria = "Todos" }) {
  const carrosselRef = useRef(null);
  const { carrinho, adicionarAoCarrinho } = useCarrinho(); 
console.log("Conteúdo do carrinho:", carrinho); 


  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [quantidade, setQuantidade] = useState(1);

  const produtos = [
    {
      id: 1,
      nome: 'Sabonete Líquido Corporal Nivea Óleo De Banho 200ml',
      marca: 'NIVEA',
      categoria: 'Higiene e Beleza',
      imagem: ItemUm,
      precoAntigo: '44,99',
      precoAtual: '32,90',
      desconto: 27
    },
    {
      id: 2,
      nome: 'Kit Dove Reconstrução + Aminoácido Shampoo + Condicionador',
      marca: 'DOVE',
      categoria: 'Higiene e Beleza',
      imagem: ItemDois,
      precoAntigo: '36,99',
      precoAtual: '28,90',
      desconto: 22
    },
    {
      id: 3,
      nome: 'Kit Sabonete Em Barra Dove Original 6 Unidades 90g Cada + Desodorante Antitranspirante Aerosol Masculino Rexona',
      marca: 'DOVE',
      categoria: ['Higiene e Beleza', 'Ofertas Exclusivas'],
      tag: 'KIT PROMOCIONAL',
      imagem: ItemTres,
      precoAntigo: '57,48',
      precoAtual: '43,80',
      desconto: 24
    },
    {
      id: 4,
      nome: 'Sabonete Líquido Hidratante Antibacteriano Refil Panvel 1L',
      marca: 'PANVEL',
      categoria: 'Higiene e Beleza',
      imagem: ItemQuatro,
      precoAntigo: '29,99',
      precoAtual: '17,99',
      desconto: 40
    },
    {
      id: 5,
      nome: 'Lenços Umedecidos Panvel Baby 140 unidades',
      marca: 'PANVEL',
      imagem: ItemCinco,
      precoAntigo: '14,99',
      precoAtual: '10,00',
      desconto: '33,29',
      categoria: 'Higiene e Beleza'
    },
    {
      id: 6,
      nome: 'Supositorio Glicerinado Granado Adulto 12 unidade(s)',
      marca: 'GRANADO',
      imagem: ItemSeis,
      precoAntigo: '31,99',
      precoAtual: '25,30',
      desconto: '21%',
      categoria: 'Medicamentos'
    },
    {
      id: 7,
      nome: 'Bolsa P/ Transporte De Medicamento + Glicose Líquida',
      marca: 'Wellion',
      imagem: ItemSete,
      precoAntigo: '160,90',
      precoAtual: '129,90',
      desconto: '23%',
      categoria: 'Medicamentos'
    },
    {
      id: 8,
      nome: 'Espaçador Para Medicamentos Máscara Adulto Infantil',
      marca: 'DALLAMED',
      imagem: ItemOito,
      precoAntigo: '45,00',
      precoAtual: '37,08',
      desconto: '18%',
      categoria: 'Medicamentos'
    },
    {
      id: 9,
      nome: 'Analgésico Neosaldina Dipirona 300mg + Mucato De Isometepteno 30mg + Cafeína 30mg 20 Drágeas',
      marca: 'NEOSALDINA',
      imagem: ItemNove,
      precoAntigo: '35,50',
      precoAtual: '28,27',
      desconto: '20%',
      categoria: 'Medicamentos'
    },
    {
      id: 10,
      nome: 'Dipirona Sódica 500 mg 10 Comprimidos Ems Genérico',
      marca: 'EMS',
      imagem: ItemDez,
      precoAntigo: '10,19',
      precoAtual: '4,59',
      desconto: '55%',
      categoria: 'Medicamentos'
    },
    {
      id: 11,
      nome: 'Suplemento Alimentar Vitamina E Vita Supraz 30 Cápsulas',
      marca: 'VITA SUPRAZ',
      imagem: ItemOnze,
      precoAntigo: '32,99',
      precoAtual: '29,40',
      desconto: '11%',
      categoria: 'Vitaminas e Suplementos'
    },
    {
      id: 12,
      nome: 'Suplemento Alimentar Sundown Vitamina E 400 Ui 100 Cápsulas',
      marca: 'SUNDOWN',
      imagem: ItemDoze,
      precoAntigo: '105,99',
      precoAtual: '159,46',
      desconto: '14%',
      categoria: 'Vitaminas e Suplementos'
    },
    {
      id: 13,
      nome: 'Suplemento Nutricional Vitamina E 30 Cápsulas',
      marca: 'SANAVITA',
      imagem: ItemTreze,
      precoAntigo: '40,30',
      precoAtual: '38,64',
      desconto: '20%',
      categoria: 'Vitaminas e Suplementos'
    },
    {
      id: 14,
      nome: 'Centrum Essencial Multivitamínico Energia + Imunidade + Nutrição 30 Comprimidos',
      marca: 'CENTRUM',
      imagem: ItemQuatorze,
      precoAntigo: '32,99',
      precoAtual: '19,99',
      desconto: '39%',
      categoria: 'Vitaminas e Suplementos'
    },
    {
      id: 15,
      nome: 'Suplemento Alimentar Adeforte Turbo Ampola 3ml + Ampola Biotina 3ml',
      marca: 'ADEFORTE',
      imagem: ItemQuinze,
      precoAntigo: '50,99',
      precoAtual: '46,21',
      desconto: '22%',
      categoria: 'Vitaminas e Suplementos'
    },
  ];

  const produtosFiltrados = produtos.filter((prod) => {
    const atendeBusca =
      prod.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
      prod.marca.toLowerCase().includes(termoBusca.toLowerCase());

    let atendeCategoria = false;

    if (categoria === 'Todos') {
      atendeCategoria = true;
    } else if (Array.isArray(prod.categoria)) {
      atendeCategoria = prod.categoria.some(
        (c) => c.toLowerCase() === categoria.toLowerCase()
      );
    } else if (typeof prod.categoria === 'string') {
      atendeCategoria = prod.categoria.toLowerCase() === categoria.toLowerCase();
    }

    return atendeBusca && atendeCategoria;
  });

  const abrirModalQuant = (produto) => { setProdutoSelecionado(produto); setQuantidade(1); };
  const fecharModal = () => { setProdutoSelecionado(null); };

  const handleConfirmarAdicao = () => {
    if (produtoSelecionado) {
      adicionarAoCarrinho(produtoSelecionado, quantidade);
      fecharModal();
    }
  };

  return (
    <section className="secao-produtos-grid">
      <h2 className="titulo-secao-produtos">
        {termoBusca ? `Resultados para "${termoBusca}"` : "Mês do Cliente com descontos especiais!"}
      </h2>

      <div className="produtos-container" ref={carrosselRef}>
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((prod) => {
            const itemNoCarrinho = carrinho?.find((item) => (item.id === prod.id || item.produto?.id === prod.id));
const qtdNoCarrinho = itemNoCarrinho ? (itemNoCarrinho.quantidade || itemNoCarrinho.qtd || 0) : 0;
       
return (
              <div key={prod.id} className="card-produto">
                <div className="card-topo-img">
                  <img src={prod.imagem} alt={prod.nome} className="produto-img" />
                  <button
                    className="botao-cestinha-card"
                    title="Adicionar ao carrinho"
                    onClick={() => abrirModalQuant(prod)}
                  >
                    <img src={iconeCesta} alt="Ícone de cesta" className="img-cesta" />
                    {qtdNoCarrinho > 0 && (
                      <span className="badge-quantidade-card">{qtdNoCarrinho}</span>
                    )}
                  </button>
                </div>

                <div className="card-corpo">
                  <h3 className="produto-nome">{prod.nome}</h3>
                  <span className="produto-marca">{prod.marca}</span>

                  {prod.tag && <span className="produto-tag">{prod.tag}</span>}

                  <div className="produto-rodape-preco">
                    <div className="linha-preco-antigo">
                      <span className="preco-antigo">R$ {prod.precoAntigo}</span>
                      <span className="desconto-off">-{prod.desconto}%</span>
                    </div>
                    <div className="preco-atual">
                      R$ <strong>{prod.precoAtual}</strong>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="sem-produtos">Nenhum produto encontrado para "{termoBusca}".</p>
        )}
      </div>

      {produtoSelecionado && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal-quantidade" onClick={(e) => e.stopPropagation()}>
            <button className="botao-fechar-modal" onClick={fecharModal}>✕</button>
            
            <div className="modal-conteudo">
              <img src={produtoSelecionado.imagem} alt={produtoSelecionado.nome} className="modal-img-prod" />
              <h4>{produtoSelecionado.nome}</h4>
              <p className="modal-preco">R$ {produtoSelecionado.precoAtual}</p>

              <div className="seletor-quantidade">
                <button 
                  onClick={() => setQuantidade((prev) => Math.max(1, prev - 1))}
                  disabled={quantidade <= 1}
                >
                  -
                </button>
                <span>{quantidade}</span>
                <button onClick={() => setQuantidade((prev) => prev + 1)}>
                  +
                </button>
              </div>

              <button className="botao-confirmar-carrinho" onClick={handleConfirmarAdicao}>
                Adicionar {quantidade} {quantidade > 1 ? 'itens' : 'item'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}