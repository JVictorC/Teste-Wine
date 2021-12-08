import styled from 'styled-components';

const colorSelected = '#d14c8f';

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
`;

export const ListLinksStyled = styled.ul`
  display: none;

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-evenly;
    width: 40%;
    align-items: center;
  }
  padding: 0px 15px;
`;

export const LinksStyled = styled.a`
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
  width: 20%;
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

export const Icon = styled.div`
  position: relative;
  cursor: pointer;
  margin: 16px 20px;
  width: 56px;
  height: 56px;
  overflow: hidden;
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
