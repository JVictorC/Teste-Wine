import React, { useEffect, useState } from 'react';
import {
  HeaderStyled,
  ListIconsHeader,
  IconSearch,
  Icon,
  Counter,
  MenuHeader,
  Menu,
} from './styled';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import ListLinks from './components/listLinks';
import ImageIcons from './components/imageIcons';
import { ProductsListLocal } from '../../interfaces/interfaceApiProdutudos';
import { useSelector } from 'react-redux';
import { AplicationState } from '../../redux/store';
import BarraDeProcura from './components/BarraDeProcura';

export default function Header() {
  const [total, setTotal] = useState<number>(0);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const carrinho = useSelector(
    (state: AplicationState) => state.carrrinho.data
  );

  useEffect(() => {
    const total = carrinho.reduce((acc, produc) => {
      acc += produc.qtd;
      return acc;
    }, 0);
    setTotal(total);
  }, [carrinho]);

  return (
    <>
      <HeaderStyled>
        <Menu>
          <MenuHeader>
            <AiOutlineMenu className="icon-menu" />
            <Image src="/logoWine.svg" alt="logo Wine" width={70} height={70} />
            <ListLinks />
          </MenuHeader>
          <ListIconsHeader>
            <li>
              <IconSearch onClick={() => setShowSearchBar(!showSearchBar)} />
            </li>
            <li>
              <Icon icon="perfil">
                <ImageIcons position={56} />
              </Icon>
            </li>
            <li>
              <Icon>
                <ImageIcons position={112} />
                <Counter>{total}</Counter>
              </Icon>
            </li>
          </ListIconsHeader>
        </Menu>
        {showSearchBar && <BarraDeProcura />}
      </HeaderStyled>
    </>
  );
}
