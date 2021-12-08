import React from 'react';
import {
  HeaderStyled,
  ListIconsHeader,
  IconSearch,
  Icon,
  Counter,
} from './styled';
import Image from 'next/image';

import { BsSearch, BsPerson } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ListLinks from './components/listLinks';
import ImageIcons from './components/imageIcons';

interface event {
  target: String;
}

export default function Header() {
  return (
    <HeaderStyled>
      <Image src="/logoWine.svg" alt="logo Wine" width="70" height="70" />
      <ListLinks />
      <ListIconsHeader>
        <li>
          <IconSearch />
        </li>
        <li>
          <Icon>
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
