import { Reducer } from 'react';
import { ActiosTypes, Carrinho } from '../types/index';

interface Action {
  payload: [];
  type: String;
}

const INITIAL_STATE: Carrinho = {
  data: [],
};

const carrrinho: Reducer<Carrinho, Action> = (
  state = INITIAL_STATE,
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case ActiosTypes.SET_CARRINHO:
      return {data: payload};
    default:
      return state;
  }
};

export default carrrinho;