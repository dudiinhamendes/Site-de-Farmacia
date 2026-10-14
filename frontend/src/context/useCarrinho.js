import { useContext } from 'react';
import { CarrinhoContext } from './CarrinhoContext';

export const useCarrinho = () => useContext(CarrinhoContext);