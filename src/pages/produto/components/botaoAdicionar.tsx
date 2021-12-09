import React, { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { BotaoAdicionarStyled } from '../styled';

export default function BotaoAdicionar() {
  const [couter, setCouter] = useState<number>(1);

  return (
    <BotaoAdicionarStyled>
      <article>
        <AiOutlineMinusCircle className="icon" onClick={() => setCouter(couter - 1)}/>
        <p>{couter}</p>
        <AiOutlinePlusCircle className="icon" onClick={() => setCouter(couter + 1)} />
      </article>
      <button>Adicionar</button>
    </BotaoAdicionarStyled>
  );
}
