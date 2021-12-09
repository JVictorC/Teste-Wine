import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  ProductsList,
  returnApiProdutos,
} from '../../../interfaces/interfaceApiProdutudos';
import { setLoadingProdutos, setProdutos } from '../../../redux/actions';
import { BarraDeProcuraStyled } from '../styled';

export default function BarraDeProcura() {
  const [form, setForm] = useState<String>('');
  const dispatch = useDispatch();

  const filterProdutos = async (filter: String): Promise<returnApiProdutos> => {
    const produtos = await getAllProdutos();

    const produtosFItler = produtos.filter((produto) =>
      produto.name.toLowerCase().includes(filter.toLowerCase())
    );

    return {
      page: 1,
      totalPages: 1,
      itemsPerPage: produtosFItler.length,
      totalItems: produtosFItler.length,
      items: produtosFItler,
    };
  };

  const getAllProdutos = async (): Promise<ProductsList[]> => {
    const result = await axios.get<returnApiProdutos>('api/produtos/todos');
    return result.data.items;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLoadingProdutos(true));
    const arrayFiltered = await filterProdutos(form);
    dispatch(setProdutos(arrayFiltered));
  };

  return (
    <BarraDeProcuraStyled>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="barra-procura">
          <span>Procurar Item:</span>
          <input
            type="text"
            onChange={(e) => setForm(e.target.value)}
            id="barra-procura"
          />
        </label>
        <button type="submit">Procurar</button>
      </form>
    </BarraDeProcuraStyled>
  );
}
