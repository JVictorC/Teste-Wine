import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProductsList, returnApiProdutos } from '../../../interfaces/interfaceApiProdutudos';
import { setProdutos } from '../../../redux/actions';
import { BarraDeProcuraStyled } from '../styled';

export default function BarraDeProcura() {
  const [form, setForm] = useState<String>('');
  const dispatch = useDispatch();

  const filterProdutos = async (filter: String): Promise<returnApiProdutos> => {
    const produtos = await getAllProdutos();

    const produtosFItler = produtos.filter((produto) => (
      produto.name.toLowerCase().includes(filter.toLowerCase())
    ))
    
    return {
      page: 1,
      totalPages: 1,
      itemsPerPage: produtosFItler.length,
      totalItems: produtosFItler.length,
      items: produtosFItler,
    }
  }

  const getAllProdutos = async (): Promise<ProductsList[]> => {
    const result = await axios.get<returnApiProdutos>('api/produtos/todos');
    return result.data.items;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const arrayFiltered = await filterProdutos(form);
    dispatch(setProdutos(arrayFiltered));
  }

  return (
    <BarraDeProcuraStyled>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Procurar Item:
          <input type="text" onChange={(e) => setForm(e.target.value)}/>
        </label>
        <button type="submit">Procurar</button>
      </form>
    </BarraDeProcuraStyled>
  );
}
