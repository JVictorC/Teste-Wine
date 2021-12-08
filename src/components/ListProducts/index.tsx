import React, { useCallback, useEffect, useState } from 'react';
import { ContainerProducts, Produtos, SubTitle } from './styled';
import axios from 'axios';
import { returnApiProdutos } from '../../interfaces/interfaceApiProdutudos';
import LoadingComponent from '../LoadingComponents';
import CardProduto from './components/cardProduto';
import { useDispatch, useSelector } from 'react-redux';
import { SetProdutosThunk } from '../../redux/actions';
import {AplicationState} from '../../redux/store'
import { useRouter } from 'next/router';

export default function ListProducts() {
  const products = useSelector((state: AplicationState) => state.dadosProdutos.data);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const getItens = useCallback(() => {
    setLoading(true);
    dispatch(SetProdutosThunk(Number(router.query.page)));
    setLoading(false);
  }, [dispatch, router]);

  useEffect(() => {
    getItens();
  }, [getItens]);

  return (
    <ContainerProducts>
      <SubTitle>
        {loading ? (
          <LoadingComponent />
        ) : (
          <span className="total-produtos">{products.totalItems}</span>
        )}
        Produtos encontrados
      </SubTitle>
      <div className="produtos-list">
        {loading ? (
          <LoadingComponent size={75} />
        ) : (
          <Produtos isLoading={loading}>
            {products.items?.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </Produtos>
        )}
      </div>
    </ContainerProducts>
  );
}
