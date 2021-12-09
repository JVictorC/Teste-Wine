import React, { useCallback, useEffect, useState } from 'react';
import { ContainerProducts, Produtos, SubTitle } from './styled';
import axios from 'axios';
import { returnApiProdutos } from '../../interfaces/interfaceApiProdutudos';
import LoadingComponent from '../LoadingComponents';
import CardProduto from './components/cardProduto';
import { useDispatch, useSelector } from 'react-redux';
import { SetProdutosThunk } from '../../redux/actions';
import { AplicationState } from '../../redux/store';
import { useRouter } from 'next/router';

export default function ListProducts() {
  const products = useSelector(
    (state: AplicationState) => state.dadosProdutos.data
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const getItens = useCallback(() => {
    const { pageQuery, filterQuery } = router.query;
    setLoading(true);
    const filter = filterQuery ? filterQuery : '0'
    const page = pageQuery ? pageQuery : 1;
    dispatch(SetProdutosThunk(Number(page), `${filter}`));
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
        {products.totalItems === 0
          ? 'Nenhum Produto Encontrado'
          : 'Produtos encontrados'}
      </SubTitle>
      <div className="produtos-list">
        {loading ? (
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
  );
}
