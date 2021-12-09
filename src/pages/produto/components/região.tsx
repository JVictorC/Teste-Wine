import React from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { ProductsList } from '../../../interfaces/interfaceApiProdutudos';
import { RegiaoStyled } from '../styled';

interface iProps {
  produto: ProductsList
}

export default function Regiao(props: iProps) {
  const { produto } = props;
  return (
    <RegiaoStyled>
      <p>Vinhos</p> 
      <IoChevronForward className="seta"/>
      <p className="pais">{produto.country}</p> 
      <IoChevronForward className="seta"/>
      <p className="regiao">{produto.region}</p>
    </RegiaoStyled>
  );
}
