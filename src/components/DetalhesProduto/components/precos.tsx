import React from 'react';
import { ProductsList } from '../../../interfaces/interfaceApiProdutudos';
import { PrecosStyled } from '../styled';

interface iProps {
  produto: ProductsList;
}

export default function Precos(props: iProps) {
  const { produto } = props;

  return (
    <PrecosStyled>
      <article className="price-member">
        {produto.priceMember
          .toFixed(2)
          .toString()
          .split('.')
          .map((number, index) => (
            <span key={index} className={`price-${index}`}>
              {number}
            </span>
          ))}
      </article>
      <article className="price-non-member">
        {produto.priceNonMember
          .toFixed(2)
          .toString()
          .split('.')
          .map((number, index) => (
            <span key={index} className={`price-${index}`}>
              {number}
            </span>
          ))}
      </article>
    </PrecosStyled>
  );
}
