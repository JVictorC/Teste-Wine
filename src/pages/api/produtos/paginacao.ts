// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getProdutos } from '../../../services/getProdutsPage';

export default async function paginacao(req, res) {
  const method = req.method;
  const query = req.query;
  const { page, filter: filterQuery } = query;
  if (method === 'GET') {
    const filter = filterQuery ? filterQuery : '0';
    const restult = await getProdutos(Number(page), filter);
    res.status(200).json(restult);
  }
}
