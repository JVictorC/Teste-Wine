import { Reducer } from 'react';
import { ActiosTypes, ProdutosState } from './../types/index';

interface Action {
  payload: {};
  type: String;
}

const INITIAL_STATE: ProdutosState = {
  data: {},
};

const dadosProdutos: Reducer<ProdutosState, Action> = (
  state = INITIAL_STATE,
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case ActiosTypes.SET_PRODUTOS:
      return { ...state, data: payload };
    default:
      return state;
  }
};

export default dadosProdutos;
