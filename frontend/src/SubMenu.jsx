import {useState} from 'react';
import './SubMenu.css';

export  function SubMenu({onSelecionarCategoria}) {
const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

const categorias = [
    {id: 'todos', nome: 'Todos'},
    {id: 'medicamentos', nome: 'Medicamentos'},
    {id: 'vitaminas', nome: 'Vitaminas e Suplementos'},
    {id: 'higiene', nome: 'Higiene e Beleza'},
    {id: 'ofertas', nome: 'Ofertas Exclusivas'},
];

const handleCategoriaClick = (nome) => {setCategoriaSelecionada(nome);
    if (onSelecionarCategoria) {
        onSelecionarCategoria(nome);
    }
}; 

return (
    <nav className="submenu-conteiner"> 
        <div className="submenu-conteudo">
            {categorias.map((categoria) => (
                <button
                    key={categoria.id}
                    className={`submenu-item ${categoriaSelecionada === categoria.nome ? 'selecionado' : ''}`}
                    onClick={() => handleCategoriaClick(categoria.nome)}
                >
                    {categoria.nome}
                </button>
            ))}
        </div>
    </nav>
);
}