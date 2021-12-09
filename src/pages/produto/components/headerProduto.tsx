import React from 'react';
import { ProductsList } from '../../../interfaces/interfaceApiProdutudos';
import { NomeProduto } from '../styled';
import Especificaçoes from './especificaçoes';
import Regiao from './região';

interface iProps {
  produto: ProductsList;
}

export default function HeaderProduto(props: iProps) {
  const { produto } = props;

  return (
    <>
      <Regiao produto={produto} />
      <NomeProduto>{produto.name}</NomeProduto>
      <Especificaçoes produto={produto} />
    </>
  );
}
