import { getAllProdutos } from '../../../services/getAllProdutos';

export default async function todos(req, res) {
  const method = req.method;
  if (method === 'GET') {
    const restult = await getAllProdutos()
    res.status(200).json(restult);
  }
}
