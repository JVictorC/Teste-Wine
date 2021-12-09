import { combineReducers } from 'redux';
import dadosProdutos from './dadosProdutos';
import detalhesProduto from './detalhesProduto';

export default combineReducers({
  dadosProdutos,
  detalhesProduto,
});
