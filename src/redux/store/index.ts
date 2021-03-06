import { ProdutosState, DetalhesProdutoState, Carrinho } from './../types/index';
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers'


export interface AplicationState {
  dadosProdutos: ProdutosState,
  carrrinho: Carrinho,
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;