import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ProductsList,
  ProductsListLocal,
} from '../../../interfaces/interfaceApiProdutudos';
import { setCarrinho } from '../../../redux/actions';
import { ButtonAddCarrinho, Card, Price } from '../styled';

interface propsInterface {
  produto: ProductsList;
}

export default function CardProduto(props: propsInterface) {
  const { produto } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const redictDetalhes = () => {
    router.push(`produto/${produto.id}`);
  };

  const addProdutoNoCarrino = () => {
    try {
      const carrinho: ProductsListLocal[] = JSON.parse(
        localStorage.getItem('carrinho')
      );
      const validation = carrinho.some((produ) => produ.id === produto.id);
      if (validation) {
        const novoCarrinho = carrinho.map((produ) => {
          if (produ.id === produto.id) {
            produ.qtd += 1;
          }
          return produ;
        });
        localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
        dispatch(setCarrinho(novoCarrinho));
      } else {
        carrinho.push({ ...produto, qtd: 1 });
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        dispatch(setCarrinho(carrinho));
      }
    } catch (error) {
      localStorage.setItem(
        'carrinho',
        JSON.stringify([{ ...produto, qtd: 1 }])
      );
      dispatch(setCarrinho([{ ...produto, qtd: 1 }]));
    }
  };

  return (
    <div key={produto.id} data-cy={`card-produto-${produto.id}`}>
      <Card onClick={() => redictDetalhes()}>
        <section className="images">
          <Image
            src={produto.image}
            alt={produto.name}
            height={200}
            width={150}
          />
          <Image
            src="/logoBlackWine.png"
            width={50}
            height={50}
            alt="icon-blackWine"
          />
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
      <ButtonAddCarrinho onClick={() => addProdutoNoCarrino()} data-cy="adicionar-ao-carrinho">
        Adicionar
      </ButtonAddCarrinho>
    </div>
  );
}
