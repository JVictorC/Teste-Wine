import axios from "axios";
import { returnApiProdutos } from "../interfaces/interfaceApiProdutudos";

export async function getProdutos(page: number, filter: string):Promise<returnApiProdutos> {
  const result = await axios.get<returnApiProdutos>(`https://wine-back-test.herokuapp.com/products?page=${page}&limit=9&filter=${filter}`);
  return result.data;
};