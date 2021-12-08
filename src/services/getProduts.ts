import axios from "axios";
import { returnApiProdutos } from "../interfaces/interfaceApiProdutudos";

export async function getProdutos():Promise<returnApiProdutos> {
  const result = await axios.get<returnApiProdutos>('https://wine-back-test.herokuapp.com/products?page=1&limit=9');
  return result.data;
};