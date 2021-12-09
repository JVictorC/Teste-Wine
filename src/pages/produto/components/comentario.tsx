import React from 'react';
import { ProductsList } from '../../../interfaces/interfaceApiProdutudos';
import { ComentarioStyled } from '../styled';

interface iProps {
  produto: ProductsList;
}

export default function Comentario(props: iProps) {
  const { produto } = props;

  return (
    <ComentarioStyled>
      <h5>Comentário do Sommelier</h5>
      <p>{produto.sommelierComment}</p>
    </ComentarioStyled>
  );
}
