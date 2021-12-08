import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ContainerProducts,
  Produtos,
  SubTitle,
} from './styled';
import axios from 'axios';
import { returnApiProdutos } from '../../interfaces/interfaceApiProdutudos';
import LoadingComponent from '../LoadingComponents';
import CardProduto from './components/cardProduto';

export default function ListProducts() {
  const [products, setProducts] = useState<returnApiProdutos>({});
  const [loading, setLoading] = useState(false);
  const getItens = useCallback(async () => {
    setLoading(true);
    const result = await axios.get<returnApiProdutos>(
      'http://localhost:3000/api/produtos'
    );
    setProducts(result.data);
    setLoading(false);
  }, []);

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
