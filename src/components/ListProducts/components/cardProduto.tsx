import Image from 'next/image';
import React from 'react';
import { ProductsList } from '../../../interfaces/interfaceApiProdutudos';
import { ButtonAddCarrinho, Card, Price } from '../styled';

interface propsInterface {
  produto: ProductsList;
}

export default function CardProduto(props: propsInterface) {
  const { produto } = props;

  return (
    <div key={produto.id}>
      <Card>
        <section className="images">
          <Image src={produto.image} alt={produto.name} height={200} width={150}/>
          <Image src="/logoBlackWine.png" width={50} height={50} alt="icon-blackWine" />
        </section>
        <h6 className="nome-produto">{produto.name}</h6>
        <Price>
          <p className="price">{produto.price}</p>
          <span>60% OFF</span>
        </Price>
        <article>
          <span className="label-price">Sócio Wine</span>
          <span className="price-member">
            {produto.priceMember
              .toFixed(2)
              .toString()
              .split('.')
              .map((number, index) => (
                <span key={index} className={`price-${index}`}>
                  {number}
                </span>
              ))}
          </span>
        </article>
        <p className="price-nonMember">
          {produto.priceNonMember
            .toFixed(2)
            .toString()
            .split('.')
            .map((number, index) => (
              <span key={index} className={`priceNonMember-${index}`}>
                {number}
              </span>
            ))}
        </p>
      </Card>
      <ButtonAddCarrinho>Adicionar</ButtonAddCarrinho>
    </div>
  );
}
