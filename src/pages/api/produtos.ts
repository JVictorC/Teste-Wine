// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getProdutos} from '../../services/getProduts';

export default async function produtos(req, res) {
  const method = req.method
  if(method === 'GET') {
    const restult = await getProdutos();
    res.status(200).json(restult)
  }
}
