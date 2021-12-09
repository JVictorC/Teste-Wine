import React from 'react';
import { useSelector } from 'react-redux';
import { AplicationState } from '../../redux/store';
import Image from 'next/image';
import {
  ConatainerDetalhes,
  Voltar,
  Detalhes,
  ImageProduto,
  ConteudoPrincipal,
  NomeProduto,
} from './styled';
import { IoChevronBack } from 'react-icons/io5';
import Regiao from './components/região';
import Especificaçoes from './components/especificaçoes';
import Precos from './components/precos';
import Comentario from './components/comentario';
import BotaoAdicionar from './components/botaoAdicionar';
import HeaderProduto from './components/headerProduto';

export default function DetalhesProduto() {
  const produto = useSelector(
    (state: AplicationState) => state.detalhesProduto.data
  );

  return (
    <ConatainerDetalhes>
      <Voltar>
        <IoChevronBack />
        Voltar
      </Voltar>
      <ConteudoPrincipal>
        <div>
          <ImageProduto>
            <div className="screenMobile">
              <HeaderProduto produto={produto} />
            </div>
            <Image
              src={produto.image}
              height={800}
              width={500}
              alt="imagem produto"
            />
          </ImageProduto>
        </div>

        <Detalhes>
          <div className="screenMedium">
            <HeaderProduto produto={produto} />
          </div>
          <Precos produto={produto} />
          <Comentario produto={produto} />
          <BotaoAdicionar />
        </Detalhes>
      </ConteudoPrincipal>
    </ConatainerDetalhes>
  );
}
