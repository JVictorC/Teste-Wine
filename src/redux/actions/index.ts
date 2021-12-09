import { ProductsList } from './../../interfaces/interfaceApiProdutudos';
import { useRouter } from 'next/router';
import axios from 'axios';
import { returnApiProdutos } from '../../interfaces/interfaceApiProdutudos';
import { ActiosTypes } from './../types/index';

export const setProdutos = (payload) => ({
  type: ActiosTypes.SET_PRODUTOS,
  payload,
});


export const setDetalhesProdutos = (payload: ProductsList) => ({
  type: ActiosTypes.SET_DETAILS_PRODUTO,
  payload,
});

export const SetProdutosThunk =
  (page: number, filter: string) => async (dispatch) => {
    if (filter !== '0') {
      const result = await axios.get<returnApiProdutos>(
        `http://localhost:3000/api/produtos?page=${page}&filter=${filter}`
      );
      dispatch(setProdutos(result.data));
    } else {
      const result = await axios.get<returnApiProdutos>(
        `http://localhost:3000/api/produtos?page=${page}`
      );
      dispatch(setProdutos(result.data));
    }
  };
