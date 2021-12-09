import { Reducer } from 'react';
import { ActiosTypes, ProdutosState } from './../types/index';

interface Action {
  payload: any;
  type: String;
}

const INITIAL_STATE: ProdutosState = {
  data: {},
  isLoading: false,
};

const dadosProdutos: Reducer<ProdutosState, Action> = (
  state = INITIAL_STATE,
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case ActiosTypes.SET_LOADING_PRODUTOS:
      return { ...state, isLoading: payload };
    case ActiosTypes.SET_PRODUTOS:
      return { ...state, data: payload, isLoading: false };
    default:
      return state;
  }
};

export default dadosProdutos;
