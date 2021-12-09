import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  ProductsList,
  returnApiProdutos,
} from '../../interfaces/interfaceApiProdutudos';
import { Produtos } from '../../components/ListProducts/styled';

export default function DetalhesProduto() {
  const router = useRouter();
  const [produto, setstate] = useState<ProductsList>();

  const getItemById = useCallback(
    async () => {
      const query = router.query;
      const detailsProduto = await axios.get<returnApiProdutos>(
        `/api/produtos/${query.id}`
      );
      const {
        data: { items },
      } = detailsProduto;
      setstate(items[0]);
    },
    [router],
  )

  useEffect(() => {
    getItemById();
  }, [getItemById]);

  const votlarPrincipal = () => {
    router.back();
  };

  return (
    <>
      {produto && (
        <ConatainerDetalhes>
          <Voltar onClick={() => votlarPrincipal()}>
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
              <BotaoAdicionar produto={produto} />
            </Detalhes>
          </ConteudoPrincipal>
        </ConatainerDetalhes>
      )}
    </>
  );
}
