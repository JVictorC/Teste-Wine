import { route } from 'next/dist/server/router';
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
  const pageApi = router.query.page || 1;
  const page2 = (Number(pageApi) + 1) || 2;
  const page3 = (Number(pageApi) + 2) || 3;

  const [paginaSelecionada, setPaginaSelecionata] = useState<number>(1);

  const colorSelected = '#b6116e';

  useEffect(() => {
    console.log(dadosProdutos);
    setPaginaSelecionata(dadosProdutos.page);
  }, [dadosProdutos]);

  const HandleClickDirect = (pageSelected: number) => {
    const path = router.query;
    if (path.filter) {
      router.push(`/?page=${pageSelected}&filter=${path.filter}`);
      return;
    }
    router.push(`/?page=${pageSelected}`);
  };

  const proximaPagina = () => {
    setPaginaSelecionata(paginaSelecionada + 1);
    HandleClickDirect(paginaSelecionada + 1);
  };

  return (
    <ComponenteProximo data-cy="paginacao">
      {paginaSelecionada > 1 && (
        <PaginaUm>
          <OpcaoNavegacaoNormal
            onClick={() => HandleClickDirect(1)}
            data-cy="voltar-inicio"
          >
            1
          </OpcaoNavegacaoNormal>
          <p>...</p>
        </PaginaUm>
      )}
      <OpcaoNavegacaoNormal
        onClick={() => HandleClickDirect(paginaSelecionada)}
        color={Number(pageApi) === paginaSelecionada ? colorSelected : 'white'}
        data-cy="selecionado"
      >
        {paginaSelecionada}
      </OpcaoNavegacaoNormal>

      {Number(pageApi) !== dadosProdutos.totalPages && (
        <>
          <OpcaoNavegacaoExpandida
            onClick={() => HandleClickDirect(paginaSelecionada + 1)}
            color={Number(pageApi) === page2 ? colorSelected : 'white'}
            data-cy="proximo-1"
          >
            {page2}
          </OpcaoNavegacaoExpandida>

          {page3 < dadosProdutos.totalPages && (
            <OpcaoNavegacaoNormal
              onClick={() => HandleClickDirect(paginaSelecionada + 2)}
              color={Number(pageApi) === page3 ? colorSelected : 'white'}
              data-cy="proximo-2"
            >
              {page3}
            </OpcaoNavegacaoNormal>
          )}
        </>
      )}
      <p>...</p>
      <ButttonProximo
        onClick={() => proximaPagina()}
        data-cy="proximo"
      >{`Pr??ximo >>`}</ButttonProximo>
    </ComponenteProximo>
  );
}
