import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AplicationState } from '../../redux/store';
import {
  ButttonProximo,
  ComponenteProximo,
  OpcaoNavegacaoExpandida,
  OpcaoNavegacaoNormal,
  PaginaUm,
} from './srtyled';

export default function Paginacao() {
  const dadosProdutos = useSelector(
    (state: AplicationState) => state.dadosProdutos.data
  );
  const router = useRouter();
  const pageApi = router.query.page;
  const page2 = Number(pageApi) + 1;
  const page3 = Number(pageApi) + 2;

  const [paginaSelecionada, setPaginaSelecionata] = useState<number>(1);

  const colorSelected = '#b6116e';

  useEffect(() => {
    setPaginaSelecionata(dadosProdutos.page);
  }, [dadosProdutos]);

  const HandleClickDirect = (pageSelected: number) => {
    router.push(`/?page=${pageSelected}`);
  };

  return (
    <ComponenteProximo>
      {paginaSelecionada > 1 && (
        <PaginaUm>
          <OpcaoNavegacaoNormal onClick={() => HandleClickDirect(1)}>
            1
          </OpcaoNavegacaoNormal>
          <p>...</p>
        </PaginaUm>
      )}
      <OpcaoNavegacaoNormal
        onClick={() => HandleClickDirect(paginaSelecionada)}
        color={Number(pageApi) === paginaSelecionada ? colorSelected : 'white'}
      >
        {paginaSelecionada}
      </OpcaoNavegacaoNormal>

      {Number(pageApi) !== dadosProdutos.totalPages && (
        <>
          <OpcaoNavegacaoExpandida
            onClick={() => HandleClickDirect(paginaSelecionada + 1)}
            color={Number(pageApi) === page2 ? colorSelected : 'white'}
          >
            {page2}
          </OpcaoNavegacaoExpandida>

          {page3 < dadosProdutos.totalPages && (
            <OpcaoNavegacaoNormal
              onClick={() => HandleClickDirect(paginaSelecionada + 2)}
              color={Number(pageApi) === page3 ? colorSelected : 'white'}
            >
              {page3}
            </OpcaoNavegacaoNormal>
          )}
        </>
      )}

      <p>...</p>
      <ButttonProximo>{`Próximo >>`}</ButttonProximo>
    </ComponenteProximo>
  );
}
