import React from 'react';
import { LinksStyled } from '../styled';

export default function LinkHeader({ isSelected, name }) {
  return (
    <LinksStyled isSelected={isSelected}>{name}</LinksStyled>
  );
}
