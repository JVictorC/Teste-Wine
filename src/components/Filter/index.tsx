import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingProdutos } from '../../redux/actions';
import { AplicationState } from '../../redux/store';
import {
  FilterComponent,
  ListPrices,
  SectionFilter,
  NameFilter,
  LabelFilter,
  TitleFilter,
} from './styled';

function convertFilter(filter: string) {
  const objectLiterals = {
    'Até R$40': '0-40',
    'R$40 A R$60': '40-60',
    'R$100 A R$200': '100-200',
    'R$200 A R$500': '200-500',
    'Acima de R$500': '500-1000',
  };

  return objectLiterals[filter] || '0';
}

export default function Filter() {
  const router = useRouter();
  const dispatch = useDispatch();

  const filterItens = (filter: string) => {
    dispatch(setLoadingProdutos(true));
    router.push(`/?page=1&filter=${convertFilter(filter)}`);
    
  };

  const arrayRadios = [
    'Até R$40',
    'R$40 A R$60',
    'R$100 A R$200',
    'R$200 A R$500',
    'Acima de R$500',
  ];

  return (
    <FilterComponent data-cy="component-filter">
      <TitleFilter>Refine sua Busca</TitleFilter>
      <SectionFilter>
        <h6 style={{ fontWeight: '500' }}>Por Preço</h6>
        <ListPrices>
          {arrayRadios.map((name) => (
            <LabelFilter htmlFor={name} key={name}>
              <input
                type="radio"
                name="filterPrice"
                data-cy={name}
                id={name}
                onClick={() => filterItens(name)}
              />
              <NameFilter>{name}</NameFilter>
            </LabelFilter>
          ))}
        </ListPrices>
      </SectionFilter>
    </FilterComponent>
  );
}
