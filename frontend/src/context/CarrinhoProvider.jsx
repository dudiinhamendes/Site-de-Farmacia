import { useState } from 'react';
import { CarrinhoContext } from './CarrinhoContext';

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  const adicionarAoCarrinho = (produto, quantidade = 1) => {
    setItens((itensAnteriores) => {
      const itemExistente = itensAnteriores.find((item) => item.id === produto.id);

      if (itemExistente) {
        return itensAnteriores.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      }

      return [...itensAnteriores, { ...produto, quantidade }];
    });
  };

  const alterarQuantidade = (index, delta) => {
    setItens((itensAnteriores) => {
      const novosItens = [...itensAnteriores];
      const novaQtd = (novosItens[index]?.quantidade || 1) + delta;
      
      if (novaQtd > 0) {
        novosItens[index] = { ...novosItens[index], quantidade: novaQtd };
        return novosItens;
      }
      return itensAnteriores;
    });
  };

  const removerItem = (index) => {
    setItens((itensAnteriores) => itensAnteriores.filter((_, i) => i !== index));
  };

  const esvaziarCesta = () => {
    setItens([]);
  };

  const totalItens = itens.reduce((acc, item) => acc + (item.quantidade || 0), 0);

  return (
    <CarrinhoContext.Provider
      value={{
        itens,             
        itensCarrinho: itens, 
        setItens,
        adicionarAoCarrinho,
        alterarQuantidade,
        removerItem,
        esvaziarCesta,
        totalItens
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}