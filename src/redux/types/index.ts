import { returnApiProdutos, ProductsList } from './../../interfaces/interfaceApiProdutudos';

export enum ActiosTypes {
  SET_PRODUTOS = "SET_PRODUTOS",
  SET_DETAILS_PRODUTO = "SET_DETAILS_PRODUTO",
} 

export interface ProdutosState {
  readonly data: returnApiProdutos,
}

export interface DetalhesProdutoState {
  readonly data: ProductsList;
}