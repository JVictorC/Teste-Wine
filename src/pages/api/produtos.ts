// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getProdutos } from '../../services/getProduts';

export default async function produtos(req, res) {
  const method = req.method;
  const query = req.query;
  const { page, filter } = query;
  if (method === 'GET') {
    const restult = await getProdutos(Number(page), filter || '0');
    res.status(200).json(restult);
  }
}
