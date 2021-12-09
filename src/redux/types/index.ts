import { returnApiProdutos, ProductsList, ProductsListLocal } from './../../interfaces/interfaceApiProdutudos';

export enum ActiosTypes {
  SET_PRODUTOS = "SET_PRODUTOS",
  SET_CARRINHO = 'SET_CARRINHO',
  SET_LOADING_PRODUTOS = 'SET_LOADING_PRODUTOS'
} 

export interface ProdutosState {
  readonly data: returnApiProdutos,
  readonly isLoading: boolean,
}

export interface DetalhesProdutoState {
  readonly data: ProductsList;
}

export interface Carrinho {
  readonly data: ProductsListLocal[]
}