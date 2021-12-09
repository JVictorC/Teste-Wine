import React, { useCallback, useEffect, useState } from 'react';
import { ContainerProducts, Produtos, SubTitle } from './styled';
import axios from 'axios';
import { returnApiProdutos } from '../../interfaces/interfaceApiProdutudos';
import LoadingComponent from '../LoadingComponents';
import CardProduto from './components/cardProduto';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingProdutos, SetProdutosThunk } from '../../redux/actions';
import { AplicationState } from '../../redux/store';
import { useRouter } from 'next/router';

export default function ListProducts() {
  const products = useSelector(
    (state: AplicationState) => state.dadosProdutos.data
  );
  const isLoading = useSelector(
    (state: AplicationState) => state.dadosProdutos.isLoading
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const getItens = useCallback(() => {
    const { page: pageQuery, filter: filerQuery } = router.query;
    const filter = filerQuery ? filerQuery : '0';
    const page = pageQuery ? pageQuery : 1;
    dispatch(SetProdutosThunk(Number(page), `${filter}`));
  }, [dispatch, router]);

  useEffect(() => {
    dispatch(setLoadingProdutos(true));
    getItens();
  }, [getItens]);

  return (
    <>
      {isLoading ? (
        <ContainerProducts>
          <LoadingComponent size={50} />
        </ContainerProducts>
      ) : (
        <ContainerProducts>
          <SubTitle>
            {isLoading ? (
              <LoadingComponent size={15} />
            ) : (
              <span className="total-produtos">{products.totalItems}</span>
            )}
            {products.totalItems === 0
              ? 'Nenhum Produto Encontrado'
              : 'Produtos encontrados'}
          </SubTitle>
          <div className="produtos-list">
            {isLoading ? (
              <LoadingComponent size={75} />
            ) : (
              <Produtos>
                {products.items?.map((produto) => (
                  <CardProduto key={produto.id} produto={produto} />
                ))}
              </Produtos>
            )}
          </div>
        </ContainerProducts>
      )}
    </>
  );
}
