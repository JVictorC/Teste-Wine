

import { Reducer } from 'react';
import { ProductsList } from '../../interfaces/interfaceApiProdutudos';
import { ActiosTypes, DetalhesProdutoState } from '../types/index';

interface Action {
  payload: ProductsList;
  type: String;
}

const INITIAL_STATE: DetalhesProdutoState = {
  data: {}
};

const detalhesProduto: Reducer<DetalhesProdutoState, Action> = (
  state = INITIAL_STATE,
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case ActiosTypes.SET_DETAILS_PRODUTO:
      return { data: payload };
    default:
      return state;
  }
};

export default detalhesProduto;