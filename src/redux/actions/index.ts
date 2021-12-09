import { ProductsListLocal } from './../../interfaces/interfaceApiProdutudos';
import axios from 'axios';
import { returnApiProdutos } from '../../interfaces/interfaceApiProdutudos';
import { ActiosTypes } from './../types/index';

export const setProdutos = (payload) => ({
  type: ActiosTypes.SET_PRODUTOS,
  payload,
});


export const setCarrinho = (payload: ProductsListLocal[]) => ({
  type: ActiosTypes.SET_CARRINHO,
  payload,
})

export const setLoadingProdutos = (payload: boolean) => ({
  type: ActiosTypes.SET_LOADING_PRODUTOS,
  payload,
})


export const SetProdutosThunk =
  (page: number, filter: string) => async (dispatch) => {
    if (filter !== '0') {
      const result = await axios.get<returnApiProdutos>(
        `http://localhost:3000/api/produtos/paginacao?page=${page}&filter=${filter}`
      );
      dispatch(setProdutos(result.data));
    } else {
      const result = await axios.get<returnApiProdutos>(
        `http://localhost:3000/api/produtos/paginacao?page=${page}`
      );
      dispatch(setProdutos(result.data));
    }
  };
