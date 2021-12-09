import styled from 'styled-components';

const colorSelected = '#d14c8f';

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  justify-content: space-between;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  z-index: 1000;
`;

export const Menu = styled.article`
  display: flex;
  justify-content: space-around;
`;

export const BarraDeProcuraStyled = styled.article`
  width: 80%;
  align-self: center;
  padding: 10px;

  input {
    width: 65%;
    margin: 0 25px;
    padding: 15px;
    border-radius: 10px;
    font-size: 20px;
  }

  button {
    padding: 20px 30px;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #b6116e;
  }

`;

export const MenuHeader = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 25px;
  width: 40%;
  @media (min-width: 800px) {
    .icon-menu {
      display: none;
    }
  }
`;

export const ListLinksStyled = styled.ul`
  display: none;

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-evenly;
    flex-grow: 1;
    max-width: 300px;
    align-items: center;
  }
  padding: 0px 15px;
`;

interface LinksStyledProps {
  isSelected: boolean;
}

export const LinksStyled = styled.a<LinksStyledProps>`
  opacity: 0.9;
  cursor: pointer;
  color: gray;
  text-decoration: none;
  font-size: 13px;
  color: ${(props) => (props.isSelected ? colorSelected : 'grey')};
  padding-bottom: 23px;
  border-bottom: 2px solid
    ${(props) => (props.isSelected ? colorSelected : 'none')};
`;

export const ListIconsHeader = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  li {
    svg {
      font-size: 30px;
    }
  }
`;

export const IconSearch = styled.div`
  background: url('https://img.wine.com.br/fenix/image/_big_bang/icons/header-sprite.svg');
  background-origin: content-box;
  cursor: pointer;
  display: inline-block;
  height: 56px;
  margin: 16px 20px;
  outline: 0;
  width: 56px;
`;

interface IconPorps {
  icon?: String;
}

export const Icon = styled.div<IconPorps>`
  position: relative;
  cursor: pointer;
  margin: 16px 20px;
  width: 56px;
  height: 56px;
  overflow: hidden;
  display: ${(props) => (props.icon === 'perfil' ? 'none' : 'block')};

  @media (min-width: 800px) {
    display: block;
  }
`;

export const Counter = styled.text`
  align-items: center;
  background-color: white;
  color: grey;
  border-radius: 50%;
  bottom: -1px;
  display: flex;
  height: 20px;
  justify-content: center;
  position: absolute;
  right: -1px;
  width: 20px;
`;

// ref para imagens https://www.wine.com.br/
