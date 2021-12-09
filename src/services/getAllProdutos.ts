import axios from "axios";
import { returnApiProdutos } from "../interfaces/interfaceApiProdutudos";

export async function getAllProdutos():Promise<returnApiProdutos> {
  const result = await axios.get<returnApiProdutos>(`https://wine-back-test.herokuapp.com/products?`);
  return result.data;
};