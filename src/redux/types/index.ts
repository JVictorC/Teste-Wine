import { returnApiProdutos } from './../../interfaces/interfaceApiProdutudos';

export enum ActiosTypes {
  SET_PRODUTOS = "SET_PRODUTOS",
} 

export interface ProdutosState {
  readonly data: returnApiProdutos,
  readonly hasFilter: boolean,
}