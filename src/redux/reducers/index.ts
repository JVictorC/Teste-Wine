import { combineReducers } from 'redux';
import dadosProdutos from './dadosProdutos';
import carrrinho from './carrrinho';

export default combineReducers({
  dadosProdutos,
  carrrinho
});
