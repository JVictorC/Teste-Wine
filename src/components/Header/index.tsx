import React from 'react';
import {
  HeaderStyled,
  ListIconsHeader,
  IconSearch,
  Icon,
  Counter,
  MenuHeader,
} from './styled';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import ListLinks from './components/listLinks';
import ImageIcons from './components/imageIcons';


export default function Header() {
  return (
    <HeaderStyled>
      <MenuHeader>
        <AiOutlineMenu />
        <Image src="/logoWine.svg" alt="logo Wine" width="70" height="70" />
      </MenuHeader>
      <ListLinks />
      <ListIconsHeader>
        <li>
          <IconSearch />
        </li>
        <li>
          <Icon icon="perfil">
            <ImageIcons position={56} />
          </Icon>
        </li>
        <li>
          <Icon>
            <ImageIcons position={112} />
            <Counter>0</Counter>
          </Icon>
        </li>
      </ListIconsHeader>
    </HeaderStyled>
  );
}
