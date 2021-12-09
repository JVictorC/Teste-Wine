import React from 'react';
import Image from 'next/image';
import { ProductsList } from '../../../interfaces/interfaceApiProdutudos';
import { EspecificaçõesStyled } from '../styled';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface iProps {
  produto: ProductsList;
}

function Stars(produt: ProductsList) {
  const stars = [];
  for (let index = 0; index < 5; index += 1) {
    if (index < produt.rating) {
      stars.push(<AiFillStar className="star-color" />);
    } else {
      stars.push(<AiOutlineStar />);
    }
  }

  return (
    <div>
      {stars}
    </div>
  );
}

export default function Especificaçoes(props: iProps) {
  const { produto } = props;

  return (
    <EspecificaçõesStyled>
      <div className="dados-pais">
        <Image src={produto.flag} width="20" height="20" alt="imagem flag" />
        <span>{produto.country}</span>
      </div>
      <p>{produto.type}</p>
      <p>{produto.classification}</p>
      <p>{produto.size}</p>
      {Stars(produto)}
      <span>({produto.avaliations})</span>
    </EspecificaçõesStyled>
  );
}
