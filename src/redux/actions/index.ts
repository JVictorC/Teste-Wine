import axios from 'axios';
import { returnApiProdutos } from '../../interfaces/interfaceApiProdutudos';
import { ActiosTypes } from './../types/index';

export const setProdutos = (payload) => ({
  type: ActiosTypes.SET_PRODUTOS,
  payload,
});

export const SetProdutosThunk = (page: number) => async (dispatch) => {
  const result = await axios.get<returnApiProdutos>(
    `http://localhost:3000/api/produtos?page=${page}`
  );
  dispatch(setProdutos(result.data));
};
