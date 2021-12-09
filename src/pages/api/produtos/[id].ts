import { getAllProdutos } from '../../../services/getAllProdutos';

export default async function id(req, res) {
  const method = req.method;
  const {id} = req.query;

  if (method === 'GET') {
    const restult = await getAllProdutos();

    const itemById = restult.items.filter((produto) => produto.id === Number(id));
    res.status(200).json(
      {
        page: restult.page,
        totalPages: 1,
        itemsPerPage: 1,
        totalItems: itemById.length,
        items: itemById,
      }
    );
  }
}