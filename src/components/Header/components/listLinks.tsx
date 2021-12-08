import React, { useState } from 'react';
import { ListLinksStyled } from '../styled';
import LinkHeader from './link';

export default function ListLinks() {

  const [linkSelected, setLinkSelected] = useState<String>('');

  const listLinksNames = ['Clube', 'Loja', 'Produtores', 'Ofertas', 'Eventos'];

  const handleClickDirect = (value: String) => {
    setLinkSelected(value);
  };

  return (
    <ListLinksStyled>
      {listLinksNames.map((linkName) => (
        <li key={linkName} onClick={() => handleClickDirect(linkName)}>
          <LinkHeader isSelected={linkSelected === linkName} name={linkName} />
        </li>
      ))}
    </ListLinksStyled>
  );
}
