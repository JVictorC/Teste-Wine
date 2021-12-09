import React, { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import {
  ProductsList,
  ProductsListLocal,
} from '../../../interfaces/interfaceApiProdutudos';
import { setCarrinho } from '../../../redux/actions';
import { BotaoAdicionarStyled } from '../styled';

interface iProps {
  produto: ProductsList;
}

export default function BotaoAdicionar(props: iProps) {
  const [couter, setCouter] = useState<number>(1);
  const { produto } = props;
  const dispatch = useDispatch();
  const addProdutoNoCarrino = () => {
    try {
      const carrinho: ProductsListLocal[] = JSON.parse(
        localStorage.getItem('carrinho')
      );
      const validation = carrinho.some((produ) => produ.id === produto.id);
      if (validation) {
        const novoCarrinho = carrinho.map((produ) => {
          if (produ.id === produto.id) {
            produ.qtd += couter;
          }
          return produ;
        });
        localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
        dispatch(setCarrinho(novoCarrinho));
      } else {
        carrinho.push({ ...produto, qtd: couter });
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        dispatch(setCarrinho(carrinho));
      }
    } catch (error) {
      localStorage.setItem(
        'carrinho',
        JSON.stringify([{ ...produto, qtd: couter }])
      );
      dispatch(setCarrinho([{ ...produto, qtd: couter }]));
    }
  };

  return (
    <BotaoAdicionarStyled>
      <article>
        <AiOutlineMinusCircle
          className="icon"
          onClick={() => setCouter(couter - 1)}
          data-cy="botão-menos"
        />
        <p data-cy="contador">{couter}</p>
        <AiOutlinePlusCircle
          className="icon"
          onClick={() => setCouter(couter + 1)}
          data-cy="botão-mais"
        />
      </article>
      <button onClick={addProdutoNoCarrino} data-cy="botão-adicionar">Adicionar</button>
    </BotaoAdicionarStyled>
  );
}
