import styled from 'styled-components';

export const ContainerProducts = styled.section`
  flex-grow: 1;
  min-height: 100vh;

  .produtos-list {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
`;

export const SubTitle = styled.h6`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 13px;
  font-weight: 500;
  font-size: 10px;

  .total-produtos {
    font-size: 16px;
    font-weight: 600;
    padding: 5px;
  }
`;

export const Produtos = styled.article`
  display: grid;
  min-height: 100vh;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  div {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  justify-content: space-around;
  flex-grow: 1;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  .nome-produto {
    font-size: 15px;
  }

  .images {
    display: flex;
    align-items: flex-end;
    margin-left: 20%;
    padding: 15px;
  }

  .label-price {
    font-weight: 600;
    font-size: 10px;
    text-transform: uppercase;
    font-family: 400;
  }

  .price-member::before {
    content: ' R$ ';
    font-weight: 700;
    font-size: 13px;
    color: #b6116e;
  }

  .price-0::after {
    content: ',';
  }

  .price-1 {
    font-size: 13px;
  }

  .price-member {
    font-size: 20px;
    color: #b6116e;
    font-weight: 600;
    font-family: 'MontSerrat';
  }

  .price-nonMember {
    font-size: 13px;
    color: grey;
    margin: 15px 0px;
    font-weight: 600;
  }

  .price-nonMember::before {
    content: ' NÃO SÓCIO R$ ';
  }

  .priceNonMember-0::after {
    content: ',';
  }
`;

export const Price = styled.article`
  display: flex;
  align-items: center;
  .price {
    margin: 15px 0px;
    text-decoration: line-through;
    font-size: 13px;
    color: grey;
    font-weight: 600;
  }

  span {
    content: '60%OFF';
    background-color: #f79552;
    color: white;
    margin: 0px 5px;
    padding: 2px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 10px;
  }

  .price::before {
    content: 'R$:';
  }
`;

export const ButtonAddCarrinho = styled.button`
  align-self: center;
  background-color: #7ebc42;
  color: white;
  border: none;
  font-size: 15px;
  text-transform: uppercase;
  padding: 15px;
  width: 100%;
  border-radius: 5px;
  margin: 15px;
  cursor: pointer;
`;
