import { returnApiProdutos, ProductsList, ProductsListLocal } from './../../interfaces/interfaceApiProdutudos';

export enum ActiosTypes {
  SET_PRODUTOS = "SET_PRODUTOS",
  SET_CARRINHO = 'SET_CARRINHO',
} 

export interface ProdutosState {
  readonly data: returnApiProdutos,
}

export interface DetalhesProdutoState {
  readonly data: ProductsList;
}

export interface Carrinho {
  readonly data: ProductsListLocal[]
}